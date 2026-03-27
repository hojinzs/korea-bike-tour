import Link from "next/link";
import { fourRiversRoutes, type Difficulty } from "@/data/four-rivers";

const difficultyPill: Record<Difficulty, { bg: string; text: string }> = {
  Easy: { bg: "#c9ead9", text: "#163328" },
  Moderate: { bg: "#ffdcc0", text: "#6b3b00" },
  Hard: { bg: "#ffdad6", text: "#93000a" },
};

const stats = [
  { value: "1,757 KM", label: "OF DEDICATED PATHS" },
  { value: "4", label: "MAJOR RIVERS" },
  { value: "634", label: "PASSPORT STATIONS" },
];

export default function HomePage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section
        className="relative flex min-h-[88vh] flex-col justify-end pb-20 pl-8 pr-8 md:pl-20"
        style={{
          background: "linear-gradient(135deg, #163328 0%, #2d4a3e 60%, #3a5c4f 100%)",
        }}
      >
        {/* Subtle texture layer */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(45,74,62,0.4) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-2xl">
          {/* Eyebrow label */}
          <p
            className="mb-6 font-display text-xs font-semibold uppercase text-white/60"
            style={{ letterSpacing: "0.05em" }}
          >
            Korea · 4 Rivers · 1,757km
          </p>

          {/* Display headline */}
          <h1
            className="mb-6 font-display text-6xl font-bold uppercase leading-none text-white md:text-7xl"
            style={{ letterSpacing: "-0.04em" }}
          >
            Discover
            <br />
            Korea
            <br />
            By Bike
          </h1>

          <p className="mb-10 max-w-md font-body text-lg leading-relaxed text-white/75">
            Four rivers, 1,757 kilometres of dedicated paths, and some of the
            most varied cycling landscapes in Asia. Plan your expedition here.
          </p>

          <Link
            href="/routes"
            className="inline-block rounded-[0.375rem] bg-secondary px-8 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.05em] text-white transition-opacity hover:opacity-90"
          >
            Explore Routes
          </Link>
        </div>

        {/* Bottom fade */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-24"
          style={{
            background: "linear-gradient(to bottom, transparent, rgba(22,51,40,0.4))",
          }}
        />
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-primary">
        <div className="mx-auto flex max-w-7xl flex-col divide-y divide-white/10 md:flex-row md:divide-x md:divide-y-0">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-1 flex-col gap-1 px-8 py-8 md:px-12"
            >
              <span
                className="font-display text-3xl font-bold text-white"
                style={{ letterSpacing: "-0.02em" }}
              >
                {value}
              </span>
              <span
                className="font-display text-xs font-semibold uppercase text-white/50"
                style={{ letterSpacing: "0.05em" }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── The Expeditions ── */}
      <section className="bg-surface-low py-20">
        <div className="mx-auto max-w-7xl px-8 md:px-20">
          {/* Section header */}
          <div className="mb-12">
            <p
              className="mb-3 font-display text-xs font-semibold uppercase text-on-surface-variant"
              style={{ letterSpacing: "0.05em" }}
            >
              The Expeditions
            </p>
            <h2
              className="font-display text-4xl font-bold text-primary"
              style={{ letterSpacing: "-0.02em" }}
            >
              4 Rivers Routes
            </h2>
          </div>

          {/* Route cards grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
                    {/* Card header band */}
                    <div
                      className="flex items-end rounded-t-[0.5rem] px-5 py-4"
                      style={{ background: "#163328" }}
                    >
                      <span
                        className="font-display text-xs font-semibold uppercase text-white/40"
                        style={{ letterSpacing: "0.05em" }}
                      >
                        Route {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Card body */}
                    <div className="flex flex-1 flex-col p-5">
                      <div className="mb-3 flex items-start justify-between gap-2">
                        <div>
                          <h3
                            className="font-display text-lg font-semibold text-on-surface"
                            style={{ letterSpacing: "-0.01em" }}
                          >
                            {route.name}
                          </h3>
                          <p className="font-body text-sm text-on-surface-variant">
                            {route.nameKo}
                          </p>
                        </div>
                        {/* Difficulty pill */}
                        <span
                          className="shrink-0 rounded-[0.25rem] px-2 py-0.5 font-display text-xs font-semibold uppercase"
                          style={{
                            letterSpacing: "0.05em",
                            background: pill.bg,
                            color: pill.text,
                          }}
                        >
                          {route.difficulty}
                        </span>
                      </div>

                      {/* Distance badge */}
                      <div className="mb-4 flex items-center gap-3">
                        <span
                          className="font-display text-xs font-semibold uppercase text-on-surface-variant"
                          style={{ letterSpacing: "0.05em" }}
                        >
                          {route.distance} km
                        </span>
                        <span className="text-outline-variant">·</span>
                        <span
                          className="font-display text-xs font-semibold uppercase text-on-surface-variant"
                          style={{ letterSpacing: "0.05em" }}
                        >
                          {route.duration.min}–{route.duration.max} days
                        </span>
                      </div>

                      <p className="font-body flex-1 text-sm leading-relaxed text-on-surface-variant line-clamp-3">
                        {route.description}
                      </p>

                      <p
                        className="mt-5 font-display text-xs font-semibold uppercase text-primary transition-opacity group-hover:opacity-70"
                        style={{ letterSpacing: "0.05em" }}
                      >
                        View route →
                      </p>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
