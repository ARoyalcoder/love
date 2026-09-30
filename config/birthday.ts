export interface TimelineChapter {
  id: string;
  chapterNumber: string;
  title: string;
  subtitle: string;
  description: string;
  hindiQuote?: string;
  image: string;
  tag: string;
  yearHint: string;
}

export interface ScrapbookCard {
  id: string;
  title: string;
  hindiTitle?: string;
  dateStr: string;
  image: string;
  sticker: string;
  rotation: number;
  note: string;
  audioCaption?: string;
}

export interface OpenWhenLetter {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  color: string;
  message: string;
  hindiWhisper: string;
  signature: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Childhood" | "School" | "Village" | "Adventures" | "Funny Moments" | "Birthday" | "Friendship";
  image: string;
  caption: string;
  location: string;
  date: string;
}

export interface MapPoint {
  id: string;
  name: string;
  title: string;
  x: number; // percentage
  y: number; // percentage
  description: string;
  quote: string;
  badge: string;
}

export interface BirthdayConfig {
  birthdayGirl: {
    fullName: string;
    firstName: string;
    nickname: string;
  };
  sender: {
    fullName: string;
    firstName: string;
    relationship: string;
  };
  birthdayDate: string; // ISO format or YYYY-MM-DD
  theme: string;
  hero: {
    title: string;
    subtitle: string;
    tagline: string;
  };
  beforeWeGrewUp: {
    heading: string;
    subheading: string;
    quote: string;
    hindiVerse: string;
  };
  villageScene: {
    quote1: string;
    quote2: string;
    hindiLine: string;
  };
  thingsINeverSay: string[];
  movieSection: {
    title: string;
    tagline: string;
    director: string;
    chapters: Array<{
      title: string;
      subtitle: string;
      desc: string;
      poster: string;
    }>;
  };
  timelineChapters: TimelineChapter[];
  scrapbookCards: ScrapbookCard[];
  openWhenLetters: OpenWhenLetter[];
  galleryItems: GalleryItem[];
  mapPoints: MapPoint[];
  secretMessage: {
    teaser: string;
    message: string;
    closingWish: string;
    signOff: string;
  };
  finalScene: {
    lines: string[];
    closingWish: string;
    fromText: string;
    replayText: string;
  };
}

export const BIRTHDAY_CONFIG: BirthdayConfig = {
  birthdayGirl: {
    fullName: "Arti Singh",
    firstName: "Arti",
    nickname: "Aaru",
  },
  sender: {
    fullName: "Sakshi Singh",
    firstName: "Sakshi",
    relationship: "Your Best Friend Forever",
  },
  // Set to today's date so celebration mode is immediately active!
  birthdayDate: "2026-10-01",
  theme: "For Arti — A Journey From Childhood Memories to Forever Friendship",
  hero: {
    title: "Happy Birthday, Arti ❤️",
    subtitle:
      "Some friendships are not just memories… they become a part of who we are.",
    tagline: "A gift crafted with love from Sakshi Singh",
  },
  beforeWeGrewUp: {
    heading: "Before everything became complicated…",
    subheading: "There was a time when happiness was simple.",
    quote:
      "We didn't need smartphones, fancy cafes, or big plans. Just a dusty village road, one bicycle, a shared slate, and laughter that echoed across mustard fields.",
    hindiVerse:
      "“वो कच्चे रास्ते, वो नीम की छांव, और तेरी मेरी वो बेपरवाह हंसी… काश वो बचपन फिर से लौट आए।”",
  },
  villageScene: {
    quote1: "Maybe we didn't realize it then…",
    quote2: "…but those ordinary days were actually the most beautiful ones.",
    hindiLine: "“दोस्ती वो नहीं जो वक्त के साथ बदल जाए, दोस्ती तो वो है जो वक्त को भी मात दे दे।”",
  },
  thingsINeverSay: [
    "Thank you for being there when the whole world felt too loud.",
    "Thank you for all the laughter that made my stomach hurt.",
    "Thank you for understanding me even when I said absolutely nothing.",
    "Thank you for turning the most ordinary dusty days into golden memories.",
    "And thank you, Arti, for simply being you.",
  ],
  movieSection: {
    title: "Arti & Sakshi — The Story We Never Planned",
    tagline: "A tale of innocent childhood, endless laughter, and a bond that outgrew distance.",
    director: "Directed with pure love by Sakshi Singh",
    chapters: [
      {
        title: "Act I — Two Little Girls",
        subtitle: "Barefoot in the Village Dust",
        desc: "Where it all began. Chasing dragonflies along the mud paths, sharing raw mangoes under the banyan tree, and promising to be best friends until 100 years old.",
        poster: "/images/village-friends.jpg",
      },
      {
        title: "Act II — Beautiful Chaos",
        subtitle: "The Slate, The Chalk & The Classroom",
        desc: "School bells ringing, stealing bites from lunchboxes before the bell, giggling uncontrollably at the back bench, and fighting silly over broken pencils.",
        poster: "/images/school-classroom.jpg",
      },
      {
        title: "Act III — Growing Up Together",
        subtitle: "Sunset Talks by the River",
        desc: "From little girls with pigtails to young women sharing our deepest fears and whispered dreams as the sun melted into the river horizon.",
        poster: "/images/sunset-river.jpg",
      },
      {
        title: "Act IV — A Thousand Memories",
        subtitle: "Rain, Paper Boats & Starlight",
        desc: "Dancing in unannounced monsoon showers, floating origami boats, counting falling stars, and promising that whatever comes, we stand side by side.",
        poster: "/images/under-stars.jpg",
      },
      {
        title: "Act V — Still Us, Forever",
        subtitle: "Today & All The Tomorrows",
        desc: "Life changed, cities changed, schedules grew busy. But one phone call, one glance, and we are right back to those two carefree girls.",
        poster: "/images/birthday-embrace.jpg",
      },
    ],
  },
  timelineChapters: [
    {
      id: "ch-1",
      chapterNumber: "Chapter 01",
      title: "The Days We Didn't Know We Were Making Memories",
      subtitle: "The Hand Pump & The Earthen Courtyard",
      description:
        "Waking up to the rooster's call, racing to the vintage village hand pump, splashing icy water on each other, and laughing until our sides ached.",
      hindiQuote: "“जब खुशियों की कोई कीमत नहीं होती थी, बस तेरा साथ ही काफी था।”",
      image: "/images/village-childhood.jpg",
      tag: "Innocence",
      yearHint: "The Beginning",
    },
    {
      id: "ch-2",
      chapterNumber: "Chapter 02",
      title: "Those Endless Village Evenings",
      subtitle: "The Mango Grove Adventures",
      description:
        "Climbing up the branches of the ancient mango tree, hiding from everyone, eating sour green mango slices seasoned with salt and chili pepper.",
      hindiQuote: "“कच्चे आम का वो खट्टा-मीठा स्वाद और तेरी वो शरारती मुस्कान…”",
      image: "/images/mango-tree.jpg",
      tag: "Summer Days",
      yearHint: "Carefree Years",
    },
    {
      id: "ch-3",
      chapterNumber: "Chapter 03",
      title: "School Days & Silly Fights",
      subtitle: "Chapter 5 — Dosti",
      description:
        "Walking to school with matching canvas satchels. Pretending to be angry for ten minutes only to burst out laughing over a silly doodle in our Hindi notebook.",
      hindiQuote: "“कट्टी-बट्टी के वो दो मिनट, और फिर वही पुरानी दोस्ती।”",
      image: "/images/school-classroom.jpg",
      tag: "School Bells",
      yearHint: "Classroom Magic",
    },
    {
      id: "ch-4",
      chapterNumber: "Chapter 04",
      title: "Laughing About Things Nobody Else Understood",
      subtitle: "Hopscotch, Bicycles & Bougainvillea",
      description:
        "Drawing hopscotch squares with chalk on the village lane, double-riding the squeaky black bicycle, and sharing private jokes that no third person could ever decipher.",
      hindiQuote: "“वो हमारी सीक्रेट बातें जो सिर्फ हम दोनों को ही समझ आती थीं।”",
      image: "/images/childhood-games.jpg",
      tag: "Pure Joy",
      yearHint: "Golden Hours",
    },
    {
      id: "ch-5",
      chapterNumber: "Chapter 05",
      title: "Monsoon Showers & Paper Boats",
      subtitle: "Floating Dreams into the Horizon",
      description:
        "The scent of wet earth (mitti ki khushboo), sharing one leaky umbrella, watching our paper boats sail down the muddy stream, wondering where life would take us.",
      hindiQuote: "“बारिश की वो पहली बूंद और कागज़ की वो कश्तियां…”",
      image: "/images/monsoon-village.jpg",
      tag: "Monsoon",
      yearHint: "Dreaming Big",
    },
    {
      id: "ch-6",
      chapterNumber: "Chapter 06",
      title: "And Somehow… We Are Still Here",
      subtitle: "Under a Billion Stars",
      description:
        "Through every exam, every change, every triumph and heartbreak, we stayed anchored. Sitting under the quiet night sky, knowing our bond is once in a lifetime.",
      hindiQuote: "“चाहे कितनी भी दूरियां आ जाएं, तू हमेशा मेरे दिल के सबसे करीब रहेगी।”",
      image: "/images/under-stars.jpg",
      tag: "Forever",
      yearHint: "Always",
    },
  ],
  scrapbookCards: [
    {
      id: "sc-1",
      title: "That One Ridiculous Argument",
      hindiTitle: "वो हमारी फालतू की लड़ाई",
      dateStr: "Summer Afternoon",
      image: "/images/childhood-games.jpg",
      sticker: "🌸",
      rotation: -3,
      note: "We spent 2 hours arguing over who ate the last piece of dried raw mango, swore we'd never talk again, and then shared our lunch five minutes later.",
    },
    {
      id: "sc-2",
      title: "The Endless Laughing",
      hindiTitle: "बेवजह की हंसी",
      dateStr: "Every Single Day",
      image: "/images/village-friends.jpg",
      sticker: "✨",
      rotation: 2,
      note: "That uncontrollable laughter where tears roll down your cheeks and you can't even breathe, just because we made eye contact across the room.",
    },
    {
      id: "sc-3",
      title: "Our Secret Conversations",
      hindiTitle: "हमारी रात की फुसफुसाहटें",
      dateStr: "Midnight Whispers",
      image: "/images/under-stars.jpg",
      sticker: "🌙",
      rotation: -2,
      note: "Whispering our biggest secrets on the terrace under the stars, talking about who we'd become, promising we'd never drift apart.",
    },
    {
      id: "sc-4",
      title: "Those School Days",
      hindiTitle: "स्कूल के वो हसीन दिन",
      dateStr: "Standard 5 & 6",
      image: "/images/school-classroom.jpg",
      sticker: "📚",
      rotation: 3,
      note: "Passing folded chits with coded messages, helping each other during surprise tests, and pretending to pay attention to the blackboard.",
    },
    {
      id: "sc-5",
      title: "Running Around the Village",
      hindiTitle: "गाँव की वो पगडंडियां",
      dateStr: "Golden Hour",
      image: "/images/village-childhood.jpg",
      sticker: "🌾",
      rotation: -1,
      note: "Chasing after the ice-kulfi cart, racing across the earthen paths, and watching our long shadows race ahead of us in the setting sun.",
    },
    {
      id: "sc-6",
      title: "Sharing Little Dreams",
      hindiTitle: "छोटे-छोटे सपने",
      dateStr: "River Ghat Evenings",
      image: "/images/sunset-river.jpg",
      sticker: "🕊️",
      rotation: 2.5,
      note: "Dipping our bare feet into cool river water, dreaming of visiting big cities, but promising that our hearts would always belong right here together.",
    },
    {
      id: "sc-7",
      title: "Monsoon Shenanigans",
      hindiTitle: "सावन का पागलपन",
      dateStr: "July Rains",
      image: "/images/monsoon-village.jpg",
      sticker: "🌧️",
      rotation: -3.5,
      note: "Ditching our shoes to splash in every single mud puddle, building tiny earthen dams, and arriving home completely soaked with triumphant smiles.",
    },
    {
      id: "sc-8",
      title: "Celebrating YOU Today",
      hindiTitle: "आज का ये खास दिन",
      dateStr: "Arti's Special Day",
      image: "/images/birthday-embrace.jpg",
      sticker: "🎂",
      rotation: 1.5,
      note: "To my favorite human in the universe: Happy Birthday, Arti! You deserve all the stars, fairy lights, and endless happiness this world can hold.",
    },
  ],
  openWhenLetters: [
    {
      id: "env-1",
      title: "Open When You're Happy",
      subtitle: "For the moments your heart overflows",
      iconName: "Sun",
      color: "from-amber-100 to-rose-100 border-amber-300",
      message:
        "Aaru, whenever you are smiling, remember that your smile is contagious. Keep shining this brightly! I hope you pause for a second, take a deep breath, and soak in how wonderful life can be. And don't forget to call me and tell me all the details!",
      hindiWhisper: "“तेरी मुस्कान में ही मेरी दुनिया की सबसे प्यारी रोशनी है।”",
      signature: "Forever cheering for you, Sakshi",
    },
    {
      id: "env-2",
      title: "Open When You're Missing The Old Days",
      subtitle: "When nostalgia knocks on your door",
      iconName: "Clock",
      color: "from-peach-100 to-orange-100 border-orange-300",
      message:
        "Close your eyes, Arti. Feel that warm village breeze again. Remember the sound of our bicycle bell, the taste of raw mango, the squeak of that wooden bench. Those days aren't lost in the past — they live safely inside both of us forever.",
      hindiWhisper: "“वो बचपन भले ही बीत गया हो, पर वो अहसास हमेशा जिंदा रहेगा।”",
      signature: "Your partner-in-crime, Sakshi",
    },
    {
      id: "env-3",
      title: "Open When You Need A Laugh",
      subtitle: "Instant giggle medicine",
      iconName: "Smile",
      color: "from-yellow-100 to-pink-100 border-yellow-300",
      message:
        "Remember that time we tried to climb the neighbor's wall and got stuck, and instead of asking for help we just started laughing so hard we woke up every dog in the neighborhood? Yeah. We were absolute clowns. And you're still stuck with me!",
      hindiWhisper: "“जब भी उदास हो, याद कर लेना कि हम कितने पागल थे और हमेशा रहेंगे!”",
      signature: "Your clown friend, Sakshi",
    },
    {
      id: "env-4",
      title: "Open When Life Feels Difficult",
      subtitle: "A reminder of who you are",
      iconName: "HeartHandshake",
      color: "from-indigo-100 to-purple-100 border-indigo-300",
      message:
        "Arti, you are one of the strongest, kindest, most resilient girls I have ever known. Bad days do not define your journey. You are loved, you are worthy, and you will get through this. Whenever you feel alone, remember I am just a heartbeat away.",
      hindiWhisper: "“तू अकेले नहीं है। जब तक मैं हूँ, तुझे कभी अकेला नहीं पड़ने दूंगी।”",
      signature: "Always in your corner, Sakshi",
    },
    {
      id: "env-5",
      title: "Open When You Want To Remember Us",
      subtitle: "The unbreakable thread",
      iconName: "Sparkles",
      color: "from-rose-100 to-lavender-100 border-rose-300",
      message:
        "People come and go in this noisy world, but our friendship is carved into stone. No matter where career, marriage, or geography takes us, you will always be the girl who held my hand on that dusty village path. Happy Birthday, my dear Arti.",
      hindiWhisper: "“कुछ रिश्ते वक्त और फासलों से परे होते हैं। हमारा रिश्ता भी वैसा ही है।”",
      signature: "With all my love, Sakshi",
    },
  ],
  galleryItems: [
    {
      id: "gal-1",
      title: "Walking Down That Golden Village Road",
      category: "Village",
      image: "/images/village-friends.jpg",
      caption: "School bags swinging, barefoot laughter, and dusty golden sunsets.",
      location: "Our Village Road",
      date: "Golden Childhood",
    },
    {
      id: "gal-2",
      title: "The Hand Pump & Courtyard Talks",
      category: "Childhood",
      image: "/images/village-childhood.jpg",
      caption: "Charpai mornings and the sweet smell of morning chai.",
      location: "The Old Courtyard",
      date: "Sweet Mornings",
    },
    {
      id: "gal-3",
      title: "Bench Partners for Life",
      category: "School",
      image: "/images/school-classroom.jpg",
      caption: "Sharing slates, chalk dust on our uniforms, and whispers behind textbooks.",
      location: "Classroom 5B",
      date: "School Days",
    },
    {
      id: "gal-4",
      title: "The King of Mango Trees",
      category: "Adventures",
      image: "/images/mango-tree.jpg",
      caption: "Green mangoes, chili salt, and birds singing above us.",
      location: "Bada Bagh",
      date: "Summer Break",
    },
    {
      id: "gal-5",
      title: "Paper Boats & Monsoon Splashes",
      category: "Funny Moments",
      image: "/images/monsoon-village.jpg",
      caption: "Sailing paper ships down muddy streams under one yellow umbrella.",
      location: "Village Lane",
      date: "July Rains",
    },
    {
      id: "gal-6",
      title: "Hopscotch Champions",
      category: "Childhood",
      image: "/images/childhood-games.jpg",
      caption: "Chalk squares on the dirt path and bicycle bells ringing.",
      location: "Lane 4",
      date: "Evening Games",
    },
    {
      id: "gal-7",
      title: "Reflections at the Ghat",
      category: "Friendship",
      image: "/images/sunset-river.jpg",
      caption: "Watching the sun dip below the river while dreaming of the future.",
      location: "River Steps",
      date: "Dusk Evenings",
    },
    {
      id: "gal-8",
      title: "Under a Billion Stars",
      category: "Friendship",
      image: "/images/under-stars.jpg",
      caption: "Countless fireflies, milky way whispers, and lifelong promises.",
      location: "The Grassy Hill",
      date: "Starry Nights",
    },
    {
      id: "gal-9",
      title: "Celebrating My Favorite Girl",
      category: "Birthday",
      image: "/images/birthday-embrace.jpg",
      caption: "Happy tears, warm candlelight, and a birthday hug for Arti.",
      location: "Right Here, Right Now",
      date: "October 1st",
    },
  ],
  mapPoints: [
    {
      id: "pt-1",
      name: "Where We Met",
      title: "The Hand Pump & The Dusty Courtyard",
      x: 15,
      y: 75,
      description: "Two shy little girls with oiled braids who suddenly decided to become inseparable friends.",
      quote: "“The start of a bond written in the stars.”",
      badge: "Inception",
    },
    {
      id: "pt-2",
      name: "The School Days",
      title: "The Bench with Our Carved Names",
      x: 32,
      y: 40,
      description: "Where we learned Hindi, English, and the art of passing secret handwritten notes.",
      quote: "“Classroom memories that never fade.”",
      badge: "Schooling",
    },
    {
      id: "pt-3",
      name: "The Village Evenings",
      title: "The Ancient Mango Tree",
      x: 50,
      y: 65,
      description: "Our secret headquarters. Climbing branches, sharing snacks, and plotting our imaginary kingdoms.",
      quote: "“High up in the branches, safe from the world.”",
      badge: "Adventures",
    },
    {
      id: "pt-4",
      name: "Our Favorite Memories",
      title: "The River Ghat at Golden Hour",
      x: 68,
      y: 35,
      description: "The stone steps where we watched sunset reflections and whispered our hopes and fears.",
      quote: "“Where we grew from kids into young dreamers.”",
      badge: "Heart-to-Heart",
    },
    {
      id: "pt-5",
      name: "Where We Are Today",
      title: "The Birthday Celebration",
      x: 82,
      y: 60,
      description: "Celebrating Arti Singh — beautiful, radiant, and forever my dearest companion.",
      quote: "“Celebrating you, today and every single day.”",
      badge: "Today",
    },
    {
      id: "pt-6",
      name: "Wherever Life Takes Us Next",
      title: "Into the Infinite Horizon",
      x: 93,
      y: 25,
      description: "Different roads, different milestones, but always connected at the heart.",
      quote: "“Until we are 90 years old and still laughing together.”",
      badge: "Forever",
    },
  ],
  secretMessage: {
    teaser: "P.S. There is one more thing…",
    message: "No matter how much life changes, I hope we never become strangers.",
    closingWish: "Happy Birthday, Arti ❤️",
    signOff: "— Sakshi Singh",
  },
  finalScene: {
    lines: [
      "We grew up…",
      "We changed…",
      "We made countless memories…",
      "But some friendships simply stay.",
    ],
    closingWish: "Happy Birthday, Arti Singh ❤️",
    fromText: "With endless love, laughter, and countless memories… Sakshi Singh",
    replayText: "Replay Our Story ↺",
  },
};
