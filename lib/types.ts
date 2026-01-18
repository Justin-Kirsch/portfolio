export interface Skill {
    name: string;
    category: 'languages' | 'web' | 'backend' | 'tools';
    icon?: string;
}

export interface Project {
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    image?: string;
    status?: 'live' | 'development' | 'archived';
    featured?: boolean;
}

export interface ContactLink {
    label: string;
    url: string;
    icon: string;
}
