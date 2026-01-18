'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { User } from 'lucide-react';

interface ProfileImageProps {
    src?: string;
    alt?: string;
    initials?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-64 h-64',
    xl: 'w-80 h-80 lg:w-96 lg:h-96',
};

export function ProfileImage({
    src,
    alt = 'Profile',
    initials = 'JK',
    size = 'xl'
}: ProfileImageProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
                opacity: 1,
                scale: 1,
                y: [0, -5, 0]
            }}
            transition={{
                opacity: { duration: 0.5, delay: 0.3 },
                scale: { duration: 0.5, delay: 0.3 },
                y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }}
            className="relative"
        >
            <div className={`${sizeClasses[size]} relative`}>
                {/* Glassmorphism Border Container */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary via-accent to-primary p-[3px] glow-pulse">
                    <div className="h-full w-full rounded-2xl bg-background/80 backdrop-blur-xl overflow-hidden pt-8 relative">
                        {src ? (
                            <Image
                                src={src}
                                alt={alt}
                                fill
                                sizes="(max-width: 768px) 80vw, (max-width: 1024px) 40vw, 384px"
                                className="object-contain object-bottom transition-transform duration-500 hover:scale-105"
                                priority
                            />
                        ) : (
                            // Placeholder with Initials
                            <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20">
                                <div className="text-center">
                                    <div className="text-6xl lg:text-7xl font-bold gradient-text mb-4">
                                        {initials}
                                    </div>
                                    <User className="h-12 w-12 text-muted-foreground mx-auto opacity-50" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Decorative Glow Elements */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-2xl -z-10 opacity-60" />

                {/* Floating Animation Dots */}
                <motion.div
                    className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full glow-cyan"
                    animate={{
                        y: [0, -8, 0],
                    }}
                    transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute -bottom-2 -left-2 w-3 h-3 bg-accent rounded-full glow-violet"
                    animate={{
                        y: [0, 8, 0],
                    }}
                    transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>
        </motion.div>
    );
}
