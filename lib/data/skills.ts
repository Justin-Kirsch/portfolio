import type { Skill } from '../types';

export const skills: Skill[] = [
    // Programming Languages
    { name: 'Java', category: 'languages' },
    { name: 'Python', category: 'languages' },
    { name: 'JavaScript', category: 'languages' },
    { name: 'TypeScript', category: 'languages' },

    // Web Technologies
    { name: 'HTML', category: 'web' },
    { name: 'CSS', category: 'web' },
    { name: 'React', category: 'web' },
    { name: 'Next.js', category: 'web' },
    { name: 'Tailwind CSS', category: 'web' },
    { name: 'Framer Motion', category: 'web' },
    { name: 'Shadcn UI', category: 'web' },

    // Backend & Datenbanken
    { name: 'Node.js', category: 'backend' },
    { name: 'PostgreSQL', category: 'backend' },
    { name: 'Prisma', category: 'backend' },
    { name: 'BetterAuth', category: 'backend' },
    { name: 'MongoDB', category: 'backend' },
    { name: 'Redis', category: 'backend' },
    { name: 'MySQL', category: 'backend' },
    { name: 'MariaDB', category: 'backend' },

    // Tools
    { name: 'Git', category: 'tools' },
    { name: 'VS Code', category: 'tools' },
    { name: 'Linux', category: 'tools' },
    { name: 'Windows', category: 'tools' },
    { name: 'ArcJet', category: 'tools' },
    { name: 'SCRUM', category: 'tools' },

];

export const skillCategories = {
    languages: 'Programmiersprachen',
    web: 'Web-Technologien',
    backend: 'Backend & Datenbanken',
    tools: 'Tools & Plattformen',
};
