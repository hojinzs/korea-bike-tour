import { notFound } from "next/navigation";
import Link from "next/link";
import { fourRiversRoutes, getRouteById, type Difficulty } from "@/data/four-rivers";

export function generateStaticParams() {
  return fourRiversRoutes.map((route) => ({ id: route.id }));
}

const difficultyPill: Record<Difficulty, { bg: string; text: string }> = {
  Easy: { bg: "#c9ead9", text: "#163328" },
  Moderate: { bg: "#ffdcc0", text: "#6b3b00" },
  Hard: { bg: "#ffdad6", text: "#93000a" },
};

const tips = [
  {
    label: "Bike Rental",
    body: "Public rental stations (공공자전거) are available near most starting points. Apps: Kakao T (Seoul), Tashu (Daejeon). Bring your passport for registration.",
  },
  {
    label: "Convenience Stores",
    body: "GS25, CU, and 7-Eleven stores are located every 10–20km along most routes. Great for snacks, drinks, and basic bike tools.",
  },
  {
    label: "Passport Stamps",
    body: "Certification centers (인증센터) are placed at key points along each route. Collect stamps in your passport book to prove you completed the route.",
  },
  {
    label: "Language Tips",
    body: "English is limited outside cities. Learn a few Korean phrases: 화장실 (bathroom), 편의점 (convenience store), 자전거 수리 (bike repair). Google Translate camera mode is very helpful.",
  },
  {
    label: "Accommodation",
    body: "Guesthouses (게스트하우스) and motels are common near the route. Book via Booking.com or Agoda for English support. Camping is allowed at designated spots.",
  },
];

export default function RouteDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const route = getRouteById(params.id);
  if (!route) notFound();

  const pill = difficultyPill[route.difficulty];

  return (
    <main className="min-h-screen bg-background">
      {/* Page header band */}
      <section
        className="py-16 pl-8 md:pl-20"
        style={{ background: "#163328" }}
      >
        <div className="max-w-3xl">
          <Link
            href="/routes"
            className="mb-8 inline-block font-display text-xs font-semibold uppercase text-white/40 transition-colors hover:text-white/70"
            style={{ letterSpacing: "0.05em" }}
          >
            ← All Routes
          </Link>

          <div className="flex flex-wrap items-start gap-4">
            <div className="flex-1">
              <p
                className="mb-2 font-display text-xs font-semibold uppercase text-white/40"
                style={{ letterSpacing: "0.05em" }}
              >
                {route.nameKo} 자전거길
              </p>
              <h1
                className="font-display text-5xl font-bold uppercase text-white"
                style={{ letterSpacing: "-0.04em" }}
              >
                {route.name}
                <br />
                Route
              </h1>
            </div>

            {/* Difficulty pill */}
            <span
              className="mt-2 shrink-0 rounded-[0.25rem] px-3 py-1.5 font-display text-xs font-semibold uppercase"
              style={{
                letterSpacing: "0.05em",
                background: pill.bg,
                color: pill.text,
              }}
            >
              {route.difficulty}
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-8 py-16 md:px-20">
        {/* Key stats row */}
        <div className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { key: "DISTANCE", val: `${route.distance} KM` },
            {
              key: "DURATION",
              val: `${route.duration.min}–${route.duration.max} DAYS`,
            },
            { key: "START", val: route.startPoint },
            { key: "FINISH", val: route.endPoint },
          ].map(({ key, val }) => (
            <div
              key={key}
              className="rounded-[0.5rem] bg-surface-lowest p-5"
              style={{ boxShadow: "0 12px 40px rgba(28,28,24,0.06)" }}
            >
              <p
                className="mb-1.5 font-display text-[10px] font-semibold uppercase text-on-surface-variant/60"
                style={{ letterSpacing: "0.05em" }}
              >
                {key}
              </p>
              <p
                className="font-display text-sm font-semibold uppercase text-on-surface"
                style={{ letterSpacing: "0.03em" }}
              >
                {val}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          {/* Left column */}
          <div className="space-y-10">
            {/* About */}
            <section>
              <p
                className="mb-3 font-display text-xs font-semibold uppercase text-on-surface-variant"
                style={{ letterSpacing: "0.05em" }}
              >
                About This Route
              </p>
              <h2
                className="mb-5 font-display text-2xl font-bold text-primary"
                style={{ letterSpacing: "-0.02em" }}
              >
                Overview
              </h2>
              <p className="font-body text-base leading-relaxed text-on-surface-variant">
                {route.description}
              </p>
              <div className="mt-5 flex items-center gap-2">
                <span
                  className="font-display text-xs font-semibold uppercase text-on-surface-variant/60"
                  style={{ letterSpacing: "0.05em" }}
                >
                  Best Season:
                </span>
                <span
                  className="font-display text-xs font-semibold uppercase text-primary"
                  style={{ letterSpacing: "0.05em" }}
                >
                  {route.bestSeason}
                </span>
              </div>
            </section>

            {/* Highlights */}
            <section>
              <p
                className="mb-3 font-display text-xs font-semibold uppercase text-on-surface-variant"
                style={{ letterSpacing: "0.05em" }}
              >
                What to Expect
              </p>
              <h2
                className="mb-5 font-display text-2xl font-bold text-primary"
                style={{ letterSpacing: "-0.02em" }}
              >
                Highlights
              </h2>
              <ul className="space-y-3">
                {route.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    />
                    <span className="font-body text-base text-on-surface-variant">
                      {h}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right column — Tips */}
          <aside>
            <p
              className="mb-3 font-display text-xs font-semibold uppercase text-on-surface-variant"
              style={{ letterSpacing: "0.05em" }}
            >
              Practical Info
            </p>
            <h2
              className="mb-5 font-display text-2xl font-bold text-primary"
              style={{ letterSpacing: "-0.02em" }}
            >
              Tips for Foreign Cyclists
            </h2>
            <div className="space-y-4">
              {tips.map((tip) => (
                <div
                  key={tip.label}
                  className="rounded-[0.5rem] bg-surface-lowest p-5"
                  style={{ boxShadow: "0 12px 40px rgba(28,28,24,0.06)" }}
                >
                  <h3
                    className="mb-2 font-display text-xs font-semibold uppercase text-primary"
                    style={{ letterSpacing: "0.05em" }}
                  >
                    {tip.label}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-on-surface-variant">
                    {tip.body}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
