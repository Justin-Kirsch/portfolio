import type { Metadata } from 'next';
import { inter } from '@/lib/fonts';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Navigation } from '@/components/layout/navigation';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { BackToTop } from '@/components/ui/back-to-top';
import './globals.css';

export const metadata: Metadata = {
  title: 'Justin Kirsch | Fachinformatiker für Anwendungsentwicklung',
  description:
    'Portfolio von Justin Kirsch - Angehender Fachinformatiker für Anwendungsentwicklung. Spezialisiert auf moderne Webentwicklung mit React, Next.js und TypeScript.',
  keywords: [
    'Justin Kirsch',
    'Portfolio',
    'Fachinformatiker',
    'Anwendungsentwicklung',
    'Web Development',
    'React',
    'Next.js',
    'TypeScript',
    'Frontend Developer',
    'Praktikum',
  ],
  authors: [{ name: 'Justin Kirsch' }],
  creator: 'Justin Kirsch',
  openGraph: {
    title: 'Justin Kirsch | Fachinformatiker für Anwendungsentwicklung',
    description:
      'Portfolio von Justin Kirsch - Spezialisiert auf moderne Webentwicklung mit React, Next.js und TypeScript.',
    type: 'website',
    locale: 'de_DE',
    url: 'https://kirsch-justin.de',
    siteName: 'Justin Kirsch Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Justin Kirsch | Fachinformatiker',
    description:
      'Portfolio von Justin Kirsch - Moderne Webentwicklung mit React, Next.js und TypeScript.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Justin Kirsch",
              "jobTitle": "Fachinformatiker für Anwendungsentwicklung",
              "url": "https://kirsch-justin.de",
              "email": "kontakt@kirsch-justin.de",
              "sameAs": [
                "https://github.com/Justin-Kirsch",
                "https://www.linkedin.com/in/kirsch-justin/"
              ],
              "knowsAbout": ["React", "Next.js", "TypeScript", "JavaScript", "Web Development"],
              "alumniOf": "Front-End Developer Weiterbildung",
              "description": "Angehender Fachinformatiker für Anwendungsentwicklung mit Fokus auf moderne Webentwicklung"
            })
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <Navigation />
          <main className="pt-16">{children}</main>
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
