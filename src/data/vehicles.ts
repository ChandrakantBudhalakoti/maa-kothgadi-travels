import type { L } from "@/i18n/config";

export type Vehicle = {
  slug: string;
  name: string;
  image: string;
  /** CSS object-position so the car stays in frame in the cropped card. */
  position: string;
  alt: L;
  description: L;
  useCases: Record<"en" | "hi", string[]>;
};

/**
 * Seating capacity is intentionally NOT listed: it has not been verified with the owner.
 * Descriptions only claim what is visible in the photographs and the general vehicle category.
 */
export const vehicles: Vehicle[] = [
  {
    slug: "toyota-innova",
    name: "Toyota Innova",
    image: "/images/innova.jpg",
    position: "50% 60%",
    alt: {
      en: "White Toyota Innova with a roof carrier parked on a forest road",
      hi: "Jungle ki sadak par khadi safed Toyota Innova, upar carrier ke saath",
    },
    description: {
      en: "A spacious multi-utility vehicle for family and group journeys, with a roof carrier for extra luggage.",
      hi: "Parivaar aur group ke safar ke liye spacious gaadi, zyada saaman ke liye upar carrier ke saath.",
    },
    useCases: {
      en: ["Family trips", "Group travel", "Long outstation journeys"],
      hi: ["Family trips", "Group travel", "Lambe outstation safar"],
    },
  },
  {
    slug: "toyota-innova-chrome",
    name: "Toyota Innova",
    image: "/images/innova-2.jpg",
    position: "50% 55%",
    alt: {
      en: "White Toyota Innova with a chrome grille at dusk in the hills",
      hi: "Pahadon mein shaam ke waqt chrome grille wali safed Toyota Innova",
    },
    description: {
      en: "A second Innova in our fleet, suited to longer journeys where space and comfort matter.",
      hi: "Hamari fleet ki ek aur Innova, un lambe safar ke liye jahan jagah aur aaram zaroori hain.",
    },
    useCases: {
      en: ["Long journeys", "Family trips", "Extra luggage"],
      hi: ["Lambe safar", "Family trips", "Zyada saaman"],
    },
  },
  {
    slug: "mahindra-bolero",
    name: "Mahindra Bolero",
    image: "/images/bolero.jpg",
    position: "50% 55%",
    alt: {
      en: "White Mahindra Bolero SUV with a roof rack beside a hill road at sunset",
      hi: "Sunset ke waqt pahadi sadak ke kinare roof rack wali safed Mahindra Bolero SUV",
    },
    description: {
      en: "A sturdy SUV with a roof rack, a practical choice for hill roads and groups carrying more luggage.",
      hi: "Roof rack wali mazboot SUV, pahadi sadkon aur zyada saaman wale group ke liye vyavharik vikalp.",
    },
    useCases: {
      en: ["Hill roads", "Groups with luggage", "Rough routes"],
      hi: ["Pahadi sadkein", "Saaman wale group", "Kachche-pakke raaste"],
    },
  },
  {
    slug: "hyundai-aura",
    name: "Hyundai Aura",
    image: "/images/aura.jpg",
    position: "50% 70%",
    alt: {
      en: "White Hyundai Aura sedan seen from behind on a green hill road",
      hi: "Hari-bhari pahadi sadak par peeche se dikhti safed Hyundai Aura sedan",
    },
    description: {
      en: "A comfortable sedan for couples and small families who want a smooth ride with boot space for luggage.",
      hi: "Couples aur chhote parivaar ke liye aaramdayak sedan, jisme saaman ke liye boot space bhi hai.",
    },
    useCases: {
      en: ["Couples", "Small families", "Airport transfers"],
      hi: ["Couples", "Chhota parivaar", "Airport transfer"],
    },
  },
  {
    slug: "hyundai",
    name: "Hyundai",
    image: "/images/hero.jpg",
    position: "50% 62%",
    alt: {
      en: "White Hyundai car in front of pine trees and a turquoise railing",
      hi: "Cheed ke ped aur firozi railing ke saamne khadi safed Hyundai gaadi",
    },
    description: {
      en: "A clean, easy-to-drive car for everyday trips and short hill journeys.",
      hi: "Rozmarra ke trips aur chhote pahadi safar ke liye saaf-suthri, aasaan gaadi.",
    },
    useCases: {
      en: ["Local rides", "Small groups", "Short trips"],
      hi: ["Local rides", "Chhote group", "Chhote trips"],
    },
  },
  {
    slug: "maruti-wagonr",
    name: "Maruti Suzuki WagonR",
    image: "/images/wagonr.jpg",
    position: "50% 28%",
    alt: {
      en: "White Maruti Suzuki WagonR parked beside a green hillside",
      hi: "Hari pahadi ke paas khadi safed Maruti Suzuki WagonR",
    },
    description: {
      en: "A compact car that is easy to handle on narrow roads, good for short rides within town.",
      hi: "Sankri sadkon par chalane mein aasaan compact car, shehar ke andar chhote safar ke liye theek.",
    },
    useCases: {
      en: ["Local rides", "Solo or small groups", "Narrow roads"],
      hi: ["Local rides", "Akele ya chhote group", "Sankri sadkein"],
    },
  },
];

export const fleetPhoto = {
  src: "/images/gadiyan.jpg",
  position: "50% 38%",
  alt: {
    en: "A white WagonR and a Toyota Innova with luggage on the roof parked side by side at a roadside stop",
    hi: "Sadak ke kinare ek saath khadi safed WagonR aur Toyota Innova, Innova ki chhat par saaman",
  } as L,
};
