import type { L } from "./config";

/** Every piece of interface text, in English and Hinglish (Hindi in Roman script). */
export const ui = {
  nav: {
    home: { en: "Home", hi: "Home" } as L,
    about: { en: "About", hi: "Hamare Baare Mein" } as L,
    services: { en: "Services", hi: "Services" } as L,
    vehicles: { en: "Vehicles", hi: "Gaadiyan" } as L,
    reviews: { en: "Reviews", hi: "Reviews" } as L,
    blog: { en: "Travel Blog", hi: "Travel Blog" } as L,
    contact: { en: "Contact", hi: "Contact" } as L,
    book: { en: "Book Now", hi: "Book Karein" } as L,
    menu: { en: "Open menu", hi: "Menu kholein" } as L,
    close: { en: "Close menu", hi: "Menu band karein" } as L,
    language: { en: "Language", hi: "Bhasha" } as L,
    skip: { en: "Skip to content", hi: "Content par jayein" } as L,
    main: { en: "Main navigation", hi: "Main navigation" } as L,
    breadcrumb: { en: "Breadcrumb", hi: "Breadcrumb" } as L,
  },
  cta: {
    bookRide: { en: "Book Your Ride", hi: "Apni Gaadi Book Karein" } as L,
    callNow: { en: "Call Now", hi: "Abhi Call Karein" } as L,
    whatsapp: { en: "WhatsApp Us", hi: "WhatsApp Karein" } as L,
    viewVehicles: { en: "See Our Vehicles", hi: "Gaadiyan Dekhein" } as L,
    viewServices: { en: "All Services", hi: "Saari Services" } as L,
    allVehicles: { en: "All Vehicles", hi: "Saari Gaadiyan" } as L,
    readMore: { en: "Read article", hi: "Article padhein" } as L,
    allArticles: { en: "All articles", hi: "Saare articles" } as L,
    bookThis: { en: "Book this vehicle", hi: "Yeh gaadi book karein" } as L,
    learnMore: { en: "Learn more", hi: "Aur jaanein" } as L,
    googleReview: { en: "Review us on Google", hi: "Google par review dein" } as L,
    callFloat: { en: "Call", hi: "Call" } as L,
  },
  home: {
    eyebrow: { en: "Taxi service in Nainital, Haldwani & Uttarakhand", hi: "Nainital, Haldwani aur Uttarakhand mein taxi" } as L,
    h1a: { en: "Travel the hills", hi: "Pahadon ka safar" } as L,
    h1b: { en: "in comfort.", hi: "aaram se." } as L,
    lead: {
      en: "Explore the beauty of Uttarakhand with comfortable and reliable travel services: clean cars, friendly drivers, and trips planned around you.",
      hi: "Uttarakhand ki khoobsurti explore karein hamari comfortable aur reliable travel services ke saath: saaf-suthri gaadiyan, bharosemand driver aur aapke hisaab se trip.",
    } as L,
    trust: {
      en: ["Clean, comfortable cars", "Friendly drivers", "Booking confirmed on call"],
      hi: ["Saaf-suthri gaadiyan", "Bharosemand driver", "Booking call par confirm"],
    },
    servicesEyebrow: { en: "What we offer", hi: "Hamari services" } as L,
    servicesTitle: { en: "Wherever you are headed, we go with you", hi: "Jahan jaana ho, hum saath hain" } as L,
    servicesLead: {
      en: "Simple, dependable ride options for every kind of trip.",
      hi: "Har tarah ke safar ke liye aasaan aur bharosemand ride options.",
    } as L,
    fleetEyebrow: { en: "Our vehicles", hi: "Hamari gaadiyan" } as L,
    fleetTitle: { en: "Real cars, real roads", hi: "Asli gaadiyan, asli sadkein" } as L,
    fleetLead: {
      en: "These are our actual vehicles, photographed on the roads we drive. Tell us your group size and we will suggest the right one.",
      hi: "Yeh hamari asli gaadiyan hain, un sadkon par li gayi tasveerein jin par hum chalte hain. Apne group ka size batayein, hum sahi gaadi suggest karenge.",
    } as L,
    whyEyebrow: { en: "Why travel with us", hi: "Hamare saath kyun" } as L,
    whyTitle: { en: "A calmer way to get around the hills", hi: "Pahadon mein safar ka aasaan tareeka" } as L,
    stepsEyebrow: { en: "How booking works", hi: "Booking kaise hoti hai" } as L,
    stepsTitle: { en: "Three simple steps", hi: "Bas teen aasaan steps" } as L,
    stepsLead: {
      en: "No app and no sign-up. Just tell us about your trip.",
      hi: "Na koi app, na sign-up. Bas apni trip ke baare mein bataiye.",
    } as L,
    blogEyebrow: { en: "Travel guides", hi: "Travel guides" } as L,
    blogTitle: { en: "Plan your trip before you pack", hi: "Packing se pehle trip plan karein" } as L,
    reviewsEyebrow: { en: "Customer reviews", hi: "Customer reviews" } as L,
    reviewsTitle: { en: "Travelled with us? Tell others", hi: "Hamare saath safar kiya? Auron ko bataiye" } as L,
    reviewsLead: {
      en: "We publish only real reviews, and only after checking them. Share yours so future travellers know what to expect.",
      hi: "Hum sirf asli reviews publish karte hain, wo bhi check karne ke baad. Apna review share karein taaki aage ke musafir jaan sakein.",
    } as L,
    reviewsCta: { en: "Rate your trip", hi: "Apni trip ko rate karein" } as L,
    ctaTitle: {
      en: "Planning Your Next Trip? Let's Make It Memorable!",
      hi: "Agli Trip Plan Kar Rahe Hain? Chaliye Safar Ko Yaadgaar Banate Hain!",
    } as L,
    ctaLead: {
      en: "Call or message us with your pickup, drop and date. We will confirm availability and rates with you directly.",
      hi: "Pickup, drop aur date ke saath call ya message karein. Availability aur rate hum seedhe aapse confirm karenge.",
    } as L,
  },
  why: [
    {
      icon: "sparkles",
      title: { en: "Clean, well-kept cars", hi: "Saaf-suthri gaadiyan" } as L,
      body: {
        en: "From compact hatchbacks to an Innova, every vehicle is kept ready for the road.",
        hi: "Chhoti hatchback se lekar Innova tak, har gaadi safar ke liye tayyar rakhi jaati hai.",
      } as L,
    },
    {
      icon: "steering",
      title: { en: "Careful, friendly drivers", hi: "Dhyan se chalane wale driver" } as L,
      body: {
        en: "Hill roads need patience. Our drivers drive carefully and keep the ride smooth.",
        hi: "Pahadi sadkon par dhairya chahiye. Hamare driver dhyan se aur aaram se gaadi chalate hain.",
      } as L,
    },
    {
      icon: "phone",
      title: { en: "Talk to a real person", hi: "Seedhi baat, asli insaan se" } as L,
      body: {
        en: "Call or WhatsApp us directly. Rates and availability are confirmed with you before the trip.",
        hi: "Seedha call ya WhatsApp karein. Trip se pehle rate aur availability aapse confirm hoti hai.",
      } as L,
    },
    {
      icon: "route",
      title: { en: "Trips planned around you", hi: "Aapke hisaab se trip" } as L,
      body: {
        en: "Choose your pickup, drop and timing. One-way, round trip, airport or local: we adjust to your plan.",
        hi: "Pickup, drop aur timing aap chunein. One-way, round trip, airport ya local: hum aapke plan ke hisaab se chalte hain.",
      } as L,
    },
  ],
  steps: [
    {
      title: { en: "Send your trip details", hi: "Trip ki details bhejein" } as L,
      body: {
        en: "Call, WhatsApp or fill the form: pickup, drop, date and number of passengers.",
        hi: "Call, WhatsApp ya form bharein: pickup, drop, date aur kitne log.",
      } as L,
    },
    {
      title: { en: "We confirm on call", hi: "Hum call par confirm karenge" } as L,
      body: {
        en: "We check availability, suggest a suitable vehicle and share the rate.",
        hi: "Hum availability dekhte hain, sahi gaadi suggest karte hain aur rate batate hain.",
      } as L,
    },
    {
      title: { en: "Enjoy the ride", hi: "Safar ka maza lein" } as L,
      body: {
        en: "Your driver arrives at the agreed time and place. Sit back and enjoy the hills.",
        hi: "Driver tay samay aur jagah par pahunchta hai. Aaram se baithiye aur pahadon ka maza lijiye.",
      } as L,
    },
  ],
  pages: {
    about: {
      title: { en: "About Maa Kothgadi Tour & Travels", hi: "Maa Kothgadi Tour & Travels ke baare mein" } as L,
      lead: {
        en: "A local travel service for people who want a safe, comfortable and honest ride in the hills.",
        hi: "Un logon ke liye local travel service jo pahadon mein surakshit, aaramdayak aur imaandaar safar chahte hain.",
      } as L,
    },
    services: {
      title: { en: "Our Taxi & Travel Services", hi: "Hamari Taxi aur Travel Services" } as L,
      lead: {
        en: "Outstation trips, airport transfers and local travel, booked with one phone call.",
        hi: "Outstation trips, airport pickup/drop aur local travel, bas ek phone call mein book.",
      } as L,
    },
    vehicles: {
      title: { en: "Our Vehicles", hi: "Hamari Gaadiyan" } as L,
      lead: {
        en: "Photographs of the vehicles we run. Seating and availability are confirmed when you book.",
        hi: "Hamari chalne wali gaadiyon ki tasveerein. Seating aur availability booking ke waqt confirm hoti hai.",
      } as L,
    },
    reviews: {
      title: { en: "Customer Reviews", hi: "Customer Reviews" } as L,
      lead: {
        en: "Honest feedback from people who have travelled with us. Every review is checked before it appears here.",
        hi: "Hamare saath safar karne walon ka sachcha feedback. Har review check hone ke baad hi yahan dikhta hai.",
      } as L,
    },
    contact: {
      title: { en: "Contact & Booking", hi: "Contact aur Booking" } as L,
      lead: {
        en: "Call, WhatsApp or send your trip details. We reply quickly and confirm everything with you.",
        hi: "Call, WhatsApp ya trip details bhejein. Hum jaldi jawab dete hain aur sab kuch aapse confirm karte hain.",
      } as L,
    },
    blog: {
      title: { en: "Uttarakhand Travel Blog", hi: "Uttarakhand Travel Blog" } as L,
      lead: {
        en: "Practical guides for planning a comfortable trip in the hills.",
        hi: "Pahadon mein aaramdayak trip plan karne ke liye kaam ki guides.",
      } as L,
    },
  },
  vehicle: {
    bestFor: { en: "Good for", hi: "Kiske liye theek" } as L,
    seating: {
      en: "Seating and luggage space are confirmed when you book.",
      hi: "Seating aur saaman ki jagah booking ke waqt confirm hoti hai.",
    } as L,
    helpTitle: { en: "Not sure which vehicle to pick?", hi: "Kaun si gaadi chunein, samajh nahi aa raha?" } as L,
    helpBody: {
      en: "Tell us how many people are travelling and how much luggage you have. We will suggest the right vehicle.",
      hi: "Batayein kitne log hain aur kitna saaman hai. Hum sahi gaadi suggest karenge.",
    } as L,
  },
  services: {
    includes: { en: "Good to know", hi: "Zaroori baatein" } as L,
    other: {
      en: "Looking for something else, such as a family trip or a tourist route? Call us. If we can arrange it, we will plan it with you, and if not, we will tell you honestly.",
      hi: "Kuch aur chahiye, jaise family trip ya tourist route? Call karein. Agar hum arrange kar sakte hain to aapke saath plan karenge, aur nahi kar sakte to saaf bata denge.",
    } as L,
  },
  about: {
    storyTitle: { en: "Who we are", hi: "Hum kaun hain" } as L,
    storyP1: {
      en: "Maa Kothgadi Tour & Travels is a taxi and travel service for outstation journeys, airport pickups and drops, and local travel. Our promise is simple: your journey, our responsibility.",
      hi: "Maa Kothgadi Tour & Travels ek taxi aur travel service hai: outstation safar, airport pickup/drop aur local travel ke liye. Hamara wada simple hai: safar aapka, bharosa hamara.",
    } as L,
    storyP2: {
      en: "We run our own vehicles, from a WagonR for small groups to a Toyota Innova for families, and we talk to every customer directly, so you always know who is taking you where.",
      hi: "Hum apni gaadiyan chalate hain, chhote group ke liye WagonR se lekar parivaar ke liye Toyota Innova tak, aur har customer se seedhi baat karte hain, taaki aapko pata rahe kaun aapko kahan le ja raha hai.",
    } as L,
    missionTitle: { en: "Our mission", hi: "Hamara maqsad" } as L,
    missionBody: {
      en: "To make travel in the hills feel easy: a clean car, a careful driver, a clear rate and a promise kept.",
      hi: "Pahadon ka safar aasaan banana: saaf gaadi, dhyan se chalane wala driver, saaf rate aur nibhaya hua wada.",
    } as L,
    valuesTitle: { en: "How we work", hi: "Hum kaise kaam karte hain" } as L,
    values: [
      {
        title: { en: "Comfort first", hi: "Pehle aaram" } as L,
        body: {
          en: "Hill journeys can be long. We keep vehicles clean and drive smoothly so you arrive fresh.",
          hi: "Pahadi safar lamba ho sakta hai. Hum gaadi saaf rakhte hain aur aaram se chalate hain taaki aap taro-taza pahunchein.",
        } as L,
      },
      {
        title: { en: "Clear communication", hi: "Saaf baat-cheet" } as L,
        body: {
          en: "Availability, vehicle and rate are agreed on the phone before your trip. No surprises.",
          hi: "Availability, gaadi aur rate trip se pehle phone par tay hote hain. Koi surprise nahi.",
        } as L,
      },
      {
        title: { en: "Care on the road", hi: "Sadak par savdhani" } as L,
        body: {
          en: "Mountain roads change with the weather. We drive for the conditions, not the clock.",
          hi: "Mausam ke saath pahadi sadkein badalti hain. Hum samay se zyada halaat dekhkar chalate hain.",
        } as L,
      },
    ],
    trustTitle: { en: "Why you can trust us", hi: "Aap bharosa kyun kar sakte hain" } as L,
    trustBody: {
      en: "We would rather tell you a trip is not possible than promise something we cannot deliver. You can see us on Instagram and Facebook, and every review shown on this site is checked and genuine.",
      hi: "Hum aisa wada nahi karte jo nibha na sakein. Aap hamein Instagram aur Facebook par dekh sakte hain, aur is site par dikhne wala har review check kiya hua aur asli hota hai.",
    } as L,
    followTitle: { en: "See us on social media", hi: "Social media par hamein dekhein" } as L,
  },
  contact: {
    callTitle: { en: "Call us", hi: "Call karein" } as L,
    callBody: { en: "Tap a number to call directly.", hi: "Seedha call karne ke liye number dabayein." } as L,
    waTitle: { en: "WhatsApp", hi: "WhatsApp" } as L,
    waBody: {
      en: "Send your trip details and we will reply with availability and rates.",
      hi: "Trip details bhejein, hum availability aur rate ke saath jawab denge.",
    } as L,
    socialTitle: { en: "Follow us", hi: "Hamein follow karein" } as L,
    areaTitle: { en: "Pickup & drop locations", hi: "Pickup aur drop ki jagah" } as L,
    areaBody: {
      en: "We confirm pickup and drop locations when you call. Tell us where you want to go and we will tell you honestly if we can take you.",
      hi: "Pickup aur drop ki jagah call par confirm hoti hai. Batayein kahan jaana hai, hum saaf bata denge ki le ja sakte hain ya nahi.",
    } as L,
    instagram: { en: "Instagram (business)", hi: "Instagram (business)" } as L,
    instagramOwner: { en: "Instagram (owner)", hi: "Instagram (owner)" } as L,
    facebook: { en: "Facebook", hi: "Facebook" } as L,
    bookTitle: { en: "Send your trip details", hi: "Trip ki details bhejein" } as L,
    bookBody: {
      en: "Fill this in and WhatsApp will open with your message ready to send. Rates and availability are confirmed with you on call or WhatsApp.",
      hi: "Yeh bharein, WhatsApp aapke message ke saath khul jayega, bas send karna hai. Rate aur availability call ya WhatsApp par confirm hogi.",
    } as L,
  },
  form: {
    name: { en: "Your name", hi: "Aapka naam" } as L,
    phone: { en: "Phone number", hi: "Phone number" } as L,
    tripType: { en: "Trip type", hi: "Trip ka type" } as L,
    date: { en: "Travel date", hi: "Travel date" } as L,
    pickup: { en: "Pickup location", hi: "Pickup location" } as L,
    drop: { en: "Drop location", hi: "Drop location" } as L,
    vehicle: { en: "Preferred vehicle", hi: "Pasand ki gaadi" } as L,
    passengers: { en: "Passengers", hi: "Kitne log" } as L,
    details: { en: "Anything else? (optional)", hi: "Kuch aur? (optional)" } as L,
    detailsPh: {
      en: "Return date, luggage, flight number, special requests",
      hi: "Return date, saaman, flight number, koi khaas request",
    } as L,
    choose: { en: "Choose…", hi: "Chunein…" } as L,
    anyVehicle: { en: "Any available vehicle", hi: "Jo bhi available ho" } as L,
    submit: { en: "Send on WhatsApp", hi: "WhatsApp par bhejein" } as L,
    note: {
      en: "WhatsApp will open with this message ready to send. Nothing is sent until you press send there.",
      hi: "WhatsApp is message ke saath khulega. Jab tak aap wahan send nahi dabate, kuch nahi bheja jata.",
    } as L,
    opened: {
      en: "WhatsApp opened in a new tab. Press send there to share your request.",
      hi: "WhatsApp naye tab mein khul gaya. Request bhejne ke liye wahan send dabayein.",
    } as L,
    required: { en: "This field is required.", hi: "Yeh field zaroori hai." } as L,
    phoneInvalid: { en: "Enter a valid phone number.", hi: "Sahi phone number daalein." } as L,
    dateInvalid: { en: "Choose today or a later date.", hi: "Aaj ya aage ki date chunein." } as L,
    trips: {
      en: ["Outstation, one way", "Outstation, round trip", "Airport pickup", "Airport drop", "Local travel"],
      hi: ["Outstation, one way", "Outstation, round trip", "Airport pickup", "Airport drop", "Local travel"],
    },
    pax: { en: ["1-2", "3-4", "5-6", "7 or more"], hi: ["1-2", "3-4", "5-6", "7 ya zyada"] },
    waIntro: {
      en: "Hello Maa Kothgadi Tour & Travels! I would like to book a ride.",
      hi: "Namaste Maa Kothgadi Tour & Travels! Mujhe gaadi book karni hai.",
    } as L,
    waLabels: {
      en: { name: "Name", phone: "Phone", trip: "Trip", date: "Date", pickup: "Pickup", drop: "Drop", vehicle: "Vehicle", pax: "Passengers", details: "Details" },
      hi: { name: "Naam", phone: "Phone", trip: "Trip", date: "Date", pickup: "Pickup", drop: "Drop", vehicle: "Gaadi", pax: "Kitne log", details: "Details" },
    },
  },
  reviews: {
    avgLabel: { en: "Average rating", hi: "Average rating" } as L,
    outOf: { en: "out of 5", hi: "mein se 5" } as L,
    countOne: { en: "1 approved review", hi: "1 approved review" } as L,
    countMany: { en: "approved reviews", hi: "approved reviews" } as L,
    emptyTitle: { en: "No reviews yet. Be the first!", hi: "Abhi koi review nahi. Sabse pehle aap dein!" } as L,
    emptyBody: {
      en: "We only show genuine, approved reviews, so no rating is shown until real customers have rated us.",
      hi: "Hum sirf asli, approved reviews dikhate hain, isliye jab tak asli customers rating nahi dete, koi rating nahi dikhai jaati.",
    } as L,
    formTitle: { en: "Share your experience", hi: "Apna experience share karein" } as L,
    formBody: {
      en: "Your review is checked by us before it is published.",
      hi: "Aapka review publish hone se pehle hum check karte hain.",
    } as L,
    rating: { en: "Your rating", hi: "Aapki rating" } as L,
    name: { en: "Your name", hi: "Aapka naam" } as L,
    namePh: { en: "How should we show your name?", hi: "Naam kaise dikhayein?" } as L,
    text: { en: "Your review", hi: "Aapka review" } as L,
    textPh: { en: "How was your trip?", hi: "Safar kaisa raha?" } as L,
    language: { en: "Review language", hi: "Review ki bhasha" } as L,
    langEn: { en: "English", hi: "English" } as L,
    langHi: { en: "Hinglish", hi: "Hinglish" } as L,
    consent: {
      en: "I agree that my name and review may be shown publicly on this website.",
      hi: "Main sahmat hoon ki mera naam aur review is website par public dikhaya jaye.",
    } as L,
    submit: { en: "Submit review", hi: "Review submit karein" } as L,
    submitting: { en: "Submitting…", hi: "Bhej rahe hain…" } as L,
    success: {
      en: "Thank you! Your review has been received and will appear once we approve it.",
      hi: "Shukriya! Aapka review mil gaya hai aur approve hone ke baad dikhega.",
    } as L,
    error: {
      en: "Could not submit your review. Please try again in a moment.",
      hi: "Review submit nahi ho paya. Thodi der baad dobara koshish karein.",
    } as L,
    unavailable: {
      en: "Reviews are not accepting submissions right now. Please try again later.",
      hi: "Abhi reviews nahi liye ja rahe. Kripya baad mein koshish karein.",
    } as L,
    vRating: { en: "Please choose a star rating.", hi: "Kripya star rating chunein." } as L,
    vName: { en: "Please enter your name (2 to 60 characters).", hi: "Apna naam daalein (2 se 60 akshar)." } as L,
    vText: { en: "Please write at least 10 characters.", hi: "Kam se kam 10 akshar likhein." } as L,
    vConsent: { en: "Please accept to continue.", hi: "Aage badhne ke liye sahmati dein." } as L,
    googleTitle: { en: "Also review us on Google", hi: "Google par bhi review dein" } as L,
    googleBody: {
      en: "Reviews on this site are separate from Google reviews. To help others find us on Google, you can leave a review there too.",
      hi: "Is site ke reviews Google reviews se alag hain. Agar aap chahte hain ki log hamein Google par bhi dekhein, to wahan bhi review de sakte hain.",
    } as L,
    googleSoon: {
      en: "Our Google review link will be added here soon.",
      hi: "Hamara Google review link jaldi yahan jod diya jayega.",
    } as L,
  },
  blog: {
    minutes: { en: "min read", hi: "min ka padhna" } as L,
    related: { en: "Keep reading", hi: "Aur padhein" } as L,
    verifyNote: {
      en: "Road conditions, timings and rules change. Check current information before you travel.",
      hi: "Sadak ke halaat, timings aur niyam badalte rehte hain. Safar se pehle taaza jaankari zaroor check karein.",
    } as L,
    ctaTitle: { en: "Need a ride for this trip?", hi: "Is trip ke liye gaadi chahiye?" } as L,
    ctaBody: {
      en: "Tell us your route and dates. We will confirm a vehicle and rate with you.",
      hi: "Apna route aur dates batayein. Hum gaadi aur rate aapse confirm karenge.",
    } as L,
  },
  routes: {
    eyebrow: { en: "Popular routes", hi: "Popular routes" } as L,
    title: { en: "Taxi in Nainital, Haldwani and Kathgodam", hi: "Nainital, Haldwani aur Kathgodam mein taxi" } as L,
    lead: {
      en: "Heading to Nainital, or coming back down to Haldwani? These are the routes people ask us about most. Need a nearby taxi? Just call and tell us where you are.",
      hi: "Nainital jaana hai, ya Haldwani wapas aana hai? Yeh woh routes hain jinke baare mein log sabse zyada poochte hain. Paas mein taxi chahiye? Bas call karke batayein aap kahan hain.",
    } as L,
    view: { en: "View route", hi: "Route dekhein" } as L,
    quick: { en: "At a glance", hi: "Ek nazar mein" } as L,
    book: { en: "Book this route", hi: "Yeh route book karein" } as L,
    faq: { en: "Frequently asked questions", hi: "Aksar poochhe jaane wale sawaal" } as L,
    other: { en: "Other routes", hi: "Aur routes" } as L,
    vehicles: { en: "Vehicles for this trip", hi: "Is trip ke liye gaadiyan" } as L,
    note: {
      en: "Rates, availability and travel time are confirmed with you before the trip.",
      hi: "Rate, availability aur safar ka samay trip se pehle aapse confirm kiye jaate hain.",
    } as L,
  },
  footer: {
    about: {
      en: "Taxi and travel service for outstation trips, airport transfers and local travel in Uttarakhand.",
      hi: "Uttarakhand mein outstation trips, airport transfer aur local travel ke liye taxi aur travel service.",
    } as L,
    explore: { en: "Explore", hi: "Explore" } as L,
    reach: { en: "Reach us", hi: "Sampark" } as L,
    routes: { en: "Popular routes", hi: "Popular routes" } as L,
    rights: { en: "All rights reserved.", hi: "Sabhi adhikar surakshit." } as L,
    tagline: { en: "Your journey, our responsibility.", hi: "Safar aapka, bharosa hamara." } as L,
  },
  notFound: {
    title: { en: "Page not found", hi: "Page nahi mila" } as L,
    body: {
      en: "That page does not exist. Let's get you back on the road.",
      hi: "Yeh page maujood nahi hai. Chaliye wapas sahi raaste par.",
    } as L,
    home: { en: "Back to home", hi: "Home par wapas" } as L,
  },
};
