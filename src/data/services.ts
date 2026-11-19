import type { L } from "@/i18n/config";

export type Service = {
  slug: string;
  icon: "route" | "plane" | "map-pin";
  title: L;
  short: L;
  description: L;
  points: Record<"en" | "hi", string[]>;
};

/** Only services that appear on the original website. */
export const services: Service[] = [
  {
    slug: "outstation",
    icon: "route",
    title: { en: "Outstation Trips", hi: "Outstation Trips" },
    short: {
      en: "One-way or round trips beyond the city, on your route and your timing.",
      hi: "City se bahar one-way ya round trip, aapke route aur timing ke hisaab se.",
    },
    description: {
      en: "Heading to another town, a hill station or a family function? Book a one-way drop or a round trip. Tell us the route and dates and we will plan the ride around you.",
      hi: "Kisi dusre shehar, hill station ya family function mein jaana hai? One-way drop ya round trip book karein. Route aur dates batayein, hum aapke hisaab se plan karenge.",
    },
    points: {
      en: ["One-way and round trip options", "Choose your own pickup and drop", "Rate and vehicle confirmed before the trip", "Careful driving on hill roads"],
      hi: ["One-way aur round trip dono", "Pickup aur drop aap chunein", "Trip se pehle rate aur gaadi confirm", "Pahadi sadkon par dhyan se driving"],
    },
  },
  {
    slug: "airport",
    icon: "plane",
    title: { en: "Airport Pickup & Drop", hi: "Airport Pickup aur Drop" },
    short: {
      en: "Pickup or drop timed to your flight. Share your flight details when you book.",
      hi: "Flight ke time ke hisaab se pickup ya drop. Booking mein flight details share karein.",
    },
    description: {
      en: "Arriving or departing by air? We schedule your pickup or drop around your flight so you are not left waiting or rushing. Share your flight number and timing while booking.",
      hi: "Flight se aa rahe hain ya ja rahe hain? Hum aapki flight ke time ke hisaab se pickup ya drop schedule karte hain taaki na intezaar karna pade, na bhaagna. Booking ke waqt flight number aur timing batayein.",
    },
    points: {
      en: ["Airport pickup and airport drop", "Scheduled around your flight time", "Share flight details when booking", "Confirmation on phone"],
      hi: ["Airport pickup aur airport drop", "Flight ke time ke hisaab se schedule", "Booking mein flight details dein", "Phone par confirmation"],
    },
  },
  {
    slug: "local",
    icon: "map-pin",
    title: { en: "Local Travel", hi: "Local Travel" },
    short: {
      en: "Convenient rides within town for family visits, errands or a full day out.",
      hi: "Shehar ke andar family visits, kaam ya din bhar ke safar ke liye convenient rides.",
    },
    description: {
      en: "For visits, errands, appointments or a day of sightseeing nearby, book a local ride. A compact car works for small groups; choose a bigger vehicle when you travel with family.",
      hi: "Rishtedaron se milne, kaam, appointment ya aas-paas ghoomne ke liye local ride book karein. Chhote group ke liye compact car theek rehti hai; parivaar ke saath badi gaadi chunein.",
    },
    points: {
      en: ["Short trips and full-day use", "Compact cars to family vehicles", "Pickup from your doorstep", "Confirmation on phone"],
      hi: ["Chhote trips aur poore din ke liye", "Compact car se family vehicle tak", "Aapke darwaze se pickup", "Phone par confirmation"],
    },
  },
];
