export type Difficulty = "Easy" | "Moderate" | "Hard";

export interface Route {
  id: string;
  name: string;
  nameKo: string;
  distance: number;
  difficulty: Difficulty;
  duration: { min: number; max: number };
  description: string;
  highlights: string[];
  startPoint: string;
  endPoint: string;
  bestSeason: string;
}

export const fourRiversRoutes: Route[] = [
  {
    id: "han-river",
    name: "Han River",
    nameKo: "한강",
    distance: 160,
    difficulty: "Easy",
    duration: { min: 2, max: 3 },
    description:
      "The Han River route runs through the heart of Seoul and out to the coast, offering two main branches: Seoul to Incheon (70km) and Seoul to Yangpyeong (90km). The fully paved, flat paths are perfect for beginners and families. Enjoy stunning city skylines, riverside parks, and easy access to convenience stores along the way.",
    highlights: [
      "Seoul city skyline views",
      "Fully paved flat path",
      "Banpo Bridge Rainbow Fountain",
      "Ara Waterway to Incheon",
      "Yangpyeong riverside scenery",
    ],
    startPoint: "Seoul (Ttukseom or Yeouido)",
    endPoint: "Incheon or Yangpyeong",
    bestSeason: "Spring (April–May) and Autumn (September–October)",
  },
  {
    id: "nakdong-river",
    name: "Nakdong River",
    nameKo: "낙동강",
    distance: 389,
    difficulty: "Moderate",
    duration: { min: 5, max: 7 },
    description:
      "Korea's longest single cycling route stretches from Andong in the north all the way to Busan on the southern coast. The path winds through remote rural countryside, traditional villages, and sweeping river plains. While mostly flat, the sheer distance makes this an adventure best suited for experienced cyclists.",
    highlights: [
      "Longest route in the 4 Rivers network",
      "Andong traditional folk village",
      "Nakdong estuary wetlands",
      "Rural Korean countryside",
      "Busan coastal finish",
    ],
    startPoint: "Andong",
    endPoint: "Busan (Nakdong Estuary)",
    bestSeason: "Spring (April–May) and Autumn (September–October)",
  },
  {
    id: "geum-river",
    name: "Geum River",
    nameKo: "금강",
    distance: 145,
    difficulty: "Moderate",
    duration: { min: 2, max: 3 },
    description:
      "The Geum River route connects the inland city of Daejeon to the Yellow Sea port of Gunsan, passing through some of Korea's most scenic river landscapes. The well-maintained path features gentle hills near Daejeon that give way to a flat coastal stretch. Historic sites and traditional Korean architecture dot the route throughout.",
    highlights: [
      "Gongjusi historic fortress town",
      "Buyeo ancient Baekje capital",
      "Scenic river wetlands",
      "Yellow Sea sunset at Gunsan",
      "Well-maintained rest stops",
    ],
    startPoint: "Daejeon (Geum River Cultural Center)",
    endPoint: "Gunsan",
    bestSeason: "Spring (April–May) and Autumn (September–November)",
  },
  {
    id: "yeongsan-river",
    name: "Yeongsan River",
    nameKo: "영산강",
    distance: 133,
    difficulty: "Easy",
    duration: { min: 2, max: 3 },
    description:
      "Starting in the bamboo forests of Damyang and finishing at the port city of Mokpo, the Yeongsan River route is one of Korea's most scenic and beginner-friendly rides. The terrain is almost entirely flat, making it ideal for casual cyclists. The bamboo groves near Damyang are particularly stunning in early morning light.",
    highlights: [
      "Damyang bamboo forest",
      "Flat beginner-friendly terrain",
      "Gwangju urban greenway",
      "Traditional market towns",
      "Mokpo port city finish",
    ],
    startPoint: "Damyang",
    endPoint: "Mokpo",
    bestSeason: "Spring (April–June) and Autumn (September–October)",
  },
];

export function getRouteById(id: string): Route | undefined {
  return fourRiversRoutes.find((r) => r.id === id);
}
