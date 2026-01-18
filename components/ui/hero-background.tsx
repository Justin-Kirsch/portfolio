'use client';

export function HeroBackground() {
    return (
        <>
            {/* Light Mode Gradient Orbs */}
            <div className="absolute inset-0 dark:hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/15 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/15 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
                <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
            </div>

            {/* Radial Gradient Glow - Dark Mode Only */}
            <div className="absolute inset-0 dark:bg-[radial-gradient(circle_at_30%_50%,oklch(0.70_0.15_195_/_0.15),transparent_50%)]" />
            <div className="absolute inset-0 dark:bg-[radial-gradient(circle_at_70%_50%,oklch(0.65_0.18_285_/_0.15),transparent_50%)]" />

            {/* Grid Pattern Overlay - Enhanced for Light Mode */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.70_0.15_195_/_0.15)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.70_0.15_195_/_0.15)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,oklch(0.70_0.15_195_/_0.05)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.70_0.15_195_/_0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />
        </>
    );
}
