import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/layout/footer';

export default function DatenschutzPage() {
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
                <h1 className="mb-8 text-4xl font-bold text-foreground">Datenschutzerklärung</h1>

                <p className="mb-8 text-lg text-muted-foreground">
                    Informationen zum Umgang mit personenbezogenen Daten
                </p>

                <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
                    {/* 1. Verantwortlicher */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground">1. Verantwortlicher</h2>
                        <p className="mt-4 text-muted-foreground">
                            Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Webseite ist:
                        </p>
                        <div className="mt-4 rounded-lg border border-border/40 bg-muted/30 p-4">
                            <p className="text-foreground">
                                <strong>Justin Michael Kirsch</strong><br />
                                Kahrstr. 1<br />
                                45128 Essen<br />
                                E-Mail: <a href="mailto:kontakt@kirsch-justin.de" className="text-primary hover:underline">kontakt@kirsch-justin.de</a>
                            </p>
                        </div>
                    </section>

                    {/* 2. Art und Zweck der Verarbeitung */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground">2. Art und Zweck der Verarbeitung</h2>
                        <p className="mt-4 text-muted-foreground">
                            Diese Webseite dient als persönliches Portfolio zur Darstellung von Projekten, Fähigkeiten und beruflichem Werdegang.
                            Grundsätzlich kann die Seite ohne Angabe personenbezogener Daten besucht werden.
                        </p>
                        <p className="mt-4 text-muted-foreground">
                            Personenbezogene Daten (z. B. Name, E-Mail-Adresse) werden nur dann verarbeitet, wenn Sie freiwillig Kontakt mit mir aufnehmen,
                            z. B. per E-Mail. Diese Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.
                        </p>
                    </section>

                    {/* 3. Server-Logs / Zugriffsdaten */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground">3. Server-Logs / Zugriffsdaten</h2>
                        <p className="mt-4 text-muted-foreground">
                            Beim Aufruf dieser Webseite werden durch den von Ihnen verwendeten Browser automatisch Informationen an den Server übermittelt
                            (z. B. IP-Adresse, Datum und Uhrzeit des Abrufs, verwendeter Browser, Betriebssystem). Die konkrete Verarbeitung hängt vom
                            jeweiligen Hosting-Anbieter ab (z. B. GitHub Pages, Netlify oder ein anderer Hoster).
                        </p>
                        <p className="mt-4 text-muted-foreground">
                            Diese Daten dienen in der Regel der Sicherstellung eines störungsfreien Betriebs der Seite (z. B. zur Fehlersuche, Systemsicherheit).
                            Eine Zusammenführung dieser Daten mit anderen Datenquellen erfolgt durch mich nicht.
                        </p>
                    </section>

                    {/* 4. Verwendung von Cookies / Tracking */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground">4. Verwendung von Cookies / Tracking</h2>
                        <p className="mt-4 text-muted-foreground">
                            Die Portfolio-Seite kommt ohne eigene Tracking- oder Analyse-Tools aus (kein Google Analytics, kein eigenes Tracking).
                            Es werden von mir keine personenbezogenen Nutzungsprofile erstellt.
                        </p>
                        <p className="mt-4 text-muted-foreground">
                            Sofern Ihr Hosting-Anbieter oder Ihr Browser technisch notwendige Cookies setzt, erfolgt dies unabhängig von mir.
                            Informationen hierzu finden Sie ggf. in der Datenschutzerklärung des jeweiligen Anbieters.
                        </p>
                    </section>

                    {/* 5. Externe Links */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground">5. Externe Links</h2>
                        <p className="mt-4 text-muted-foreground">
                            Diese Webseite enthält Links zu externen Angeboten (z. B. GitHub, LinkedIn, ggf. Live-Demos). Beim Anklicken eines solchen Links
                            verlassen Sie diese Seite und es gelten die Datenschutzbestimmungen der jeweiligen Zielseite.
                        </p>
                    </section>

                    {/* 6. Rechtsgrundlagen der Verarbeitung */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground">6. Rechtsgrundlagen der Verarbeitung</h2>
                        <p className="mt-4 text-muted-foreground">
                            Soweit ich personenbezogene Daten verarbeite, erfolgt dies auf Grundlage von <strong>Art. 6 Abs. 1 lit. f DSGVO</strong> (berechtigtes
                            Interesse an einer ansprechenden Darstellung meines Profils und der Bearbeitung von Anfragen) bzw. auf Grundlage Ihrer Einwilligung
                            (<strong>Art. 6 Abs. 1 lit. a DSGVO</strong>), sofern Sie mir diese ausdrücklich erteilen.
                        </p>
                    </section>

                    {/* 7. Speicherdauer */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground">7. Speicherdauer</h2>
                        <p className="mt-4 text-muted-foreground">
                            Personenbezogene Daten, die Sie mir per E-Mail zukommen lassen, speichere ich nur so lange, wie es für die Bearbeitung Ihrer Anfrage
                            oder zur Einhaltung gesetzlicher Aufbewahrungsfristen erforderlich ist.
                        </p>
                    </section>

                    {/* 8. Ihre Rechte */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground">8. Ihre Rechte</h2>
                        <p className="mt-4 text-muted-foreground">
                            Ihnen stehen im Rahmen der geltenden Datenschutzgesetze insbesondere folgende Rechte zu:
                        </p>
                        <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                            <li>Recht auf Auskunft über die zu Ihrer Person gespeicherten Daten (Art. 15 DSGVO)</li>
                            <li>Recht auf Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
                            <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                            <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                            <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                            <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
                        </ul>
                        <p className="mt-4 text-muted-foreground">
                            Zur Ausübung dieser Rechte können Sie sich jederzeit per E-Mail an mich wenden:
                            <a href="mailto:kontakt@kirsch-justin.de" className="ml-1 text-primary hover:underline">kontakt@kirsch-justin.de</a>
                        </p>
                    </section>

                    {/* 9. Aktualität dieser Datenschutzerklärung */}
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground">9. Aktualität dieser Datenschutzerklärung</h2>
                        <p className="mt-4 text-muted-foreground">
                            Ich behalte mir vor, diese Datenschutzerklärung bei Bedarf anzupassen, um sie an geänderte rechtliche Anforderungen oder Änderungen
                            der Webseite anzupassen. Es gilt stets die auf dieser Seite veröffentlichte aktuelle Version.
                        </p>
                    </section>

                    {/* Stand */}
                    <section className="mt-12 border-t border-border/40 pt-6">
                        <p className="text-sm text-muted-foreground">
                            Stand: Januar 2026
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
