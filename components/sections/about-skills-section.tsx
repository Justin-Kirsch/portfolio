'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { CompactSkillsDisplay } from '@/components/ui/compact-skill-card';
import { StatsGrid } from '@/components/ui/stats-grid';
import { CurrentStatusCard } from '@/components/ui/current-status-card';

export function AboutSkillsSection() {
    return (
        <Section id="about" className="bg-muted/30">
            <Container>
                <div className="grid md:grid-cols-5 gap-12 lg:gap-16">
                    {/* Left Side - Compact Skills (2 columns) */}
                    <div className="md:col-span-2 order-2 md:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="text-2xl font-bold mb-6 text-center md:text-left">
                                Skills & Technologien
                            </h3>
                            <CompactSkillsDisplay />
                        </motion.div>
                    </div>

                    {/* Right Side - About Text + Stats (3 columns) */}
                    <div className="md:col-span-3 order-1 md:order-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="space-y-8"
                        >
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                                Über mich
                            </h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    Mein Name ist <span className="text-foreground font-semibold">Justin Michael Kirsch</span>, ich bin 30 Jahre alt und verbringe meine Freizeit gerne mit meiner Familie, Gaming und mit der Programmierung. Schon als Kind haben mich Computer und die Prozesse fasziniert, die hinter jedem einzelnen Mausklick stecken. Diese Neugier hat mich mein Leben lang begleitet und schließlich zu meiner heutigen Leidenschaft geführt.
                                </p>
                                <p>
                                    Meine erste Zeile Code habe ich im <span className="text-foreground font-medium">Oktober 2022</span> geschrieben. Nur wenige Monate später, im März 2023, begann ich eine Weiterbildung zum Front-End-Entwickler. Durch diese intensive Lernphase konnte ich mir nicht nur technisches Wissen, sondern auch eine klare Struktur und ein tiefes Verständnis für moderne Webentwicklung aneignen.
                                </p>
                                <p>
                                    Heute arbeite ich mit Begeisterung daran, <span className="text-foreground font-medium">Ideen in nutzerfreundliche und ästhetische digitale Erlebnisse</span> zu verwandeln.
                                </p>
                                <p>
                                    Ich suche ein <span className="text-accent font-medium">Praktikum</span>, in dem ich meine Fähigkeiten in einem
                                    professionellen Umfeld einbringen und weiterentwickeln kann. Dabei
                                    schätze ich besonders die Zusammenarbeit im Team und den Austausch
                                    mit erfahrenen Entwicklern.
                                </p>
                            </div>

                            {/* Stats Grid */}
                            <StatsGrid />

                            {/* Current Status Card */}
                            <CurrentStatusCard />
                        </motion.div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
