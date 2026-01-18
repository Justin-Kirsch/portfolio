'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
    { label: 'Startseite', href: '#hero' },
    { label: 'Über mich', href: '#about' },
    { label: 'Projekte', href: '#projects' },
    { label: 'Kontakt', href: '#contact' },
];

export function Navigation() {
    const [mounted, setMounted] = React.useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const [activeSection, setActiveSection] = React.useState('hero');
    const [indicatorStyle, setIndicatorStyle] = React.useState({ left: 0, width: 0 });
    const { theme, setTheme } = useTheme();

    React.useEffect(() => {
        setMounted(true);
    }, []);

    // Update indicator position when active section changes or window resizes
    React.useEffect(() => {
        const updateIndicator = () => {
            if (typeof window === 'undefined') return;

            const activeElement = document.querySelector(`[data-nav-item="${activeSection}"]`);
            const container = activeElement?.parentElement;

            if (!activeElement || !container) {
                setIndicatorStyle({ left: 0, width: 0 });
                return;
            }

            const containerRect = container.getBoundingClientRect();
            const activeRect = activeElement.getBoundingClientRect();

            setIndicatorStyle({
                left: activeRect.left - containerRect.left,
                width: activeRect.width,
            });
        };

        // Update after mount and when active section changes
        updateIndicator();

        // Also update on window resize
        window.addEventListener('resize', updateIndicator);
        return () => window.removeEventListener('resize', updateIndicator);
    }, [activeSection, mounted]);

    // Track active section based on scroll position
    React.useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => item.href.substring(1));
            const scrollPosition = window.scrollY + 100; // Offset for navbar height

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section) {
                    const sectionTop = section.offsetTop;
                    if (scrollPosition >= sectionTop) {
                        setActiveSection(sections[i]);
                        break;
                    }
                }
            }

            // If at the very top, set to hero
            if (window.scrollY < 100) {
                setActiveSection('hero');
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call once on mount

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setMobileMenuOpen(false);

        const targetId = href.substring(1);

        // Special handling for hero/startseite
        if (targetId === 'hero') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setActiveSection('hero');
        } else {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                setActiveSection(targetId);
            }
        }
    };

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src={theme === 'light' ? '/images/logo_dark.webp' : '/images/logo.webp'}
                        alt="JK Logo"
                        width={120}
                        height={40}
                        sizes="120px"
                        className="h-16 w-auto"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-6 md:flex">
                    <div className="relative flex items-center gap-6">
                        {navItems.map((item, index) => {
                            const isActive = activeSection === item.href.substring(1);
                            return (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e, item.href)}
                                    className={cn(
                                        "relative text-sm font-medium transition-colors hover:text-foreground py-1",
                                        isActive
                                            ? "text-primary"
                                            : "text-muted-foreground"
                                    )}
                                    data-nav-item={item.href.substring(1)}
                                >
                                    {item.label}
                                </a>
                            );
                        })}

                        {/* Animated sliding indicator */}
                        <span
                            className="absolute -bottom-[21px] h-0.5 bg-primary transition-all duration-300 ease-out"
                            style={{
                                left: `${indicatorStyle.left}px`,
                                width: `${indicatorStyle.width}px`,
                            }}
                        />
                    </div>

                    {/* Theme Toggle */}
                    {mounted && (
                        <motion.button
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            className="relative group"
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <div className="relative rounded-lg bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 p-[2px] transition-all duration-300 hover:from-primary/30 hover:via-accent/30 hover:to-primary/30">
                                <div className="rounded-lg bg-background/80 backdrop-blur-xl p-2 transition-all duration-300 hover:bg-background/60">
                                    <motion.div
                                        key={theme}
                                        initial={{ rotate: -180, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                    >
                                        {theme === 'dark' ? (
                                            <Sun className="h-5 w-5 text-primary" />
                                        ) : (
                                            <Moon className="h-5 w-5 text-primary" />
                                        )}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.button>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-2 md:hidden">
                    {mounted && (
                        <motion.button
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            className="relative group"
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <div className="relative rounded-lg bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 p-[2px] transition-all duration-300 hover:from-primary/30 hover:via-accent/30 hover:to-primary/30">
                                <div className="rounded-lg bg-background/80 backdrop-blur-xl p-2 transition-all duration-300 hover:bg-background/60">
                                    <motion.div
                                        key={theme}
                                        initial={{ rotate: -180, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                    >
                                        {theme === 'dark' ? (
                                            <Sun className="h-5 w-5 text-primary" />
                                        ) : (
                                            <Moon className="h-5 w-5 text-primary" />
                                        )}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.button>
                    )}

                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    'md:hidden',
                    mobileMenuOpen ? 'block' : 'hidden'
                )}
            >
                <div className="space-y-1 border-t border-border/40 bg-background px-4 pb-4 pt-2">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.href.substring(1);
                        return (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item.href)}
                                className={cn(
                                    "block rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-muted hover:text-foreground",
                                    isActive
                                        ? "bg-primary/10 text-primary border-l-2 border-primary"
                                        : "text-muted-foreground"
                                )}
                            >
                                {item.label}
                            </a>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
