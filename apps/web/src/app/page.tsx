import { useTranslations } from "next-intl";
import { Button } from "@korea-bike-tour/ui";
import { Card, CardContent } from "@korea-bike-tour/ui";

const features = [
  {
    icon: "🗺️",
    titleKey: "features.routes.title" as const,
    descKey: "features.routes.desc" as const,
  },
  {
    icon: "🏕️",
    titleKey: "features.camping.title" as const,
    descKey: "features.camping.desc" as const,
  },
  {
    icon: "🌏",
    titleKey: "features.multilingual.title" as const,
    descKey: "features.multilingual.desc" as const,
  },
] as const;

export default function HomePage() {
  const t = useTranslations("home");

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-green-600">
          {t("eyebrow")}
        </p>
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900">
          Korea Bike Tour Guide
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-xl text-gray-600">
          {t("description")}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="primary">{t("cta.explore")}</Button>
          <Button variant="outline">{t("cta.learnMore")}</Button>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="grid gap-6 sm:grid-cols-3">
          {features.map(({ icon, titleKey, descKey }) => (
            <Card key={titleKey}>
              <CardContent>
                <div className="mb-3 text-3xl">{icon}</div>
                <h3 className="mb-2 font-semibold text-gray-900">
                  {t(titleKey)}
                </h3>
                <p className="text-sm text-gray-600">{t(descKey)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
