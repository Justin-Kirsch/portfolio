'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';

export function CurrentStatusCard() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8"
        >
            <Card className="card-enhanced bg-gradient-to-br from-primary/5 via-background to-accent/5 border-primary/20">
                <div className="p-6">
                    <div className="flex items-start gap-4">
                        <div className="rounded-lg bg-primary/10 p-3 glow-cyan">
                            <GraduationCap className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold mb-2 text-foreground">
                                Aktueller Status
                            </h3>
                            <div className="space-y-3 text-sm text-muted-foreground">
                                <div className="flex items-start gap-3">
                                    <GraduationCap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                    <p>
                                        <span className="font-medium text-foreground">Umschulung:</span> Fachinformatiker für Anwendungsentwicklung
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Briefcase className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                                    <p>
                                        <span className="font-medium text-foreground">Suche:</span> Praktikum zur Vertiefung meiner Kenntnisse in einem professionellen Entwicklerteam
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Calendar className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                                    <p>
                                        <span className="font-medium text-foreground">Verfügbar ab:</span> August 2026
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </motion.div>
    );
}
