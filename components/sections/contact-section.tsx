'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';

const contactLinks = [
    {
        label: 'E-Mail',
        username: 'kontakt@kirsch-justin.de',
        href: 'mailto:kontakt@kirsch-justin.de',
        icon: Mail,
    },
    {
        label: 'GitHub',
        username: 'Justin-Kirsch',
        href: 'https://github.com/Justin-Kirsch',
        icon: Github,
    },
    {
        label: 'LinkedIn',
        username: 'kirsch-justin',
        href: 'https://www.linkedin.com/in/kirsch-justin/',
        icon: Linkedin,
    },
];

export function ContactSection() {
    return (
        <Section id="contact">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-2xl text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">
                        Kontakt
                    </h2>

                    <p className="text-lg text-muted-foreground mb-12">
                        Ich freue mich über Ihre Nachricht! Kontaktieren Sie mich gerne über
                        eine der folgenden Möglichkeiten.
                    </p>

                    <div className="grid gap-6 sm:grid-cols-3">
                        {contactLinks.map((link, idx) => {
                            const Icon = link.icon;

                            return (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    target={link.href.startsWith('http') ? '_blank' : undefined}
                                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="group flex flex-col items-center gap-4 rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
                                >
                                    <div className="rounded-full bg-primary/10 p-4 transition-all group-hover:bg-primary/20 group-hover:scale-110">
                                        <Icon className="h-7 w-7 text-primary" />
                                    </div>
                                    <div className="text-center space-y-1">
                                        <p className="font-semibold text-foreground text-sm">{link.label}</p>
                                        <p className="text-base font-medium text-primary">
                                            {link.username}
                                        </p>
                                    </div>
                                </motion.a>
                            );
                        })}
                    </div>
                </motion.div>
            </Container>
        </Section>
    );
}
