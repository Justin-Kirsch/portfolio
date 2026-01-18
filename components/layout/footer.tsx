'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border/40 bg-background">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid gap-8 md:grid-cols-3">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-foreground">Portfolio</h3>
                        <p className="text-sm text-muted-foreground">
                            Angehender Fachinformatiker für Anwendungsentwicklung
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-foreground">Navigation</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="#hero"
                                    className="text-muted-foreground transition-colors hover:text-primary"
                                >
                                    Startseite
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="text-muted-foreground transition-colors hover:text-primary"
                                >
                                    Über mich
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#projects"
                                    className="text-muted-foreground transition-colors hover:text-primary"
                                >
                                    Projekte
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="text-muted-foreground transition-colors hover:text-primary"
                                >
                                    Kontakt
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-foreground">Kontakt</h3>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/Justin-Kirsch"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground transition-all hover:text-primary hover:scale-110"
                                aria-label="GitHub"
                            >
                                <Github className="h-5 w-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/kirsch-justin/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground transition-all hover:text-primary hover:scale-110"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a
                                href="mailto:kontakt@kirsch-justin.de"
                                className="text-muted-foreground transition-all hover:text-primary hover:scale-110"
                                aria-label="Email"
                            >
                                <Mail className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-8 border-t border-border/40 pt-8">
                    <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                        {/* Copyright */}
                        <p className="text-sm text-muted-foreground">
                            © {currentYear} Justin Kirsch. Alle Rechte vorbehalten.
                        </p>

                        {/* Legal Links */}
                        <div className="flex gap-6 text-sm">
                            <Link
                                href="/impressum"
                                className="text-muted-foreground transition-colors hover:text-primary"
                            >
                                Impressum
                            </Link>
                            <Link
                                href="/datenschutz"
                                className="text-muted-foreground transition-colors hover:text-primary"
                            >
                                Datenschutz
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
