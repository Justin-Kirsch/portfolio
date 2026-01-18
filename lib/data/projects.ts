import type { Project } from '../types';

export const projects: Project[] = [
    {
        title: 'Portfolio Website',
        description: 'Moderne, responsive Portfolio-Website mit Next.js und Tailwind CSS. Features: Dark Mode, Animationen, SEO-Optimierung.',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        githubUrl: 'https://github.com/Justin-Kirsch/portfolio',
        liveUrl: 'https://kirsch-justin.de',
        image: '/images/projects/portfolio.webp',
        status: 'live',
        featured: true,
    },
    {
        title: 'KirschLMS',
        description: 'Eine Lernplattform, die es den Nutzern ermöglicht, ihre eigenen Lernmaterialien zu erstellen und zu teilen.',
        technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'BetterAuth', 'Stripe'],
        githubUrl: 'https://github.com/Justin-Kirsch/kirsch-lms',
        image: '/images/projects/kirschlms.webp',
        status: 'development',
    },
    {
        title: 'El Pollo Loco',
        description: 'El Pollo Loco ist ein kleines 2D-Browsergame, das von klassischen Side-Scrolling-Plattformspielen inspiriert ist.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        githubUrl: 'https://github.com/Justin-Kirsch/El-Pollo-Loco',
        liveUrl: 'https://epl.kirsch-justin.de/',
        image: '/images/projects/el_pollo_loco.webp',
        status: 'live',
    },
    {
        title: 'Password Manager',
        description: 'Eine JavaFX-Anwendung, die einen sicheren Passwortgenerator mit einem verschlüsselten Passwort-Manager kombiniert.',
        technologies: ['Java', 'JavaFX'],
        githubUrl: 'https://github.com/Justin-Kirsch/secure-password-vault',
        image: '/images/projects/secure_password_generator.webp',
        status: 'live',
    },
];
