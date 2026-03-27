import { notFound } from "next/navigation";
import Link from "next/link";
import { fourRiversRoutes, getRouteById } from "@/data/four-rivers";

export function generateStaticParams() {
  return fourRiversRoutes.map((route) => ({ id: route.id }));
}

const difficultyColor: Record<string, string> = {
  Easy: "bg-green-100 text-green-700",
  Moderate: "bg-yellow-100 text-yellow-700",
  Hard: "bg-red-100 text-red-700",
};

const tips = [
  {
    title: "🚲 Bike Rental",
    body: "Public rental stations (공공자전거) are available near most starting points. Apps: Kakao T (Seoul), Tashu (Daejeon). Bring your passport for registration.",
  },
  {
    title: "🏪 Convenience Stores",
    body: "GS25, CU, and 7-Eleven stores are located every 10–20km along most routes. Great for snacks, drinks, and basic bike tools.",
  },
  {
    title: "🛂 Passport Stamps",
    body: "Certification centers (인증센터) are placed at key points along each route. Collect stamps in your passport book to prove you completed the route.",
  },
  {
    title: "💬 Language Tips",
    body: "English is limited outside cities. Learn a few Korean phrases: 화장실 (bathroom), 편의점 (convenience store), 자전거 수리 (bike repair). Google Translate camera mode is very helpful.",
  },
  {
    title: "🏨 Accommodation",
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

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link
            href="/routes"
            className="text-sm text-slate-500 hover:text-slate-700 mb-4 inline-block"
          >
            ← All Routes
          </Link>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">{route.name} Route</h1>
              <p className="text-slate-500 mt-1">{route.nameKo} 자전거길</p>
            </div>
            <span
              className={`mt-1 px-3 py-1 rounded-full text-sm font-semibold ${difficultyColor[route.difficulty]}`}
            >
              {route.difficulty}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">
        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Distance", value: `${route.distance} km` },
            {
              label: "Duration",
              value: `${route.duration.min}–${route.duration.max} days`,
            },
            { label: "Start", value: route.startPoint },
            { label: "Finish", value: route.endPoint },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl border border-slate-200 p-4"
            >
              <p className="text-xs text-slate-400 uppercase tracking-wide">
                {stat.label}
              </p>
              <p className="mt-1 font-semibold text-slate-800">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Description */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">About This Route</h2>
          <p className="text-slate-600 leading-relaxed">{route.description}</p>
          <p className="mt-4 text-sm text-slate-500">
            🗓 Best season: <span className="font-medium text-slate-700">{route.bestSeason}</span>
          </p>
        </section>

        {/* Highlights */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Highlights</h2>
          <ul className="space-y-2">
            {route.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-slate-600">
                <span className="text-emerald-500 mt-0.5">✓</span>
                {h}
              </li>
            ))}
          </ul>
        </section>

        {/* Tips for Foreigners */}
        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-4">
            Tips for Foreign Cyclists
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {tips.map((tip) => (
              <div
                key={tip.title}
                className="bg-white rounded-2xl border border-slate-200 p-5"
              >
                <h3 className="font-semibold text-slate-800 mb-2">{tip.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{tip.body}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
