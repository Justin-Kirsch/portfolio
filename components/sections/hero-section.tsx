'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/layout/container';
import { ProfileImage } from '@/components/ui/profile-image';
import { HeroBackground } from '@/components/ui/hero-background';

export function HeroSection() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Enhanced Background with Animation */}
            <HeroBackground />

            {/* Content */}
            <Container className="relative z-10">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center py-20">
                    {/* Left Side - Text Content */}
                    <div className="flex flex-col space-y-8 text-center md:text-left">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex justify-center md:justify-start"
                        >
                            <Badge variant="secondary" className="px-4 py-2 text-sm flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                Verfügbar für ein Praktikum ab August 2026
                            </Badge>
                        </motion.div>

                        {/* Heading */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="space-y-6"
                        >
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                                <span className="block gradient-text">Justin Kirsch</span>
                            </h1>
                            <div className="space-y-2">
                                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-muted-foreground font-medium">
                                    Angehender Fachinformatiker für
                                </p>
                                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-foreground font-semibold">
                                    Anwendungsentwicklung
                                </p>
                            </div>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg text-muted-foreground sm:text-xl leading-relaxed max-w-xl"
                        >
                            Leidenschaftlich für moderne Full-Stack-Entwicklung. Spezialisiert auf
                            React, Next.js und TypeScript mit fundiertem Backend-Wissen in Node.js,
                            PostgreSQL und Prisma.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Button
                                size="lg"
                                onClick={() => scrollToSection('contact')}
                                className="group btn-gradient border-0 hover:scale-105 hover:-translate-y-0.5 transition-all"
                            >
                                Kontakt aufnehmen
                                <Mail className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                onClick={() => scrollToSection('projects')}
                                className="group btn-glass hover:scale-105 hover:-translate-y-0.5 transition-all"
                            >
                                Projekte ansehen
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex gap-4 justify-center md:justify-start"
                        >
                            <a
                                href="https://github.com/Justin-Kirsch"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground transition-all hover:text-primary hover:scale-110"
                                aria-label="GitHub"
                            >
                                <Github className="h-6 w-6" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/kirsch-justin/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground transition-all hover:text-primary hover:scale-110"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-6 w-6" />
                            </a>
                            <a
                                href="mailto:kontakt@kirsch-justin.de"
                                className="text-muted-foreground transition-all hover:text-primary hover:scale-110"
                                aria-label="Email"
                            >
                                <Mail className="h-6 w-6" />
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Side - Profile Image */}
                    <div className="flex justify-center md:justify-end">
                        <ProfileImage
                            src="/images/profile.webp"
                            alt="Justin Kirsch - Fachinformatiker für Anwendungsentwicklung"
                        />
                    </div>
                </div>
            </Container>

            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </section>
    );
}
