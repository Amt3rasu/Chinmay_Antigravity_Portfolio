"use client";
import React, {
    useEffect,
    useRef,
    useState,
    createContext,
    useContext,
} from "react";
import {
    IconArrowNarrowLeft,
    IconArrowNarrowRight,
    IconX,
} from "@tabler/icons-react";
import { cn } from "../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface CarouselProps {
    items: React.ReactNode[];
    initialScroll?: number;
}

type CardData = {
    src: string;
    title: string;
    category: string;
    id: string;
    externalUrl?: string;
};

export const CarouselContext = createContext<{
    onCardClose: (index: number) => void;
    currentIndex: number;
}>({
    onCardClose: () => { },
    currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
    const carouselRef = React.useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = React.useState(false);
    const [canScrollRight, setCanScrollRight] = React.useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startScrollLeft, setStartScrollLeft] = useState(0);
    const [hasDragged, setHasDragged] = useState(false);

    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = initialScroll;
            checkScrollability();
        }
    }, [initialScroll]);

    const checkScrollability = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
        }
    };

    const scrollLeft = () => {
        if (carouselRef.current) {
            const scrollAmount = isMobile() ? 240 : 400; // w-56(224)+16=240, w-96(384)+16=400
            carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            const scrollAmount = isMobile() ? 240 : 400;
            carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!carouselRef.current) return;
        setIsDragging(true);
        setHasDragged(false);
        setStartX(e.pageX - carouselRef.current.offsetLeft);
        setStartScrollLeft(carouselRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        // Small delay to reset hasDragged so click handlers can check it
        setTimeout(() => setHasDragged(false), 50);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !carouselRef.current) return;
        e.preventDefault();
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 1.5; // Scroll speed multiplier
        carouselRef.current.scrollLeft = startScrollLeft - walk;
        if (Math.abs(x - startX) > 5) {
            setHasDragged(true);
        }
    };

    const handleCardClose = (index: number) => {
        if (carouselRef.current) {
            const cardWidth = isMobile() ? 230 : 384;
            const gap = isMobile() ? 4 : 8;
            const scrollPosition = (cardWidth + gap) * (index + 1);
            carouselRef.current.scrollTo({
                left: scrollPosition,
                behavior: "smooth",
            });
            setCurrentIndex(index);
        }
    };

    const isMobile = () => {
        return window && window.innerWidth < 768;
    };

    return (
        <CarouselContext.Provider
            value={{ onCardClose: handleCardClose, currentIndex, isDragging: hasDragged }}
        >
            <div className="relative w-full group">
                <div
                    className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none] cursor-grab active:cursor-grabbing"
                    ref={carouselRef}
                    onScroll={checkScrollability}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >

                    <div
                        className={cn(
                            "flex flex-row justify-start gap-4 pl-4",
                            "max-w-7xl mx-auto"
                        )}
                    >
                        {items.map((item, index) => (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                        delay: 0.1 * index,
                                    },
                                }}
                                key={"card" + index}
                                className="last:pr-[5%] md:last:pr-[33%] rounded-3xl"
                            >
                                {item}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Navigation Buttons - Absolute Positioned */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-4 md:px-10 z-50">
                    <button
                        className="pointer-events-auto h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg flex items-center justify-center disabled:opacity-0 disabled:pointer-events-none hover:bg-accent transition-all duration-300 opacity-0 group-hover:opacity-100"
                        onClick={scrollLeft}
                        disabled={!canScrollLeft}
                        aria-label="Scroll left"
                    >
                        <IconArrowNarrowLeft className="h-6 w-6 text-foreground" />
                    </button>
                    <button
                        className="pointer-events-auto h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg flex items-center justify-center disabled:opacity-0 disabled:pointer-events-none hover:bg-accent transition-all duration-300 opacity-0 group-hover:opacity-100"
                        onClick={scrollRight}
                        disabled={!canScrollRight}
                        aria-label="Scroll right"
                    >
                        <IconArrowNarrowRight className="h-6 w-6 text-foreground" />
                    </button>
                </div>
            </div>
        </CarouselContext.Provider>
    );
};

interface CardProps {
    card: CardData;
    index: number;
    layout?: boolean;
}

export const Card: React.FC<CardProps> = ({
    card,
    index,
    layout = false,
}) => {
    const navigate = useNavigate();

    const handleOpen = () => {
        if (card.externalUrl) {
            window.open(card.externalUrl, '_blank', 'noopener,noreferrer');
        } else {
            navigate(`/project/${card.id}`);
        }
    };

    return (
        <>
            <motion.button
                layoutId={layout ? `card-${card.title}` : undefined}
                onClick={handleOpen}
                whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                className="rounded-3xl bg-muted h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-end relative z-10"
            >
                {/* Layer 1: Base - Blurred Background Image */}
                <img
                    src={card.src}
                    alt={card.title}
                    className="object-cover absolute inset-0 z-0 blur-xl scale-110 opacity-100 w-full h-full"
                />

                {/* Layer 2: Middle - Actual Image (Centered, No Bounding Box) */}
                <div className="absolute inset-0 z-10 flex items-center justify-center pb-12 pointer-events-none">
                    <BlurImage
                        src={card.src}
                        alt={card.title}
                        className="object-contain w-[85%] h-[75%] rounded-xl shadow-sm"
                    />
                </div>

                {/* Layer 3: Top - Text (Overlay) */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 drop-shadow-md">
                    <motion.p
                        layoutId={layout ? `category-${card.category}` : undefined}
                        className="text-white text-sm md:text-base font-medium font-sans text-left"
                    >
                        {card.category}
                    </motion.p>
                    <motion.p
                        layoutId={layout ? `title-${card.title}` : undefined}
                        className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2"
                    >
                        {card.title}
                    </motion.p>
                </div>
            </motion.button>
        </>
    );
};

export const BlurImage = ({
    height,
    width,
    src,
    className,
    alt,
    ...rest
}: any) => {
    const [isLoading, setLoading] = useState(true);
    return (
        <img
            className={cn(
                "transition duration-300",
                isLoading ? "blur-sm" : "blur-0",
                className
            )}
            onLoad={() => setLoading(false)}
            src={src}
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
            blurDataURL={typeof src === "string" ? src : undefined}
            alt={alt ? alt : "Background of a beautiful view"}
            {...rest}
        />
    );
};
