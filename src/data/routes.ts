import type { L } from "@/i18n/config";
import type { Section } from "./blog";

export type TaxiRoute = {
  slug: string;
  image: string;
  imagePosition: string;
  imageAlt: L;
  /** Short label for cards and links. */
  label: L;
  /** Page H1. */
  title: L;
  /** <title> text (brand is appended automatically). */
  seoTitle: L;
  description: L;
  intro: L;
  highlights: Record<"en" | "hi", string[]>;
  sections: Section[];
  faqs: { q: L; a: L }[];
  /** WhatsApp message prefilled for the "book this route" button. */
  waMessage: L;
};

/**
 * Locations are the ones confirmed by the owner (Nainital, Haldwani). Kathgodam is the railway
 * station in the Haldwani area. No prices, no fixed timings, no invented distances beyond rough
 * public figures; the pages say that rates are confirmed with the customer.
 */
export const routes: TaxiRoute[] = [
  {
    slug: "taxi-service-in-nainital",
    image: "/images/aura.jpg",
    imagePosition: "50% 60%",
    imageAlt: {
      en: "A white Hyundai Aura taxi on a green hill road near Nainital",
      hi: "Nainital ke paas hari-bhari pahadi sadak par safed Hyundai Aura taxi",
    },
    label: { en: "Taxi service in Nainital", hi: "Nainital mein taxi service" },
    title: { en: "Taxi Service in Nainital", hi: "Nainital mein Taxi Service" },
    seoTitle: { en: "Taxi Service in Nainital: Local & Outstation", hi: "Nainital Taxi Service: Local aur Outstation" },
    description: {
      en: "Book a taxi in Nainital for sightseeing, local rides and outstation trips. Call or WhatsApp Maa Kothgadi Tour & Travels for clean cars and careful drivers.",
      hi: "Nainital mein sightseeing, local ride aur outstation trip ke liye taxi book karein. Saaf gaadiyan aur dhyan se chalane wale driver, call ya WhatsApp par Maa Kothgadi Tour & Travels.",
    },
    intro: {
      en: "Want to go to Nainital, or need a reliable taxi once you are there? Maa Kothgadi Tour & Travels arranges taxis for sightseeing, local rides and trips to and from Nainital. Call or message us and we will confirm a vehicle and rate with you.",
      hi: "Nainital jaana hai, ya wahan pahunchkar bharosemand taxi chahiye? Maa Kothgadi Tour & Travels sightseeing, local ride aur Nainital aane-jaane ke trips ke liye taxi arrange karti hai. Call ya message karein, hum gaadi aur rate aapse confirm karenge.",
    },
    highlights: {
      en: ["Sightseeing and local rides", "Pickup and drop to and from Nainital", "Cars for couples, families and groups", "Rate confirmed before you travel"],
      hi: ["Sightseeing aur local ride", "Nainital aane-jaane ke liye pickup aur drop", "Couples, parivaar aur group ke liye gaadiyan", "Safar se pehle rate confirm"],
    },
    sections: [
      {
        heading: { en: "A taxi for sightseeing around Nainital", hi: "Nainital ghoomne ke liye taxi" },
        paragraphs: [
          {
            en: "Most visitors want to see Naini Lake, the Mall Road area, the Naina Devi Temple and the viewpoints above town. With a taxi you can plan the day at your own pace and stop where you like.",
            hi: "Zyadatar sailani Naini Lake, Mall Road ka ilaka, Naina Devi Mandir aur shehar ke upar ke viewpoints dekhna chahte hain. Taxi ke saath aap din apne hisaab se plan kar sakte hain aur jahan chahein ruk sakte hain.",
          },
          {
            en: "Tell us how many hours you need and which places you have in mind, and we will suggest a plan that fits.",
            hi: "Batayein kitne ghante chahiye aur kaun si jagahein dekhni hain, hum us hisaab se plan suggest karenge.",
          },
        ],
      },
      {
        heading: { en: "Nearby taxi service: tell us where you are", hi: "Nearby taxi service: batayein aap kahan hain" },
        paragraphs: [
          {
            en: "Looking for a taxi nearby? Call or WhatsApp us with your pickup location and time. We will tell you honestly whether we can reach you and when, so you are never left waiting on a promise we cannot keep.",
            hi: "Paas mein taxi dhoondh rahe hain? Apni pickup location aur samay ke saath call ya WhatsApp karein. Hum saaf bata denge ki aap tak pahunch sakte hain ya nahi aur kab, taaki aap kisi adhoore wade par intezaar na karein.",
          },
        ],
      },
      {
        heading: { en: "Plan around busy periods", hi: "Bheed ke samay ke hisaab se plan karein" },
        paragraphs: [
          {
            en: "Nainital gets very busy on weekends, holidays and in the summer season. Roads into town can be slow and parking near the centre is limited, so allow extra time and book your taxi early.",
            hi: "Weekend, chhuttiyon aur garmiyon ke season mein Nainital mein bahut bheed hoti hai. Shehar ki taraf sadkein dheemi ho sakti hain aur centre ke paas parking kam hoti hai, isliye extra samay rakhein aur taxi pehle se book karein.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: { en: "How do I book a taxi in Nainital?", hi: "Nainital mein taxi kaise book karein?" },
        a: {
          en: "Call or WhatsApp us, or use the booking form on this website. Share your pickup point, date, number of passengers and luggage, and we will confirm the vehicle and rate.",
          hi: "Hamein call ya WhatsApp karein, ya website ka booking form bharein. Pickup point, date, kitne log aur kitna saaman batayein, hum gaadi aur rate confirm karenge.",
        },
      },
      {
        q: { en: "What does a taxi in Nainital cost?", hi: "Nainital mein taxi ka kitna kharcha aata hai?" },
        a: {
          en: "The rate depends on the vehicle, the route and the season, so we confirm the exact rate with you on call or WhatsApp before the trip. We do not publish a fixed price on this website.",
          hi: "Rate gaadi, route aur season par nirbhar karta hai, isliye trip se pehle call ya WhatsApp par hum poora rate aapse confirm karte hain. Is website par koi fixed price nahi diya gaya hai.",
        },
      },
      {
        q: { en: "Can I book a taxi for a full day?", hi: "Kya poore din ke liye taxi book kar sakte hain?" },
        a: {
          en: "Yes, tell us the places you want to visit and how long you need the vehicle. We will confirm availability and the rate with you.",
          hi: "Haan, jahan jaana hai aur kitni der gaadi chahiye, yeh batayein. Hum availability aur rate aapse confirm karenge.",
        },
      },
    ],
    waMessage: {
      en: "Hello Maa Kothgadi Tour & Travels! I need a taxi in Nainital. Please share availability and rates.",
      hi: "Namaste Maa Kothgadi Tour & Travels! Mujhe Nainital mein taxi chahiye. Kripya availability aur rate batayein.",
    },
  },
  {
    slug: "haldwani-to-nainital-taxi",
    image: "/images/hero.jpg",
    imagePosition: "50% 60%",
    imageAlt: {
      en: "A white Hyundai taxi parked in front of pine trees on the road to the hills",
      hi: "Pahadon ke raaste par cheed ke pedon ke saamne khadi safed Hyundai taxi",
    },
    label: { en: "Haldwani to Nainital taxi", hi: "Haldwani se Nainital taxi" },
    title: { en: "Haldwani to Nainital Taxi", hi: "Haldwani se Nainital Taxi" },
    seoTitle: { en: "Haldwani to Nainital Taxi (and Back)", hi: "Haldwani se Nainital Taxi (aur wapsi)" },
    description: {
      en: "Book a Haldwani to Nainital taxi, one way or round trip, with Maa Kothgadi Tour & Travels. Comfortable cars and careful hill driving. Call or WhatsApp to book.",
      hi: "Maa Kothgadi Tour & Travels ke saath Haldwani se Nainital taxi book karein, one-way ya round trip. Aaramdayak gaadiyan aur dhyan se pahadi driving. Call ya WhatsApp karein.",
    },
    intro: {
      en: "Want to go from Haldwani to Nainital? We can help. Book a taxi with Maa Kothgadi Tour & Travels for a comfortable ride up the hills, one way or as a round trip.",
      hi: "Haldwani se Nainital jaana hai? Hum madad kar sakte hain. Maa Kothgadi Tour & Travels se taxi book karein, pahadon ka aaramdayak safar, one-way ya round trip.",
    },
    highlights: {
      en: ["One-way and round trip", "Haldwani to Nainital and Nainital to Haldwani", "Cars for couples, families and groups", "Rate confirmed before you travel"],
      hi: ["One-way aur round trip", "Haldwani se Nainital aur Nainital se Haldwani", "Couples, parivaar aur group ke liye gaadiyan", "Safar se pehle rate confirm"],
    },
    sections: [
      {
        heading: { en: "About the Haldwani to Nainital route", hi: "Haldwani se Nainital ke raaste ke baare mein" },
        paragraphs: [
          {
            en: "Haldwani is the gateway to the Kumaon hills, and Nainital is roughly 35 km away. The road climbs through forested hillside, and the drive usually takes somewhere around one to one and a half hours, depending on traffic and weather.",
            hi: "Haldwani Kumaon ke pahadon ka pravesh dwar hai, aur Nainital wahan se lagbhag 35 km door hai. Sadak jungle wali pahadi se chadhti hai, aur safar aam taur par traffic aur mausam ke hisaab se lagbhag ek se der ghante ka hota hai.",
          },
          {
            en: "On weekends, holidays and in peak season the road can be much slower, so leave earlier than you think you need to.",
            hi: "Weekend, chhuttiyon aur peak season mein sadak kaafi dheemi ho sakti hai, isliye jitna sochte hain usse pehle nikalein.",
          },
        ],
      },
      {
        heading: { en: "Nainital to Haldwani: the return trip", hi: "Nainital se Haldwani: wapsi ka safar" },
        paragraphs: [
          {
            en: "Coming back down? We also arrange Nainital to Haldwani drops, either as a one-way ride or as part of a round trip, so you can book your return when you book the way up.",
            hi: "Wapas aa rahe hain? Hum Nainital se Haldwani drop bhi arrange karte hain, one-way ya round trip ke hisaab se, taaki aap upar jaane ke saath wapsi bhi book kar sakein.",
          },
        ],
      },
      {
        heading: { en: "Choosing a vehicle", hi: "Gaadi kaise chunein" },
        paragraphs: [
          {
            en: "For couples and small groups, a Hyundai Aura or a WagonR is comfortable and easy on narrow roads. For families with luggage, a Toyota Innova or a Mahindra Bolero gives more room. Tell us your group size and bags and we will suggest one.",
            hi: "Couples aur chhote group ke liye Hyundai Aura ya WagonR aaramdayak aur sankri sadkon par aasaan hai. Saaman wale parivaar ke liye Toyota Innova ya Mahindra Bolero mein zyada jagah milti hai. Group ka size aur bags batayein, hum suggest karenge.",
          },
        ],
      },
      {
        heading: { en: "What to share when you book", hi: "Booking ke waqt kya batayein" },
        paragraphs: [
          {
            en: "Share your pickup point in Haldwani, the date and time, how many people are travelling and how much luggage you have. If you are arriving by train or bus, tell us the arrival time so the pickup is planned around it.",
            hi: "Haldwani mein pickup point, date aur samay, kitne log aur kitna saaman, yeh batayein. Agar train ya bus se aa rahe hain to pahunchne ka samay batayein taaki pickup usi ke hisaab se plan ho.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: { en: "How do I book a taxi from Haldwani to Nainital?", hi: "Haldwani se Nainital taxi kaise book karein?" },
        a: {
          en: "Call or WhatsApp us, or fill in the booking form on this site with your pickup point, date and number of passengers. We will confirm the vehicle and rate with you.",
          hi: "Hamein call ya WhatsApp karein, ya is site ka booking form pickup point, date aur kitne log ke saath bharein. Hum gaadi aur rate aapse confirm karenge.",
        },
      },
      {
        q: { en: "How long does it take to reach Nainital from Haldwani?", hi: "Haldwani se Nainital pahunchne mein kitna samay lagta hai?" },
        a: {
          en: "Usually around one to one and a half hours, but traffic, weather and the season can make it longer.",
          hi: "Aam taur par lagbhag ek se der ghanta, lekin traffic, mausam aur season ki wajah se zyada bhi lag sakta hai.",
        },
      },
      {
        q: { en: "Can I book a round trip?", hi: "Kya round trip book kar sakte hain?" },
        a: {
          en: "Yes. We arrange one-way drops and round trips, including the return from Nainital to Haldwani.",
          hi: "Haan. Hum one-way drop aur round trip dono arrange karte hain, Nainital se Haldwani wapsi bhi.",
        },
      },
      {
        q: { en: "How much does the taxi cost?", hi: "Taxi ka kitna kharcha aayega?" },
        a: {
          en: "The rate depends on the vehicle, date and season. We confirm the exact rate with you before the trip, and no fixed price is shown on this website.",
          hi: "Rate gaadi, date aur season par nirbhar karta hai. Trip se pehle hum poora rate aapse confirm karte hain, aur is website par koi fixed price nahi diya gaya hai.",
        },
      },
    ],
    waMessage: {
      en: "Hello Maa Kothgadi Tour & Travels! I want to go from Haldwani to Nainital. Please share availability and rates.",
      hi: "Namaste Maa Kothgadi Tour & Travels! Mujhe Haldwani se Nainital jaana hai. Kripya availability aur rate batayein.",
    },
  },
  {
    slug: "kathgodam-to-nainital-taxi",
    image: "/images/innova.jpg",
    imagePosition: "50% 50%",
    imageAlt: {
      en: "A white Toyota Innova taxi with a roof carrier on a forest road in the hills",
      hi: "Pahadon mein jungle ki sadak par roof carrier wali safed Toyota Innova taxi",
    },
    label: { en: "Kathgodam to Nainital taxi", hi: "Kathgodam se Nainital taxi" },
    title: { en: "Kathgodam to Nainital Taxi", hi: "Kathgodam se Nainital Taxi" },
    seoTitle: { en: "Kathgodam to Nainital Taxi Booking", hi: "Kathgodam se Nainital Taxi Booking" },
    description: {
      en: "Arriving at Kathgodam railway station? Book a Kathgodam to Nainital taxi with Maa Kothgadi Tour & Travels. Share your train time, call or WhatsApp to book.",
      hi: "Kathgodam railway station par aa rahe hain? Maa Kothgadi Tour & Travels se Kathgodam se Nainital taxi book karein. Train ka samay batayein, call ya WhatsApp karein.",
    },
    intro: {
      en: "Getting off a train at Kathgodam and heading to Nainital? Book your taxi before you arrive so a vehicle is ready for the hill drive, with the pickup planned around your train.",
      hi: "Kathgodam mein train se utarkar Nainital jaana hai? Pahunchne se pehle taxi book karein taaki pahadi safar ke liye gaadi tayyar ho, aur pickup aapki train ke hisaab se plan ho.",
    },
    highlights: {
      en: ["Pickup planned around your train time", "One-way and round trip", "Cars with room for luggage", "Rate confirmed before you travel"],
      hi: ["Train ke samay ke hisaab se pickup", "One-way aur round trip", "Saaman ke liye jagah wali gaadiyan", "Safar se pehle rate confirm"],
    },
    sections: [
      {
        heading: { en: "From the station to the hills", hi: "Station se pahadon tak" },
        paragraphs: [
          {
            en: "Kathgodam railway station is in the Haldwani area and is the usual starting point for travellers heading up to Nainital, which is around 35 km away. The drive normally takes about an hour or a little more, depending on traffic and weather.",
            hi: "Kathgodam railway station Haldwani ke ilaake mein hai aur Nainital jaane wale musafiron ka aam starting point hai, jo lagbhag 35 km door hai. Safar aam taur par traffic aur mausam ke hisaab se lagbhag ek ghanta ya thoda zyada hota hai.",
          },
        ],
      },
      {
        heading: { en: "Tell us your train details", hi: "Train ki details batayein" },
        paragraphs: [
          {
            en: "Trains can run early or late. Share your train name or number and arrival time when you book, and message us if it changes, so your driver is there when you step out.",
            hi: "Train jaldi ya der se chal sakti hai. Booking ke waqt train ka naam ya number aur pahunchne ka samay batayein, aur badle to message karein, taaki aap utarein to driver wahan ho.",
          },
        ],
      },
      {
        heading: { en: "Luggage and group size", hi: "Saaman aur group ka size" },
        paragraphs: [
          {
            en: "Long train journeys usually mean more bags. Let us know how many people and bags you have, and we will suggest a vehicle with enough space, such as a Toyota Innova or a Mahindra Bolero for larger groups.",
            hi: "Lambi train yatra mein aam taur par zyada saaman hota hai. Kitne log aur bags hain batayein, hum kaafi jagah wali gaadi suggest karenge, jaise bade group ke liye Toyota Innova ya Mahindra Bolero.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: { en: "Can I book a taxi from Kathgodam station to Nainital in advance?", hi: "Kya Kathgodam station se Nainital ke liye pehle se taxi book kar sakte hain?" },
        a: {
          en: "Yes, and it is a good idea. Call or WhatsApp us with your date and train arrival time and we will confirm availability and rate.",
          hi: "Haan, aur yeh achha idea hai. Date aur train ke pahunchne ke samay ke saath call ya WhatsApp karein, hum availability aur rate confirm karenge.",
        },
      },
      {
        q: { en: "What if my train is late?", hi: "Agar meri train late ho jaye to?" },
        a: {
          en: "Message or call us with the new time and we will adjust the pickup where we can.",
          hi: "Naye samay ke saath message ya call karein, hum jahan tak ho sakega pickup badal denge.",
        },
      },
      {
        q: { en: "Do you also do Nainital to Kathgodam drops?", hi: "Kya Nainital se Kathgodam drop bhi karte hain?" },
        a: {
          en: "Tell us your train time and we will confirm the drop with you, either one way or as part of a round trip.",
          hi: "Apni train ka samay batayein, hum drop aapse confirm karenge, one-way ya round trip ke roop mein.",
        },
      },
    ],
    waMessage: {
      en: "Hello Maa Kothgadi Tour & Travels! I need a taxi from Kathgodam station to Nainital. Please share availability and rates.",
      hi: "Namaste Maa Kothgadi Tour & Travels! Mujhe Kathgodam station se Nainital ke liye taxi chahiye. Kripya availability aur rate batayein.",
    },
  },
];

export const getRoute = (slug: string) => routes.find((r) => r.slug === slug);
