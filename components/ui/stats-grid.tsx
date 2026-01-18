'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Briefcase, Code2, Calendar, Layers } from 'lucide-react';
import { skills } from '@/lib/data/skills';
import { projects } from '@/lib/data/projects';

interface Stat {
    label: string;
    value: number;
    suffix?: string;
    icon: React.ElementType;
}

const stats: Stat[] = [
    { label: 'Projekte', value: projects.length, icon: Briefcase },
    { label: 'Jahr Erfahrung', value: 1, icon: Code2 },
    { label: 'Technologien', value: skills.length, suffix: '+', icon: Layers },
];

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let startTime: number | null = null;
        const duration = 2000; // 2 seconds

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            setCount(Math.floor(progress * value));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, value]);

    return (
        <span ref={ref}>
            {count}{suffix}
        </span>
    );
}

export function StatsGrid() {
    return (
        <div className="grid grid-cols-3 gap-4 mt-8">
            {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative group"
                    >
                        <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-4 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="rounded-lg bg-primary/10 p-1.5 group-hover:bg-primary/20 transition-colors">
                                    <Icon className="h-4 w-4 text-primary" />
                                </div>
                            </div>
                            <div className="text-2xl font-bold text-foreground">
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
