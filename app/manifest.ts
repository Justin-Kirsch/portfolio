import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Justin Kirsch Portfolio',
        short_name: 'JK Portfolio',
        description: 'Portfolio von Justin Kirsch - Fachinformatiker für Anwendungsentwicklung',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#06b6d4',
        icons: [
            {
                src: '/icon.png',
                sizes: 'any',
                type: 'image/png',
            },
            {
                src: '/apple-icon.png',
                sizes: 'any',
                type: 'image/png',
            },
        ],
    };
}
