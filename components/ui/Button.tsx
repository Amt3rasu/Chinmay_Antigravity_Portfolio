import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    href,
    variant = 'primary',
    size = 'md',
    children,
    className,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:pointer-events-none active:scale-95 hover:scale-[1.02]";

    const variants = {
        primary: "bg-primary text-primary-foreground hover:brightness-110 shadow-md hover:shadow-lg border border-transparent",
        secondary: "bg-primary/20 text-primary hover:bg-primary/30 border border-primary shadow-sm hover:shadow-md",
        outline: "bg-transparent text-foreground border border-border hover:bg-accent hover:text-accent-foreground shadow-sm"
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg"
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
        if (href.startsWith('http') || href.startsWith('mailto')) {
            return (
                <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
                    {children}
                </a>
            );
        }
        return (
            <Link to={href} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
};

interface ButtonArrowProps {
    className?: string;
    direction?: 'right' | 'left' | 'up' | 'down';
    children?: React.ReactNode;
}

export const ButtonArrow: React.FC<ButtonArrowProps> = ({
    className,
    direction = 'right',
    children = '→'
}) => {
    // Determine rotation based on direction
    const rotation = {
        right: 'rotate-0',
        left: 'rotate-180',
        up: '-rotate-90',
        down: 'rotate-90'
    }[direction];

    // Determine translation direction
    // For "right" arrow: move right (+x)
    // For "left" arrow: move left (-x)
    // For "up" arrow: move up (-y)
    // For "down" arrow: move down (+y)

    const translateOut = {
        right: 'group-hover:translate-x-[150%]',
        left: 'group-hover:-translate-x-[150%]',
        up: 'group-hover:-translate-y-[150%]',
        down: 'group-hover:translate-y-[150%]'
    }[direction];

    const translateIn = {
        right: '-translate-x-[150%] group-hover:translate-x-0',
        left: 'translate-x-[150%] group-hover:translate-x-0',
        up: 'translate-y-[150%] group-hover:translate-y-0',
        down: '-translate-y-[150%] group-hover:translate-y-0',
    }[direction];

    return (
        <span className={cn("relative inline-flex overflow-hidden ml-2", className)}>
            <span className={cn("transition-transform duration-300", rotation, translateOut)}>
                {children}
            </span>
            <span className={cn("absolute inset-0 transition-transform duration-300", rotation, translateIn)}>
                {children}
            </span>
        </span>
    );
};
