'use client';

import { motion } from 'framer-motion';
import { Code, Globe, Wrench, Database } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { skills, skillCategories } from '@/lib/data/skills';

interface CompactSkillCardProps {
    title: string;
    icon: React.ElementType;
    skills: string[];
    index: number;
}

function CompactSkillCard({ title, icon: Icon, skills, index }: CompactSkillCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Card className="h-full card-enhanced bg-white dark:bg-card dark:border-primary/20">
                <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                        <div className="rounded-lg bg-primary/0 dark:bg-primary/20 p-2 glow-cyan">
                            <Icon className="h-4 w-4 text-primary" />
                        </div>
                        <CardTitle className="text-base">{title}</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="pb-3">
                    <div className="flex flex-wrap gap-1.5">
                        {skills.map((skill) => (
                            <span
                                key={skill}
                                className="rounded-md bg-primary/10 border border-primary/30 px-2 py-1 text-xs font-medium text-foreground hover:bg-primary/20 transition-colors"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}

interface CompactSkillsDisplayProps {
    className?: string;
}

export function CompactSkillsDisplay({ className }: CompactSkillsDisplayProps) {
    // Icon mapping for categories
    const categoryIcons = {
        languages: Code,
        web: Globe,
        backend: Database,
        tools: Wrench,
    };

    // Group skills by category
    const groupedSkills = Object.keys(skillCategories).map((categoryKey) => {
        const category = categoryKey as keyof typeof skillCategories;
        return {
            title: skillCategories[category],
            icon: categoryIcons[category],
            skills: skills
                .filter((skill) => skill.category === category)
                .map((skill) => skill.name),
        };
    });

    return (
        <div className={`space-y-12 ${className || ''}`}>
            {groupedSkills.map((category, index) => (
                <CompactSkillCard
                    key={category.title}
                    title={category.title}
                    icon={category.icon}
                    skills={category.skills}
                    index={index}
                />
            ))}
        </div>
    );
}
