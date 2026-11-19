import type { L } from "@/i18n/config";

export type Section = { heading: L; paragraphs: L[] };

export type Post = {
  slug: string;
  date: string; // ISO
  minutes: number;
  image: string;
  imagePosition: string;
  imageAlt: L;
  title: L;
  description: L;
  intro: L;
  sections: Section[];
};

/**
 * Evergreen, general-knowledge travel guidance. No prices, no exact timings and no claims
 * about routes the business serves. Each article tells readers to verify current conditions.
 */
export const posts: Post[] = [
  {
    slug: "best-places-to-visit-in-uttarakhand",
    date: "2026-11-19",
    minutes: 5,
    image: "/images/bolero.jpg",
    imagePosition: "50% 45%",
    imageAlt: {
      en: "A white SUV parked beside a pine-lined hill road in Uttarakhand",
      hi: "Uttarakhand ki cheed ke pedon wali pahadi sadak ke kinare khadi safed SUV",
    },
    title: {
      en: "Best Places to Visit in Uttarakhand: A Practical Starter Guide",
      hi: "Uttarakhand mein ghoomne ki best jagahein: Starter Guide",
    },
    description: {
      en: "A simple guide to well-known places in Uttarakhand and how to pick the right ones for your kind of trip.",
      hi: "Uttarakhand ki mashhoor jagahon ki aasaan guide, aur apni trip ke hisaab se sahi jagah kaise chunein.",
    },
    intro: {
      en: "Uttarakhand packs snow peaks, pine forests, rivers, lakes and sacred towns into one state. The hard part is choosing. This guide groups well-known places by the kind of trip they suit, so you can narrow down quickly.",
      hi: "Uttarakhand mein baraf ki choti, cheed ke jungle, nadiyan, jheelein aur pavitra shehar ek hi rajya mein hain. Mushkil hai chunna. Yeh guide mashhoor jagahon ko trip ke type ke hisaab se baantti hai taaki aap jaldi decide kar sakein.",
    },
    sections: [
      {
        heading: { en: "For lakes and easy hill-station time", hi: "Jheel aur aaram wale hill station ke liye" },
        paragraphs: [
          {
            en: "Nainital and its nearby lakes are popular for families who want gentle walks, boating and plenty of food options. Mussoorie plays a similar role in the Garhwal region, with views over the Doon valley.",
            hi: "Nainital aur uske aas-paas ki jheelein un parivaron mein popular hain jo halki walks, boating aur khaane ke bahut options chahte hain. Garhwal mein Mussoorie bhi aisi hi jagah hai, jahan se Doon valley ka nazara milta hai.",
          },
          {
            en: "These towns get crowded on weekends and holidays, so mid-week visits are calmer.",
            hi: "Weekend aur chhuttiyon mein yahan bheed hoti hai, isliye hafte ke beech mein jaana zyada shaant rehta hai.",
          },
        ],
      },
      {
        heading: { en: "For rivers, yoga and pilgrimage", hi: "Nadi, yoga aur teerth ke liye" },
        paragraphs: [
          {
            en: "Haridwar and Rishikesh sit where the Ganga leaves the mountains. Evening aarti, riverside cafes and yoga centres make them a good first stop, or a calm end to a longer trip.",
            hi: "Haridwar aur Rishikesh wahan hain jahan Ganga pahadon se bahar aati hai. Shaam ki aarti, nadi kinare ke cafe aur yoga centres inhe pehla padav ya lambi trip ka shaant ant bana dete hain.",
          },
          {
            en: "The Char Dham pilgrimage (Yamunotri, Gangotri, Kedarnath and Badrinath) needs advance planning. Registration through the official portal is required, and travel conditions can change quickly in the high mountains.",
            hi: "Char Dham yatra (Yamunotri, Gangotri, Kedarnath aur Badrinath) ke liye pehle se planning zaroori hai. Official portal par registration chahiye, aur ooncha pahadon mein halaat jaldi badal sakte hain.",
          },
        ],
      },
      {
        heading: { en: "For quiet, high-altitude scenery", hi: "Shaant, ooncha pahadi nazaron ke liye" },
        paragraphs: [
          {
            en: "Places such as Auli, Chopta and the Kumaon hill villages suit travellers who prefer quiet and views over shopping and crowds. Roads here are narrower and weather-dependent, so allow extra time.",
            hi: "Auli, Chopta aur Kumaon ke pahadi gaon un musafiron ke liye hain jo bheed aur shopping se zyada shaanti aur nazare pasand karte hain. Yahan sadkein sankri aur mausam par nirbhar hoti hain, isliye extra samay rakhein.",
          },
        ],
      },
      {
        heading: { en: "For wildlife", hi: "Wildlife ke liye" },
        paragraphs: [
          {
            en: "Jim Corbett National Park is among the best-known wildlife destinations in the state. Safari entry usually needs booking in advance, and parts of the park are closed during the monsoon.",
            hi: "Jim Corbett National Park rajya ki sabse mashhoor wildlife jagahon mein se hai. Safari ke liye aam taur par pehle se booking karni padti hai, aur monsoon mein park ke kuch hisse band rehte hain.",
          },
        ],
      },
      {
        heading: { en: "How to choose", hi: "Kaise chunein" },
        paragraphs: [
          {
            en: "Pick one or two bases rather than racing across the state. Hill roads are slower than the map suggests. If you tell us where you are starting from and how many days you have, we can tell you whether the route works for us and what vehicle suits it.",
            hi: "Poore rajya mein bhaagne ke bajay ek-do base chunein. Pahadi sadkein map se zyada samay leti hain. Aap kahan se shuru kar rahe hain aur kitne din hain, yeh batayein; hum bata denge ki route hamare liye possible hai ya nahi aur kaun si gaadi theek rahegi.",
          },
        ],
      },
    ],
  },
  {
    slug: "best-time-to-visit-uttarakhand-hill-stations",
    date: "2026-11-19",
    minutes: 4,
    image: "/images/innova.jpg",
    imagePosition: "50% 35%",
    imageAlt: {
      en: "Forest road in the Uttarakhand hills seen through tall trees",
      hi: "Uttarakhand ke pahadon mein ooncha pedon ke beech jungle ki sadak",
    },
    title: {
      en: "Best Time to Visit Uttarakhand's Hill Stations, Season by Season",
      hi: "Uttarakhand ke hill stations jaane ka best time, mausam ke hisaab se",
    },
    description: {
      en: "What each season in Uttarakhand feels like, what to expect on the roads, and how to plan around the monsoon.",
      hi: "Uttarakhand mein har mausam kaisa lagta hai, sadkon par kya expect karein, aur monsoon ke hisaab se plan kaise karein.",
    },
    intro: {
      en: "There is no single best month for Uttarakhand. It depends on whether you want snow, clear views, green valleys or quiet trails. Here is how the seasons generally behave in the hills.",
      hi: "Uttarakhand ke liye koi ek best mahina nahi hai. Yeh is par nirbhar hai ki aapko baraf chahiye, saaf nazare, hari ghatiyan ya shaant trails. Pahadon mein mausam aam taur par aise chalte hain.",
    },
    sections: [
      {
        heading: { en: "Spring and early summer (March to June)", hi: "Basant aur shuruaati garmi (March se June)" },
        paragraphs: [
          {
            en: "This is the most popular window. Days are pleasant, many higher routes open up, and the Char Dham shrines open for the season around late April or May. Expect more traffic and higher demand for vehicles, so book early.",
            hi: "Yeh sabse popular samay hai. Din sukhad rehte hain, kai ooncha raaste khul jaate hain, aur Char Dham ke mandir April ke ant ya May ke aas-paas khulte hain. Traffic zyada aur gaadiyon ki maang badh jaati hai, isliye pehle se book karein.",
          },
        ],
      },
      {
        heading: { en: "Monsoon (July to September)", hi: "Monsoon (July se September)" },
        paragraphs: [
          {
            en: "The hills turn intensely green, but heavy rain can cause landslides and road blockages. Plans may need to change at short notice. If you travel now, keep your schedule flexible, avoid late-evening drives and check road status before you start.",
            hi: "Pahad gehre hare ho jaate hain, lekin tez baarish se landslide aur sadak band hone ka khatra rehta hai. Plan achanak badalna pad sakta hai. Agar abhi jaa rahe hain to schedule flexible rakhein, der shaam ki driving se bachein aur nikalne se pehle road status check karein.",
          },
        ],
      },
      {
        heading: { en: "Autumn (October to November)", hi: "Patjhad (October se November)" },
        paragraphs: [
          {
            en: "Many people consider this the best season for clear skies and sharp mountain views. Mornings and evenings turn cold, so pack layers.",
            hi: "Bahut se log ise saaf aasman aur saaf pahadi nazaron ke liye sabse achha mausam maante hain. Subah-shaam thand badhti hai, isliye layers saath rakhein.",
          },
        ],
      },
      {
        heading: { en: "Winter (December to February)", hi: "Sardi (December se February)" },
        paragraphs: [
          {
            en: "Higher areas can receive snow, which is beautiful but can slow or close roads. Fog on the plains side can also delay travel. Winter suits travellers who are flexible and comfortable with cold.",
            hi: "Ooncha ilakon mein baraf pad sakti hai, jo sundar hoti hai lekin sadkein dheemi ya band kar sakti hai. Maidani hisse mein kohra bhi deri karata hai. Sardi un musafiron ke liye theek hai jo flexible hain aur thand se ghabraate nahi.",
          },
        ],
      },
      {
        heading: { en: "A note on timing", hi: "Samay par ek zaroori baat" },
        paragraphs: [
          {
            en: "Opening dates for shrines, parks and high-altitude trails change every year. Always confirm current dates from the official source before booking your trip.",
            hi: "Mandiron, parkon aur ooncha trails ke khulne ki tareekhein har saal badalti hain. Trip book karne se pehle official source se taaza tareekhein zaroor confirm karein.",
          },
        ],
      },
    ],
  },
  {
    slug: "travel-tips-for-families-visiting-uttarakhand",
    date: "2026-11-19",
    minutes: 4,
    image: "/images/gadiyan.jpg",
    imagePosition: "50% 38%",
    imageAlt: {
      en: "A WagonR and a Toyota Innova with luggage on the roof parked at a roadside stop",
      hi: "Sadak kinare ruki WagonR aur Innova, Innova ki chhat par saaman",
    },
    title: {
      en: "Travel Tips for Families Visiting Uttarakhand",
      hi: "Uttarakhand jaane wale parivaron ke liye travel tips",
    },
    description: {
      en: "Practical tips for a smooth hill trip with children and older family members: timing, breaks, luggage and health.",
      hi: "Bachchon aur bujurgon ke saath pahadi trip aasaan banane ke practical tips: timing, breaks, saaman aur sehat.",
    },
    intro: {
      en: "Hill journeys are slow, winding and beautiful. With a little preparation they are also comfortable for children and older relatives. These are the habits that make the biggest difference.",
      hi: "Pahadi safar dheemi, ghumavdaar aur sundar hota hai. Thodi taiyari ke saath yeh bachchon aur bujurgon ke liye bhi aaramdayak ho sakta hai. Yeh aadatein sabse zyada farak daalti hain.",
    },
    sections: [
      {
        heading: { en: "Start early, avoid night driving", hi: "Jaldi nikalein, raat ki driving se bachein" },
        paragraphs: [
          {
            en: "Leaving in the morning gives you daylight on the winding sections and time to rest on the way. Night driving on hill roads is tiring and offers no views. Plan your day so you reach your stop before dark.",
            hi: "Subah nikalne se ghumavdaar hisson mein roshni milti hai aur raaste mein aaram ka samay bhi. Pahadi sadkon par raat ki driving thakane wali hai aur nazare bhi nahi dikhte. Din aise plan karein ki andhera hone se pehle thikane par pahunch jaayein.",
          },
        ],
      },
      {
        heading: { en: "Prepare for motion sickness", hi: "Ulti ya chakkar ki taiyari" },
        paragraphs: [
          {
            en: "Winding roads upset many people, especially children. Have them sit near the front or by a window, avoid heavy meals before the drive, keep fresh air flowing and ask your doctor about suitable medicine. Ask the driver to stop whenever someone feels unwell.",
            hi: "Ghumavdaar sadkein bahut logon ko pareshan karti hain, khaaskar bachchon ko. Unhe aage ya khidki ke paas baithayein, driving se pehle bhaari khaana na khilayein, taazi hawa aane dein aur doctor se sahi dawa ke baare mein poochein. Kisi ko bura lage to driver se gaadi rukwayein.",
          },
        ],
      },
      {
        heading: { en: "Pack smart", hi: "Samajhdari se pack karein" },
        paragraphs: [
          {
            en: "Temperatures drop quickly after sunset, even in summer, so keep a warm layer within reach rather than buried in the luggage. Carry water, light snacks, wet wipes, a basic first-aid kit and any regular medicines in your hand bag. Mobile signal can be patchy, and ATMs are fewer in smaller towns, so carry some cash.",
            hi: "Garmi mein bhi sooraj dhalte hi taapmaan tezi se girta hai, isliye garam kapda saaman mein dabane ke bajay haath ke paas rakhein. Paani, halke snacks, wet wipes, basic first-aid kit aur apni niyamit dawaiyan haath ke bag mein rakhein. Network kabhi kam ho sakta hai aur chhote shehron mein ATM kam hote hain, isliye kuch cash saath rakhein.",
          },
        ],
      },
      {
        heading: { en: "Choose the right vehicle", hi: "Sahi gaadi chunein" },
        paragraphs: [
          {
            en: "Count your people and your bags honestly. A cramped vehicle makes a long hill drive much harder. When you book, tell us the group size and luggage so we can suggest a vehicle that is comfortable for everyone.",
            hi: "Apne logon aur bags ko imaandaari se gin lein. Tang gaadi lambi pahadi driving ko bahut mushkil bana deti hai. Booking ke waqt group ka size aur saaman batayein taaki hum sabke liye aaramdayak gaadi suggest kar sakein.",
          },
        ],
      },
      {
        heading: { en: "Leave room in the plan", hi: "Plan mein gunjaish rakhein" },
        paragraphs: [
          {
            en: "Roads can be slow because of weather, traffic or work on the road. A relaxed plan with one or two main stops per day is far more enjoyable than a packed one.",
            hi: "Mausam, traffic ya sadak ke kaam ki wajah se raaste dheemi ho sakte hain. Din mein ek-do mukhya padav wala aaramdayak plan, thoons-thoons kar bhare plan se kahin zyada maze ka hota hai.",
          },
        ],
      },
    ],
  },
  {
    slug: "how-to-book-a-taxi-for-your-uttarakhand-trip",
    date: "2026-11-19",
    minutes: 4,
    image: "/images/aura.jpg",
    imagePosition: "50% 60%",
    imageAlt: {
      en: "A white Hyundai Aura sedan on a green hill road",
      hi: "Hari pahadi sadak par safed Hyundai Aura sedan",
    },
    title: {
      en: "How to Book a Taxi for Your Uttarakhand Trip: A Simple Checklist",
      hi: "Uttarakhand trip ke liye taxi kaise book karein: Simple Checklist",
    },
    description: {
      en: "What to tell the operator, what to ask before you confirm, and how to avoid surprises when booking a taxi for a hill trip.",
      hi: "Operator ko kya batayein, confirm karne se pehle kya poochein, aur pahadi trip ke liye taxi book karte waqt surprise se kaise bachein.",
    },
    intro: {
      en: "Booking a taxi for the hills is easy once you know what to share and what to confirm. Use this checklist, whichever operator you choose.",
      hi: "Pahadon ke liye taxi book karna aasaan hai, bas pata hona chahiye ki kya batana hai aur kya confirm karna hai. Koi bhi operator chunein, yeh checklist use karein.",
    },
    sections: [
      {
        heading: { en: "What to tell the operator", hi: "Operator ko kya batayein" },
        paragraphs: [
          {
            en: "Share your pickup point, destination, travel dates, number of passengers and approximate luggage. Mention if you want a one-way drop or a round trip, and add your flight number if you are travelling to or from an airport.",
            hi: "Pickup point, destination, travel dates, kitne log aur lagbhag kitna saaman, yeh sab batayein. Bataiye ki one-way drop chahiye ya round trip, aur agar airport jaana-aana hai to flight number bhi dein.",
          },
        ],
      },
      {
        heading: { en: "What to confirm before you say yes", hi: "Haan kehne se pehle kya confirm karein" },
        paragraphs: [
          {
            en: "Ask which vehicle you will get, and whether the quoted rate is for the whole trip or per day. Ask clearly about toll, parking, state entry charges and any driver allowance for overnight stays, and whether these are included or extra. A clear answer now prevents a disagreement later.",
            hi: "Poochein ki kaun si gaadi milegi, aur bataya gaya rate poori trip ka hai ya per day. Toll, parking, state entry charges aur raat rukne par driver allowance ke baare mein saaf poochein ki yeh included hain ya alag. Abhi saaf jawab milna baad ke vivaad se bachata hai.",
          },
        ],
      },
      {
        heading: { en: "One-way or round trip?", hi: "One-way ya round trip?" },
        paragraphs: [
          {
            en: "A one-way drop suits you if you are continuing elsewhere. A round trip keeps the same vehicle and driver with you throughout, which is convenient when you want to explore several places from one base.",
            hi: "Agar aap aage kahin aur jaa rahe hain to one-way drop theek hai. Round trip mein poore samay wahi gaadi aur driver aapke saath rehta hai, jo tab kaam aata hai jab ek base se kai jagah ghoomni ho.",
          },
        ],
      },
      {
        heading: { en: "Before the day of travel", hi: "Safar ke din se pehle" },
        paragraphs: [
          {
            en: "Reconfirm the pickup time and place a day before. Ask for the driver's name and number. Check the weather and road status if you are heading into the higher mountains, and keep a little flexibility in your schedule.",
            hi: "Ek din pehle pickup ka samay aur jagah dobara confirm karein. Driver ka naam aur number maang lein. Agar aap ooncha pahadon ki taraf jaa rahe hain to mausam aur road status dekhein, aur schedule mein thodi gunjaish rakhein.",
          },
        ],
      },
      {
        heading: { en: "Booking with Maa Kothgadi Tour & Travels", hi: "Maa Kothgadi Tour & Travels se booking" },
        paragraphs: [
          {
            en: "Call or WhatsApp us with your trip details. We confirm availability, the vehicle and the rate with you directly before the trip. If we cannot cover your route, we will tell you straight away.",
            hi: "Apni trip ki details ke saath call ya WhatsApp karein. Hum availability, gaadi aur rate trip se pehle seedhe aapse confirm karte hain. Agar aapka route hum cover nahi kar sakte, to turant bata denge.",
          },
        ],
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
