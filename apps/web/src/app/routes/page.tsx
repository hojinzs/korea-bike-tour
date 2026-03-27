import Link from "next/link";
import { Card, CardContent } from "@korea-bike-tour/ui";
import { fourRiversRoutes, type Difficulty } from "@/data/four-rivers";

const difficultyStyles: Record<Difficulty, string> = {
  Easy: "bg-green-100 text-green-700",
  Moderate: "bg-yellow-100 text-yellow-700",
  Hard: "bg-red-100 text-red-700",
};

export default function RoutesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-green-600">
            Korea&apos;s Premier Cycling Network
          </p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
            4 Rivers Cycling Routes
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            1,757km of dedicated cycling paths along Korea&apos;s four major
            rivers — from urban Seoul to coastal Busan, bamboo forests to
            historic river towns.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {fourRiversRoutes.map((route) => (
            <Link key={route.id} href={`/routes/${route.id}`} className="group block">
              <Card className="h-full transition-shadow group-hover:shadow-md">
                <CardContent>
                  <div className="mb-3 flex items-start justify-between gap-2">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">
                        {route.name}
                      </h2>
                      <p className="text-sm text-gray-500">{route.nameKo}</p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${difficultyStyles[route.difficulty]}`}
                    >
                      {route.difficulty}
                    </span>
                  </div>

                  <div className="mb-4 flex gap-4 text-sm text-gray-600">
                    <span>
                      <span className="font-medium text-gray-900">
                        {route.distance}km
                      </span>{" "}
                      total
                    </span>
                    <span>
                      <span className="font-medium text-gray-900">
                        {route.duration.min}–{route.duration.max} days
                      </span>
                    </span>
                  </div>

                  <p className="mb-4 line-clamp-2 text-sm text-gray-600">
                    {route.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {route.highlights.slice(0, 2).map((h) => (
                      <span
                        key={h}
                        className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
