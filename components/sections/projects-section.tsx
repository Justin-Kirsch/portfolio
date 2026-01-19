'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { projects } from '@/lib/data/projects';

const statusConfig = {
    live: { label: 'Live', className: 'bg-green-500/10 text-green-500 border-green-500/30' },
    development: { label: 'In Development', className: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/30' },
    archived: { label: 'Archived', className: 'bg-gray-500/10 text-gray-500 border-gray-500/30' },
};

export function ProjectsSection() {
    return (
        <Section id="projects" className="bg-muted/30">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center">
                        Projekte
                    </h2>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project, idx) => {
                            const isFeatured = project.featured;
                            const statusInfo = project.status ? statusConfig[project.status] : null;

                            return (
                                <motion.div
                                    key={project.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className={isFeatured ? 'md:col-span-2 lg:col-span-3' : ''}
                                >
                                    <Card className={`h-full flex flex-col card-enhanced dark:border-accent/20 overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 ${isFeatured ? 'md:flex-row' : ''}`}>
                                        {/* Project Image */}
                                        {project.image && (
                                            <div className={`relative overflow-hidden bg-muted ${isFeatured ? 'md:w-1/2' : 'w-full h-48'}`}>
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    fill
                                                    priority={isFeatured}
                                                    sizes={
                                                        isFeatured
                                                            ? "(max-width: 768px) 100vw, 50vw"
                                                            : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    }
                                                    className="object-cover object-[center_top] transition-transform duration-500 group-hover:scale-110"
                                                />
                                                {/* Status Badge */}
                                                {statusInfo && (
                                                    <div className="absolute top-4 right-4">
                                                        <Badge variant="outline" className={statusInfo.className}>
                                                            {statusInfo.label}
                                                        </Badge>
                                                    </div>
                                                )}
                                                {/* Gradient Overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            </div>
                                        )}

                                        {/* Content */}
                                        <div className={`flex flex-col flex-1 gap-4 ${isFeatured ? 'md:w-1/2' : ''}`}>
                                            <CardHeader>
                                                <div className="flex items-start justify-between gap-2">
                                                    <CardTitle className={isFeatured ? 'text-2xl' : 'text-xl'}>
                                                        {project.title}
                                                    </CardTitle>
                                                    {isFeatured && (
                                                        <Badge variant="secondary" className="gradient-text border-primary/30">
                                                            Featured
                                                        </Badge>
                                                    )}
                                                </div>
                                                <CardDescription className={isFeatured ? 'text-base' : ''}>
                                                    {project.description}
                                                </CardDescription>
                                            </CardHeader>

                                            <CardContent className="flex-1">
                                                <div className="flex flex-wrap gap-2">
                                                    {project.technologies.map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className="rounded-md bg-accent/20 border border-accent/40 px-2.5 py-1 text-xs font-medium text-accent hover:bg-accent/30 transition-colors"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </CardContent>

                                            <CardFooter className="gap-2">
                                                {project.githubUrl && (
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        asChild
                                                        className="flex-1 btn-glass"
                                                    >
                                                        <a
                                                            href={project.githubUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <Github className="mr-2 h-4 w-4" />
                                                            Code
                                                        </a>
                                                    </Button>
                                                )}
                                                {project.liveUrl && (
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        asChild
                                                        className="flex-1 btn-glass"
                                                    >
                                                        <a
                                                            href={project.liveUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <ExternalLink className="mr-2 h-4 w-4" />
                                                            Live
                                                        </a>
                                                    </Button>
                                                )}
                                            </CardFooter>
                                        </div>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </Container>
        </Section>
    );
}
