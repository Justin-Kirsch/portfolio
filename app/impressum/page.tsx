import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/layout/footer';

export default function ImpressumPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="border-b border-border/40 bg-background/95 backdrop-blur">
                <div className="mx-auto flex h-16 max-w-4xl items-center px-4 sm:px-6">
                    <Link href="/">
                        <Button variant="ghost" size="sm" className="gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            Zurück zur Startseite
                        </Button>
                    </Link>
                </div>
            </header>

            {/* Content */}
            <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
                <h1 className="mb-8 text-4xl font-bold text-foreground">Impressum</h1>

                <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
                    {/* Angaben gemäß § 5 TMG */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground">Angaben gemäß § 5 TMG</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Verantwortlich für den Inhalt dieser Webseite
                        </p>
                        <div className="mt-4 rounded-lg border border-border/40 bg-muted/30 p-4">
                            <p className="text-foreground">
                                <strong>Justin Michael Kirsch</strong><br />
                                Kahrstr. 1<br />
                                45128 Essen
                            </p>
                            <p className="mt-4 text-foreground">
                                <strong>Telefon:</strong> <a href="tel:+4917645347885" className="text-primary hover:underline">+49 (0) 1764 5347885</a><br />
                                <strong>E-Mail:</strong> <a href="mailto:kontakt@kirsch-justin.de" className="text-primary hover:underline">kontakt@kirsch-justin.de</a>
                            </p>
                        </div>
                    </section>

                    {/* Art der Webseite */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground">Art der Webseite</h2>
                        <p className="mt-4 text-muted-foreground">
                            Diese Seite dient ausschließlich als persönliches Portfolio zur Darstellung von Projekten und beruflichem Werdegang.
                            Es handelt sich nicht um ein gewerbliches Angebot im Sinne einer Verkaufs- oder Handelsplattform.
                        </p>
                    </section>

                    {/* Haftung für Inhalte */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground">Haftung für Inhalte</h2>
                        <p className="mt-4 text-muted-foreground">
                            Die Inhalte dieser Webseite wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität
                            der Inhalte übernehme ich jedoch keine Gewähr. Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte
                            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Eine Verpflichtung zur Überwachung übermittelter oder
                            gespeicherter fremder Informationen besteht jedoch nicht (§§ 8–10 TMG).
                        </p>
                    </section>

                    {/* Haftung für Links */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground">Haftung für Links</h2>
                        <p className="mt-4 text-muted-foreground">
                            Diese Webseite enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann
                            ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der
                            jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Zum Zeitpunkt der Verlinkung wurden die Seiten auf
                            mögliche Rechtsverstöße überprüft; rechtswidrige Inhalte waren zu diesem Zeitpunkt nicht erkennbar.
                        </p>
                    </section>

                    {/* Urheberrecht */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground">Urheberrecht</h2>
                        <p className="mt-4 text-muted-foreground">
                            Die auf dieser Webseite erstellten Inhalte und Werke (insbesondere Texte, Layout, Code und Bilder, soweit nicht
                            anders gekennzeichnet) unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung oder jede
                            Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen meiner schriftlichen Zustimmung. Downloads und
                            Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                        </p>
                    </section>

                    {/* Kontakt */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground">Kontakt</h2>
                        <p className="mt-4 text-muted-foreground">
                            Für Anfragen rund um diese Webseite oder meine Projekte nutzen Sie bitte die im Kontaktbereich des Portfolios
                            angegebene E-Mail-Adresse: <a href="mailto:kontakt@kirsch-justin.de" className="text-primary hover:underline">kontakt@kirsch-justin.de</a>.
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
