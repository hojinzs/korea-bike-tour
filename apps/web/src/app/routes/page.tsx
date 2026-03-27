import Link from "next/link";
import { fourRiversRoutes, type Difficulty } from "@/data/four-rivers";

const difficultyPill: Record<Difficulty, { bg: string; text: string }> = {
  Easy: { bg: "#c9ead9", text: "#163328" },
  Moderate: { bg: "#ffdcc0", text: "#6b3b00" },
  Hard: { bg: "#ffdad6", text: "#93000a" },
};

export default function RoutesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Page header */}
      <section className="bg-surface-low py-20 pl-8 md:pl-20">
        <div className="max-w-2xl">
          <p
            className="mb-3 font-display text-xs font-semibold uppercase text-on-surface-variant"
            style={{ letterSpacing: "0.05em" }}
          >
            Korea's Premier Cycling Network
          </p>
          <h1
            className="mb-6 font-display text-5xl font-bold uppercase text-primary"
            style={{ letterSpacing: "-0.04em" }}
          >
            4 Rivers Routes
          </h1>
          <p className="font-body text-lg leading-relaxed text-on-surface-variant">
            1,757km of dedicated cycling paths along Korea's four major rivers —
            from urban Seoul to coastal Busan, bamboo forests to historic river
            towns.
          </p>
        </div>
      </section>

      {/* Route listing */}
      <section className="mx-auto max-w-7xl px-8 py-16 md:px-20">
        <div className="grid gap-6 sm:grid-cols-2">
          {fourRiversRoutes.map((route, index) => {
            const pill = difficultyPill[route.difficulty];
            return (
              <Link
                key={route.id}
                href={`/routes/${route.id}`}
                className="group block"
              >
                <article
                  className="flex h-full flex-col rounded-[0.5rem] bg-surface-lowest transition-shadow hover:shadow-[0_20px_60px_rgba(28,28,24,0.1)]"
                  style={{ boxShadow: "0 12px 40px rgba(28,28,24,0.06)" }}
                >
                  {/* Top band */}
                  <div
                    className="flex items-center justify-between rounded-t-[0.5rem] px-6 py-4"
                    style={{ background: "#163328" }}
                  >
                    <span
                      className="font-display text-xs font-semibold uppercase text-white/40"
                      style={{ letterSpacing: "0.05em" }}
                    >
                      Route {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="rounded-[0.25rem] px-2 py-0.5 font-display text-xs font-semibold uppercase"
                      style={{
                        letterSpacing: "0.05em",
                        background: pill.bg,
                        color: pill.text,
                      }}
                    >
                      {route.difficulty}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-4">
                      <h2
                        className="font-display text-2xl font-bold text-on-surface"
                        style={{ letterSpacing: "-0.02em" }}
                      >
                        {route.name}
                      </h2>
                      <p className="font-body mt-0.5 text-sm text-on-surface-variant">
                        {route.nameKo} 자전거길
                      </p>
                    </div>

                    {/* Technical labels */}
                    <div className="mb-5 flex flex-wrap gap-x-6 gap-y-2">
                      {[
                        { key: "DISTANCE", val: `${route.distance} KM` },
                        {
                          key: "DURATION",
                          val: `${route.duration.min}–${route.duration.max} DAYS`,
                        },
                        { key: "FROM", val: route.startPoint },
                        { key: "TO", val: route.endPoint },
                      ].map(({ key, val }) => (
                        <div key={key} className="flex flex-col gap-0.5">
                          <span
                            className="font-display text-[10px] font-semibold uppercase text-on-surface-variant/60"
                            style={{ letterSpacing: "0.05em" }}
                          >
                            {key}
                          </span>
                          <span
                            className="font-display text-xs font-semibold uppercase text-on-surface"
                            style={{ letterSpacing: "0.05em" }}
                          >
                            {val}
                          </span>
                        </div>
                      ))}
                    </div>

                    <p className="font-body flex-1 text-sm leading-relaxed text-on-surface-variant line-clamp-2">
                      {route.description}
                    </p>

                    {/* Highlights */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {route.highlights.slice(0, 2).map((h) => (
                        <span
                          key={h}
                          className="rounded-[0.25rem] bg-surface-highest px-2.5 py-1 font-body text-xs text-on-surface-variant"
                        >
                          {h}
                        </span>
                      ))}
                    </div>

                    <p
                      className="mt-5 font-display text-xs font-semibold uppercase text-primary transition-opacity group-hover:opacity-60"
                      style={{ letterSpacing: "0.05em" }}
                    >
                      View route details →
                    </p>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
