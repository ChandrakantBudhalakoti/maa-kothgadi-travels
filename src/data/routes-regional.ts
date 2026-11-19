import type { TaxiRoute } from "./routes";

/**
 * Wider service-area pages. Owner-confirmed: pickups and drops everywhere in Uttarakhand, airport
 * pickups and drops, and trips elsewhere in India only when a customer books one (no standing
 * service outside Uttarakhand). Content avoids exact distances, prices and timings, and says that
 * availability and rates are confirmed with the customer. Place descriptions stick to well-known facts.
 */
export const regionalRoutes: TaxiRoute[] = [
  {
    slug: "taxi-service-in-uttarakhand",
    featured: true,
    image: "/images/innova-2.jpg",
    imagePosition: "50% 55%",
    imageAlt: {
      en: "A white Toyota Innova taxi at dusk among forested hills in Uttarakhand",
      hi: "Uttarakhand ke jungle wali pahadiyon mein shaam ke waqt safed Toyota Innova taxi",
    },
    label: { en: "Taxi service in Uttarakhand", hi: "Uttarakhand mein taxi service" },
    title: { en: "Taxi Service in Uttarakhand", hi: "Uttarakhand mein Taxi Service" },
    seoTitle: { en: "Taxi Service in Uttarakhand: Pickup Anywhere", hi: "Uttarakhand Taxi Service: Kahin Se Bhi Pickup" },
    description: {
      en: "Taxi service across Uttarakhand, with pickups from anywhere in the state and long trips across India when you book one. Call or WhatsApp Maa Kothgadi Tour & Travels.",
      hi: "Poore Uttarakhand mein taxi service, rajya mein kahin se bhi pickup, aur booking aane par poore India ke lambe safar. Maa Kothgadi Tour & Travels ko call ya WhatsApp karein.",
    },
    intro: {
      en: "Need a taxi anywhere in Uttarakhand? Maa Kothgadi Tour & Travels picks up from places across the state, from Kumaon to Garhwal, and takes you where you need to go. Tell us your pickup point and destination and we will confirm the rest.",
      hi: "Uttarakhand mein kahin bhi taxi chahiye? Maa Kothgadi Tour & Travels rajya ke har hisse se, Kumaon se Garhwal tak, pickup karti hai. Pickup point aur manzil batayein, baaki hum confirm karenge.",
    },
    highlights: {
      en: ["Pickups from anywhere in Uttarakhand", "Kumaon and Garhwal routes", "Trips across India when you book one", "Rate confirmed before you travel"],
      hi: ["Uttarakhand mein kahin se bhi pickup", "Kumaon aur Garhwal ke routes", "Booking aane par poore India ke safar", "Safar se pehle rate confirm"],
    },
    sections: [
      {
        heading: { en: "Pickups across the state", hi: "Poore rajya mein pickup" },
        paragraphs: [
          {
            en: "We do not limit ourselves to one town. Whether you are in a hill town, a village or a city, tell us where to pick you up and where you are headed, and we will confirm whether and when we can reach you.",
            hi: "Hum sirf ek shehar tak seemit nahi hain. Aap pahadi shehar, gaon ya bade shehar mein hon, batayein kahan se uthana hai aur kahan jaana hai, hum bata denge ki kab aur kaise pahunch sakte hain.",
          },
        ],
      },
      {
        heading: { en: "Journeys people ask for", hi: "Jin safar ke liye log poochte hain" },
        paragraphs: [
          {
            en: "Popular trips include Nainital and the Kumaon hill stations, Jim Corbett National Park, Haridwar and Rishikesh, Dehradun and Mussoorie, and pilgrimage journeys. The Char Dham yatra needs advance planning and registration through the official portal, and mountain roads can change with the weather, so share your dates early.",
            hi: "Aam trips mein Nainital aur Kumaon ke hill stations, Jim Corbett National Park, Haridwar aur Rishikesh, Dehradun aur Mussoorie, aur teerth yatrayein shamil hain. Char Dham yatra ke liye pehle se planning aur official portal par registration zaroori hai, aur mausam ke saath pahadi sadkein badal sakti hain, isliye apni dates jaldi batayein.",
          },
        ],
      },
      {
        heading: { en: "Beyond Uttarakhand", hi: "Uttarakhand ke bahar" },
        paragraphs: [
          {
            en: "Our main work is in Uttarakhand, but if someone books a longer trip elsewhere in India, we take it. Call us first so we can confirm availability and what the trip involves.",
            hi: "Hamara mukhya kaam Uttarakhand mein hai, lekin agar koi India mein aur kahin ke liye lamba trip book kare to hum le jaate hain. Pehle call karein taaki hum availability aur trip ki details confirm kar sakein.",
          },
        ],
      },
      {
        heading: { en: "Driving in the mountains", hi: "Pahadon mein driving" },
        paragraphs: [
          {
            en: "Landslides, rain and snow can slow or block roads. We drive for the conditions, not the clock, and we ask you to keep your schedule flexible, especially in the monsoon and in winter.",
            hi: "Landslide, baarish aur baraf se sadkein dheemi ya band ho sakti hain. Hum samay se zyada halaat dekhkar chalate hain aur aapse schedule flexible rakhne ko kehte hain, khaaskar monsoon aur sardi mein.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: { en: "Do you pick up from anywhere in Uttarakhand?", hi: "Kya Uttarakhand mein kahin se bhi pickup hota hai?" },
        a: {
          en: "Yes, we pick up from places across the state. Share your exact pickup point and time and we will confirm.",
          hi: "Haan, hum rajya ke alag-alag hisson se pickup karte hain. Apna sahi pickup point aur samay batayein, hum confirm karenge.",
        },
      },
      {
        q: { en: "Can I book a taxi for the Char Dham yatra?", hi: "Kya Char Dham yatra ke liye taxi book kar sakte hain?" },
        a: {
          en: "Call us with your dates and route. Remember that yatra registration through the official portal is needed, and road conditions can change, so we plan it together with you.",
          hi: "Apni dates aur route ke saath call karein. Yaad rakhein ki official portal par yatra registration zaroori hai aur sadak ke halaat badal sakte hain, isliye hum aapke saath milkar plan karte hain.",
        },
      },
      {
        q: { en: "How much will the taxi cost?", hi: "Taxi ka kitna kharcha aayega?" },
        a: {
          en: "It depends on the vehicle, route, days and season. We confirm the exact rate with you on call or WhatsApp before the trip, and no fixed price is shown on this website.",
          hi: "Yeh gaadi, route, din aur season par nirbhar karta hai. Trip se pehle call ya WhatsApp par hum poora rate confirm karte hain, aur is website par koi fixed price nahi diya gaya hai.",
        },
      },
    ],
    waMessage: {
      en: "Hello Maa Kothgadi Tour & Travels! I need a taxi in Uttarakhand. Please share availability and rates.",
      hi: "Namaste Maa Kothgadi Tour & Travels! Mujhe Uttarakhand mein taxi chahiye. Kripya availability aur rate batayein.",
    },
  },
  {
    slug: "pantnagar-airport-to-nainital-taxi",
    featured: true,
    image: "/images/aura.jpg",
    imagePosition: "50% 65%",
    imageAlt: {
      en: "A white Hyundai Aura sedan on a green hill road, suited to airport transfers",
      hi: "Hari-bhari pahadi sadak par safed Hyundai Aura sedan, airport transfer ke liye theek",
    },
    label: { en: "Pantnagar airport to Nainital taxi", hi: "Pantnagar airport se Nainital taxi" },
    title: { en: "Pantnagar Airport to Nainital Taxi", hi: "Pantnagar Airport se Nainital Taxi" },
    seoTitle: { en: "Pantnagar Airport to Nainital Taxi Transfer", hi: "Pantnagar Airport se Nainital Taxi Transfer" },
    description: {
      en: "Flying into Pantnagar? Book an airport pickup to Nainital, Haldwani or nearby with Maa Kothgadi Tour & Travels. Share your flight details and we plan around them.",
      hi: "Pantnagar flight se aa rahe hain? Maa Kothgadi Tour & Travels ke saath Nainital, Haldwani ya aas-paas ke liye airport pickup book karein. Flight details batayein, hum usi hisaab se plan karenge.",
    },
    intro: {
      en: "Landing at Pantnagar and heading for the hills? Book an airport pickup so a driver is waiting when you arrive, and your Nainital journey starts without the scramble for a ride.",
      hi: "Pantnagar mein utarkar pahadon ki taraf jaana hai? Airport pickup book karein taaki aap pahunchein to driver intezaar kar raha ho, aur Nainital ka safar bina bhagdaud ke shuru ho.",
    },
    highlights: {
      en: ["Pickup planned around your flight", "Drops to Nainital, Haldwani and nearby", "Airport pickup and airport drop", "Rate confirmed before you travel"],
      hi: ["Flight ke hisaab se pickup", "Nainital, Haldwani aur aas-paas ke liye drop", "Airport pickup aur airport drop", "Safar se pehle rate confirm"],
    },
    sections: [
      {
        heading: { en: "Airport to the hills", hi: "Airport se pahadon tak" },
        paragraphs: [
          {
            en: "Pantnagar Airport is one of the closest airports for travellers going to Nainital and the surrounding Kumaon region. The road to Nainital passes through the Haldwani area and then climbs into the hills, and the whole journey usually takes a couple of hours, depending on traffic and weather.",
            hi: "Pantnagar Airport Nainital aur aas-paas ke Kumaon ilaake jaane walon ke liye sabse nazdeeki airports mein se ek hai. Nainital ka raasta Haldwani ke ilaake se hokar guzarta hai aur phir pahadon mein chadhta hai, aur poora safar aam taur par traffic aur mausam ke hisaab se kuch ghante ka hota hai.",
          },
        ],
      },
      {
        heading: { en: "Share your flight details", hi: "Flight ki details batayein" },
        paragraphs: [
          {
            en: "Give us your flight number and landing time when you book, and message us if the time changes. We plan the pickup around the flight so you are not left waiting. Flight schedules change, so check with your airline before you travel.",
            hi: "Booking ke waqt flight number aur landing ka samay batayein, aur samay badle to message karein. Hum pickup flight ke hisaab se plan karte hain taaki aapko intezaar na karna pade. Flight schedule badalte rehte hain, isliye safar se pehle apni airline se check kar lein.",
          },
        ],
      },
      {
        heading: { en: "Going back to the airport", hi: "Airport wapas jaana" },
        paragraphs: [
          {
            en: "For a drop to the airport, leave extra time for hill roads and check-in, especially in the monsoon or winter. Tell us your departure time and we will suggest when to leave.",
            hi: "Airport drop ke liye pahadi sadkon aur check-in ke liye extra samay rakhein, khaaskar monsoon ya sardi mein. Apni departure ka samay batayein, hum bata denge ki kab nikalna chahiye.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: { en: "Can I book an airport pickup in advance?", hi: "Kya airport pickup pehle se book kar sakte hain?" },
        a: {
          en: "Yes, and it is recommended. Call or WhatsApp us with your date, flight number and destination.",
          hi: "Haan, aur yeh behtar hai. Date, flight number aur manzil ke saath call ya WhatsApp karein.",
        },
      },
      {
        q: { en: "What if my flight is delayed?", hi: "Agar meri flight late ho jaye to?" },
        a: {
          en: "Message or call us with the new time and we will adjust the pickup where we can.",
          hi: "Naye samay ke saath message ya call karein, hum jahan tak ho sakega pickup badal denge.",
        },
      },
      {
        q: { en: "Do you drop to places other than Nainital?", hi: "Kya Nainital ke alawa dusri jagah bhi drop karte hain?" },
        a: {
          en: "Yes. Tell us your destination in Uttarakhand and we will confirm availability and the rate.",
          hi: "Haan. Uttarakhand mein apni manzil batayein, hum availability aur rate confirm karenge.",
        },
      },
    ],
    waMessage: {
      en: "Hello Maa Kothgadi Tour & Travels! I need an airport pickup from Pantnagar to Nainital. Please share availability and rates.",
      hi: "Namaste Maa Kothgadi Tour & Travels! Mujhe Pantnagar airport se Nainital ke liye pickup chahiye. Kripya availability aur rate batayein.",
    },
  },
  {
    slug: "kumaon-hill-stations-taxi",
    image: "/images/bolero.jpg",
    imagePosition: "50% 50%",
    imageAlt: {
      en: "A white Mahindra Bolero SUV with a roof rack beside a pine-lined hill road",
      hi: "Cheed ke pedon wali pahadi sadak ke kinare roof rack wali safed Mahindra Bolero SUV",
    },
    label: { en: "Taxi to Almora, Ranikhet & Kausani", hi: "Almora, Ranikhet aur Kausani taxi" },
    title: { en: "Taxi to Almora, Ranikhet, Kausani and Kumaon Hill Stations", hi: "Almora, Ranikhet, Kausani aur Kumaon ke Hill Stations ke liye Taxi" },
    seoTitle: { en: "Taxi to Almora, Ranikhet, Kausani & Bhimtal", hi: "Almora, Ranikhet, Kausani aur Bhimtal Taxi" },
    description: {
      en: "Book a taxi to Almora, Ranikhet, Kausani, Bhimtal, Mukteshwar and other Kumaon hill stations with Maa Kothgadi Tour & Travels. One-way or round trip.",
      hi: "Maa Kothgadi Tour & Travels ke saath Almora, Ranikhet, Kausani, Bhimtal, Mukteshwar aur Kumaon ke dusre hill stations ke liye taxi book karein. One-way ya round trip.",
    },
    intro: {
      en: "The Kumaon hills have more to offer than Nainital. If you are planning Almora, Ranikhet, Kausani, Bhimtal, Mukteshwar or a mix of them, book one taxi for the whole trip and let the driver handle the mountain roads.",
      hi: "Kumaon ke pahadon mein Nainital ke alawa bhi bahut kuch hai. Almora, Ranikhet, Kausani, Bhimtal, Mukteshwar ya inka mix plan kar rahe hain to poori trip ke liye ek taxi book karein aur pahadi sadkein driver par chhod dein.",
    },
    highlights: {
      en: ["Almora, Ranikhet, Kausani, Bhimtal, Mukteshwar and more", "Multi-stop and round trips", "Pickup from Haldwani, Kathgodam or Nainital", "Rate confirmed before you travel"],
      hi: ["Almora, Ranikhet, Kausani, Bhimtal, Mukteshwar aur aur bhi", "Multi-stop aur round trips", "Haldwani, Kathgodam ya Nainital se pickup", "Safar se pehle rate confirm"],
    },
    sections: [
      {
        heading: { en: "What each place is known for", hi: "Har jagah kis liye jaani jaati hai" },
        paragraphs: [
          {
            en: "Bhimtal is known for its lake, close to Nainital. Almora is a hill town with a strong local culture and food. Ranikhet is a quiet cantonment town with pine forests. Kausani is famous for wide views of the Himalayan peaks on a clear day, and Mukteshwar is known for its orchards and its temple.",
            hi: "Bhimtal apni jheel ke liye jaana jaata hai, jo Nainital ke paas hai. Almora mazboot sthaniya sanskriti aur khaane wala pahadi shehar hai. Ranikhet cheed ke jungle wala shaant cantonment shehar hai. Kausani saaf mausam mein Himalaya ki choton ke chaude nazaron ke liye mashhoor hai, aur Mukteshwar apne bagicho aur mandir ke liye jaana jaata hai.",
          },
        ],
      },
      {
        heading: { en: "Plan a route, not just a destination", hi: "Sirf manzil nahi, poora route plan karein" },
        paragraphs: [
          {
            en: "These places are spread out and the roads are slow, so a trip that covers several of them works best over a few days. Tell us your dates and the places you want, and we will suggest a sensible order and where to break the journey.",
            hi: "Yeh jagahein door-door hain aur sadkein dheemi hain, isliye kai jagah ghoomne wali trip kuch din mein behtar rehti hai. Apni dates aur jagahein batayein, hum sahi kram aur kahan rukna hai, suggest karenge.",
          },
        ],
      },
      {
        heading: { en: "Vehicle choice for hill roads", hi: "Pahadi sadkon ke liye gaadi" },
        paragraphs: [
          {
            en: "A Toyota Innova suits families and longer journeys, a Mahindra Bolero is a practical choice for rougher roads and extra luggage, and a Hyundai Aura works well for couples. We will help you pick based on your group and route.",
            hi: "Toyota Innova parivaar aur lambe safar ke liye theek hai, Mahindra Bolero kharab sadkon aur zyada saaman ke liye vyavharik hai, aur Hyundai Aura couples ke liye achhi rehti hai. Aapke group aur route ke hisaab se chunne mein hum madad karenge.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: { en: "Can I visit several hill stations in one trip?", hi: "Kya ek trip mein kai hill station ghoom sakte hain?" },
        a: {
          en: "Yes. Tell us the places and the number of days and we will plan a route and confirm the rate.",
          hi: "Haan. Jagahein aur dinon ki sankhya batayein, hum route plan karenge aur rate confirm karenge.",
        },
      },
      {
        q: { en: "Where does the taxi pick me up?", hi: "Taxi kahan se pickup karti hai?" },
        a: {
          en: "Commonly from Haldwani, Kathgodam or Nainital, but we pick up from places across Uttarakhand. Share your pickup point and we will confirm.",
          hi: "Aam taur par Haldwani, Kathgodam ya Nainital se, lekin hum Uttarakhand mein alag-alag jagah se pickup karte hain. Pickup point batayein, hum confirm karenge.",
        },
      },
      {
        q: { en: "Is the rate per day or per trip?", hi: "Rate per day hai ya per trip?" },
        a: {
          en: "It depends on the route and number of days. We confirm the exact rate, and what is included, before you book.",
          hi: "Yeh route aur dinon par nirbhar karta hai. Booking se pehle hum poora rate aur usme kya shamil hai, confirm karte hain.",
        },
      },
    ],
    waMessage: {
      en: "Hello Maa Kothgadi Tour & Travels! I want a taxi for a Kumaon hill station trip (Almora, Ranikhet, Kausani). Please share availability and rates.",
      hi: "Namaste Maa Kothgadi Tour & Travels! Mujhe Kumaon hill stations (Almora, Ranikhet, Kausani) ke liye taxi chahiye. Kripya availability aur rate batayein.",
    },
  },
  {
    slug: "haldwani-to-jim-corbett-taxi",
    image: "/images/wagonr.jpg",
    imagePosition: "50% 30%",
    imageAlt: {
      en: "A white Maruti Suzuki WagonR beside a green forested hillside",
      hi: "Hari jungle wali pahadi ke paas khadi safed Maruti Suzuki WagonR",
    },
    label: { en: "Taxi to Jim Corbett", hi: "Jim Corbett ke liye taxi" },
    title: { en: "Taxi to Jim Corbett National Park", hi: "Jim Corbett National Park ke liye Taxi" },
    seoTitle: { en: "Taxi to Jim Corbett National Park & Ramnagar", hi: "Jim Corbett National Park aur Ramnagar Taxi" },
    description: {
      en: "Book a taxi to Jim Corbett National Park and Ramnagar from Haldwani, Kathgodam or Nainital with Maa Kothgadi Tour & Travels. Call or WhatsApp to book.",
      hi: "Maa Kothgadi Tour & Travels ke saath Haldwani, Kathgodam ya Nainital se Jim Corbett National Park aur Ramnagar ke liye taxi book karein. Call ya WhatsApp karein.",
    },
    intro: {
      en: "Heading to Jim Corbett National Park for a safari or a weekend in the forest? Book a taxi from Haldwani, Kathgodam or Nainital and arrive without the stress of finding a ride.",
      hi: "Safari ya jungle mein weekend ke liye Jim Corbett National Park jaana hai? Haldwani, Kathgodam ya Nainital se taxi book karein aur bina ride dhoondhne ki tension ke pahunchein.",
    },
    highlights: {
      en: ["Pickup from Haldwani, Kathgodam or Nainital", "Drops near Ramnagar and the park", "One-way and round trip", "Rate confirmed before you travel"],
      hi: ["Haldwani, Kathgodam ya Nainital se pickup", "Ramnagar aur park ke paas drop", "One-way aur round trip", "Safar se pehle rate confirm"],
    },
    sections: [
      {
        heading: { en: "Getting to Corbett", hi: "Corbett kaise pahunchein" },
        paragraphs: [
          {
            en: "Ramnagar is the usual base for visiting Jim Corbett National Park, and it is reached from Haldwani, Kathgodam and Nainital by road. The route runs through lower hills and plains, so it is easier than a mountain drive, but traffic can still slow it down.",
            hi: "Jim Corbett National Park ghoomne ke liye aam taur par Ramnagar base hota hai, jahan Haldwani, Kathgodam aur Nainital se sadak ke raaste pahunchte hain. Raasta nichli pahadiyon aur maidani ilaake se guzarta hai, isliye pahadi drive se aasaan hai, lekin traffic phir bhi deri kara sakta hai.",
          },
        ],
      },
      {
        heading: { en: "Safaris and seasons", hi: "Safari aur mausam" },
        paragraphs: [
          {
            en: "Safari entry usually has to be booked in advance through the park's official channels, and parts of the park are closed during the monsoon. Confirm the current rules and your safari timing before you book the taxi, and tell us the timing so we can plan an early start.",
            hi: "Safari entry aam taur par park ke official channels se pehle se book karni padti hai, aur monsoon mein park ke kuch hisse band rehte hain. Taxi book karne se pehle taaza niyam aur apni safari ka samay confirm kar lein, aur samay humein batayein taaki hum jaldi nikalne ka plan kar sakein.",
          },
        ],
      },
      {
        heading: { en: "Combine it with Nainital", hi: "Nainital ke saath jodein" },
        paragraphs: [
          {
            en: "Many travellers pair Corbett with Nainital. One taxi for the whole trip, with the route planned in advance, is simpler than arranging rides at each stage.",
            hi: "Bahut se musafir Corbett ko Nainital ke saath jodte hain. Poore trip ke liye ek taxi, route pehle se plan karke, har padav par alag ride dhoondhne se aasaan hai.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: { en: "Can the taxi wait while I do a safari?", hi: "Kya safari ke dauran taxi ruk sakti hai?" },
        a: {
          en: "Tell us your plan and timings and we will confirm what is possible and how it affects the rate.",
          hi: "Apna plan aur samay batayein, hum bata denge ki kya possible hai aur rate par kya asar padega.",
        },
      },
      {
        q: { en: "Where do you pick up for Corbett?", hi: "Corbett ke liye pickup kahan se hota hai?" },
        a: {
          en: "Commonly from Haldwani, Kathgodam or Nainital, and from other places in Uttarakhand on request.",
          hi: "Aam taur par Haldwani, Kathgodam ya Nainital se, aur zaroorat par Uttarakhand ki dusri jagahon se.",
        },
      },
      {
        q: { en: "How do I book?", hi: "Booking kaise karein?" },
        a: {
          en: "Call or WhatsApp us, or use the booking form, with your pickup, date and number of people.",
          hi: "Pickup, date aur kitne log ke saath hamein call ya WhatsApp karein, ya booking form bharein.",
        },
      },
    ],
    waMessage: {
      en: "Hello Maa Kothgadi Tour & Travels! I want a taxi to Jim Corbett National Park. Please share availability and rates.",
      hi: "Namaste Maa Kothgadi Tour & Travels! Mujhe Jim Corbett National Park ke liye taxi chahiye. Kripya availability aur rate batayein.",
    },
  },
  {
    slug: "taxi-to-haridwar-rishikesh-dehradun",
    image: "/images/innova.jpg",
    imagePosition: "50% 40%",
    imageAlt: {
      en: "A white Toyota Innova with a roof carrier, suited to long journeys",
      hi: "Roof carrier wali safed Toyota Innova, lambe safar ke liye theek",
    },
    label: { en: "Taxi to Haridwar, Rishikesh & Dehradun", hi: "Haridwar, Rishikesh aur Dehradun taxi" },
    title: { en: "Taxi to Haridwar, Rishikesh and Dehradun", hi: "Haridwar, Rishikesh aur Dehradun ke liye Taxi" },
    seoTitle: { en: "Taxi to Haridwar, Rishikesh & Dehradun", hi: "Haridwar, Rishikesh aur Dehradun Taxi Booking" },
    description: {
      en: "Book a taxi to Haridwar, Rishikesh, Dehradun and Mussoorie from across Uttarakhand with Maa Kothgadi Tour & Travels. Pilgrim trips, airport drops and long journeys.",
      hi: "Maa Kothgadi Tour & Travels ke saath Uttarakhand ke alag-alag hisson se Haridwar, Rishikesh, Dehradun aur Mussoorie ke liye taxi book karein. Teerth yatra, airport drop aur lambe safar.",
    },
    intro: {
      en: "Going to Haridwar, Rishikesh, Dehradun or Mussoorie, or coming from there into the hills? Book a taxi for pilgrimage, sightseeing, an airport transfer or a family journey, and travel with one driver the whole way.",
      hi: "Haridwar, Rishikesh, Dehradun ya Mussoorie jaana hai, ya wahan se pahadon mein aana hai? Teerth, sightseeing, airport transfer ya family safar ke liye taxi book karein aur poore raaste ek hi driver ke saath chalein.",
    },
    highlights: {
      en: ["Haridwar, Rishikesh, Dehradun and Mussoorie", "Pilgrim trips and airport drops", "One-way and round trip", "Rate confirmed before you travel"],
      hi: ["Haridwar, Rishikesh, Dehradun aur Mussoorie", "Teerth yatra aur airport drop", "One-way aur round trip", "Safar se pehle rate confirm"],
    },
    sections: [
      {
        heading: { en: "What these places are known for", hi: "Yeh jagahein kis liye jaani jaati hain" },
        paragraphs: [
          {
            en: "Haridwar is a major pilgrimage town on the Ganga, known for the evening aarti at Har Ki Pauri. Rishikesh is known for its yoga centres, the Ram Jhula and Laxman Jhula bridges and, in season, river rafting. Dehradun is the state capital, and Mussoorie is a hill station not far from it.",
            hi: "Haridwar Ganga kinare ka bada teerth shehar hai, jo Har Ki Pauri ki shaam ki aarti ke liye jaana jaata hai. Rishikesh yoga centres, Ram Jhula aur Laxman Jhula pul aur season mein river rafting ke liye jaana jaata hai. Dehradun rajya ki rajdhani hai, aur Mussoorie uske paas ka hill station hai.",
          },
        ],
      },
      {
        heading: { en: "Dehradun airport transfers", hi: "Dehradun airport transfer" },
        paragraphs: [
          {
            en: "Dehradun's airport, Jolly Grant, is also the usual airport for Rishikesh and Haridwar. Share your flight details and we will plan the pickup or drop around them.",
            hi: "Dehradun ka airport, Jolly Grant, Rishikesh aur Haridwar ke liye bhi aam taur par use hone wala airport hai. Flight ki details batayein, hum pickup ya drop usi ke hisaab se plan karenge.",
          },
        ],
      },
      {
        heading: { en: "A long journey, planned well", hi: "Lamba safar, achhi planning ke saath" },
        paragraphs: [
          {
            en: "From the Kumaon hills this is a long drive, so an early start and a planned break make it far more comfortable. Tell us your dates and we will suggest when to leave.",
            hi: "Kumaon ke pahadon se yeh lamba safar hai, isliye jaldi nikalna aur ek planned break ise kahin zyada aaramdayak bana deta hai. Apni dates batayein, hum bata denge kab nikalna theek rahega.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: { en: "Do you pick up in Garhwal as well as Kumaon?", hi: "Kya Kumaon ke saath Garhwal mein bhi pickup hota hai?" },
        a: {
          en: "We pick up from places across Uttarakhand. Tell us your pickup point and we will confirm.",
          hi: "Hum Uttarakhand mein alag-alag jagah se pickup karte hain. Pickup point batayein, hum confirm karenge.",
        },
      },
      {
        q: { en: "Can I book a pilgrimage trip?", hi: "Kya teerth yatra ke liye book kar sakte hain?" },
        a: {
          en: "Yes. Share your route and dates, and note that some yatras need registration through official channels.",
          hi: "Haan. Apna route aur dates batayein, aur dhyan rakhein ki kuch yatrayon ke liye official channels se registration zaroori hota hai.",
        },
      },
      {
        q: { en: "Is the rate fixed?", hi: "Kya rate fixed hota hai?" },
        a: {
          en: "We confirm the exact rate, and what it includes, on call or WhatsApp before the trip. No fixed price is shown on this website.",
          hi: "Trip se pehle call ya WhatsApp par hum poora rate aur usme kya shamil hai, confirm karte hain. Is website par koi fixed price nahi diya gaya hai.",
        },
      },
    ],
    waMessage: {
      en: "Hello Maa Kothgadi Tour & Travels! I need a taxi to Haridwar / Rishikesh / Dehradun. Please share availability and rates.",
      hi: "Namaste Maa Kothgadi Tour & Travels! Mujhe Haridwar / Rishikesh / Dehradun ke liye taxi chahiye. Kripya availability aur rate batayein.",
    },
  },
  {
    slug: "outstation-taxi-across-india",
    featured: true,
    image: "/images/gadiyan.jpg",
    imagePosition: "50% 40%",
    imageAlt: {
      en: "A WagonR and a Toyota Innova with luggage on the roof, ready for a long trip",
      hi: "Lambe safar ke liye tayyar WagonR aur Innova, Innova ki chhat par saaman",
    },
    label: { en: "Outstation taxi across India", hi: "Poore India ke liye outstation taxi" },
    title: { en: "Outstation Taxi from Uttarakhand Across India", hi: "Uttarakhand se Poore India ke liye Outstation Taxi" },
    seoTitle: { en: "Outstation Taxi from Uttarakhand Across India", hi: "Uttarakhand se Poore India Outstation Taxi" },
    description: {
      en: "Need a long outstation taxi from Uttarakhand to Delhi or elsewhere in India? Book it and Maa Kothgadi Tour & Travels will arrange it. Call first to confirm.",
      hi: "Uttarakhand se Delhi ya India mein kahin aur lamba outstation taxi chahiye? Booking karein, Maa Kothgadi Tour & Travels arrange karti hai. Pehle call karke confirm karein.",
    },
    intro: {
      en: "Most of our trips are in Uttarakhand, but when someone books one, we also take long journeys elsewhere in India. If you need a ride from Uttarakhand to Delhi or another city, call us and we will tell you honestly whether we can do it.",
      hi: "Hamare zyadatar trips Uttarakhand mein hote hain, lekin jab koi book karta hai to hum India mein aur kahin ke lambe safar bhi karte hain. Uttarakhand se Delhi ya kisi aur shehar ke liye ride chahiye to call karein, hum saaf bata denge ki kar sakte hain ya nahi.",
    },
    highlights: {
      en: ["Long outstation trips when you book", "Confirm availability before you plan", "One-way and round trip", "Rate confirmed before you travel"],
      hi: ["Booking par lambe outstation trips", "Plan karne se pehle availability confirm", "One-way aur round trip", "Safar se pehle rate confirm"],
    },
    sections: [
      {
        heading: { en: "How long trips work", hi: "Lambe trips kaise hote hain" },
        paragraphs: [
          {
            en: "These trips are arranged case by case. Tell us your starting point, destination, dates and group size. We check whether a vehicle and driver are available, and we confirm everything with you before you commit.",
            hi: "Yeh trips case-by-case arrange hote hain. Starting point, manzil, dates aur group ka size batayein. Hum dekhte hain ki gaadi aur driver available hain ya nahi, aur aapke commit karne se pehle sab kuch confirm karte hain.",
          },
        ],
      },
      {
        heading: { en: "Permits and taxes", hi: "Permit aur tax" },
        paragraphs: [
          {
            en: "Trips that cross state borders can involve inter-state taxes, tolls and permits. Ask us what is included in the quoted rate and what is extra, so there are no surprises on the road.",
            hi: "Jo trips rajya ki seema paar karte hain unme inter-state tax, toll aur permit lag sakte hain. Hamse poochein ki bataye gaye rate mein kya shamil hai aur kya alag se, taaki raaste mein koi surprise na ho.",
          },
        ],
      },
      {
        heading: { en: "Plan well ahead", hi: "Pehle se planning karein" },
        paragraphs: [
          {
            en: "Long journeys need more notice than a short ride. Contact us early with your dates, and share your return plan if you want a round trip.",
            hi: "Lambe safar ke liye chhoti ride se zyada pehle se bataana padta hai. Apni dates ke saath jaldi sampark karein, aur round trip chahiye to wapsi ka plan bhi batayein.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: { en: "Do you go outside Uttarakhand?", hi: "Kya aap Uttarakhand ke bahar jaate hain?" },
        a: {
          en: "Yes, when you book one. Call us with your route and dates and we will confirm whether we can take it.",
          hi: "Haan, booking aane par. Apne route aur dates ke saath call karein, hum bata denge ki le ja sakte hain ya nahi.",
        },
      },
      {
        q: { en: "Which cities can I go to?", hi: "Kaun se shehron mein ja sakte hain?" },
        a: {
          en: "It depends on the trip. Tell us your route, for example Uttarakhand to Delhi, and we will say yes or no clearly.",
          hi: "Yeh trip par nirbhar karta hai. Apna route batayein, jaise Uttarakhand se Delhi, hum saaf haan ya na bata denge.",
        },
      },
      {
        q: { en: "Is the rate fixed?", hi: "Kya rate fixed hota hai?" },
        a: {
          en: "We confirm the exact rate and what it includes before the trip. No fixed price is shown on this website.",
          hi: "Trip se pehle hum poora rate aur usme kya shamil hai, confirm karte hain. Is website par koi fixed price nahi diya gaya hai.",
        },
      },
    ],
    waMessage: {
      en: "Hello Maa Kothgadi Tour & Travels! I need an outstation taxi from Uttarakhand to another city in India. Please share availability and rates.",
      hi: "Namaste Maa Kothgadi Tour & Travels! Mujhe Uttarakhand se India ke kisi aur shehar ke liye outstation taxi chahiye. Kripya availability aur rate batayein.",
    },
  },
];
