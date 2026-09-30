export interface TimelineChapter {
  id: string;
  chapterNumber: string;
  title: string;
  subtitle: string;
  description: string;
  hindiQuote?: string;
  bhojpuriQuote?: string;
  image: string;
  tag: string;
  yearHint: string;
}

export interface ScrapbookCard {
  id: string;
  title: string;
  bhojpuriTitle?: string;
  dateStr: string;
  image: string;
  sticker: string;
  rotation: number;
  note: string;
  bhojpuriNote?: string;
  isRealPhoto?: boolean;
}

export interface OpenWhenLetter {
  id: string;
  title: string;
  bhojpuriTitle: string;
  subtitle: string;
  iconName: string;
  color: string;
  message: string;
  bhojpuriWhisper: string;
  signature: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Childhood" | "School" | "Village" | "Adventures" | "Funny Moments" | "Birthday" | "Friendship" | "Real Memories";
  image: string;
  caption: string;
  bhojpuriCaption?: string;
  location: string;
  date: string;
  isReal?: boolean;
}

export interface MapPoint {
  id: string;
  name: string;
  title: string;
  x: number;
  y: number;
  description: string;
  quote: string;
  bhojpuriLine?: string;
  badge: string;
}

export interface BirthdayConfig {
  birthdayGirl: {
    fullName: string;
    firstName: string;
    nickname: string;
    bhojpuriCalling: string;
  };
  sender: {
    fullName: string;
    firstName: string;
    relationship: string;
  };
  birthdayDate: string;
  birthDate: string;
  age: number;
  milestoneTitle: string;
  bhojpuriMilestone: string;
  theme: string;
  hero: {
    title: string;
    bhojpuriWish: string;
    subtitle: string;
    tagline: string;
    milestoneBadge: string;
  };
  beforeWeGrewUp: {
    heading: string;
    subheading: string;
    quote: string;
    bhojpuriVerse: string;
  };
  villageScene: {
    quote1: string;
    quote2: string;
    bhojpuriLine: string;
  };
  thingsINeverSay: Array<{
    english: string;
    bhojpuri: string;
  }>;
  movieSection: {
    title: string;
    tagline: string;
    bhojpuriTagline: string;
    director: string;
    chapters: Array<{
      title: string;
      subtitle: string;
      desc: string;
      bhojpuriLine: string;
      poster: string;
    }>;
  };
  realMemories: {
    heading: string;
    bhojpuriHeading: string;
    subheading: string;
    photos: Array<{
      id: string;
      src: string;
      title: string;
      bhojpuriNote: string;
      caption: string;
    }>;
  };
  timelineChapters: TimelineChapter[];
  scrapbookCards: ScrapbookCard[];
  openWhenLetters: OpenWhenLetter[];
  galleryItems: GalleryItem[];
  mapPoints: MapPoint[];
  secretMessage: {
    teaser: string;
    bhojpuriTeaser: string;
    message: string;
    bhojpuriMessage: string;
    closingWish: string;
    signOff: string;
  };
  finalScene: {
    lines: string[];
    bhojpuriLines: string[];
    closingWish: string;
    bhojpuriClosing: string;
    fromText: string;
    replayText: string;
  };
}

export const BIRTHDAY_CONFIG: BirthdayConfig = {
  birthdayGirl: {
    fullName: "Arti Singh",
    firstName: "Arti",
    nickname: "Aaru",
    bhojpuriCalling: "हमार करेजा / हमार जिगरी",
  },
  sender: {
    fullName: "Sakshi Singh",
    firstName: "Sakshi",
    relationship: "तोहार सबसे खास सखी",
  },
  birthdayDate: "2026-10-01",
  birthDate: "2006-10-01",
  age: 20,
  milestoneTitle: "Celebrating 20 Glorious Years (01/10/2006 – 01/10/2026)",
  bhojpuriMilestone: "20वाँ जनमदिन — आज 20 साल के हो गइली हमार जान आरती! 🎂✨",
  theme: "For Arti — A Journey From Childhood Memories to Forever Friendship",
  hero: {
    title: "Happy 20th Birthday, Arti ❤️",
    bhojpuriWish: "हमार जान, हमार जिगरी सखी आरती के 20वाँ जनमदिन के ढ़ेरों बधाई आ प्यार! 🎂✨",
    subtitle:
      "20 years of sunshine, laughter, and a bond that grew stronger with every passing season.",
    tagline: "01 अक्टूबर 2006 से आज ले — साक्षी के तरफ से एगो अनमोल तोहफा",
    milestoneBadge: "✨ Turning 20 Today • Born 01/10/2006 ✨",
  },
  beforeWeGrewUp: {
    heading: "Before everything became complicated…",
    subheading: "There was a time when happiness was simple.",
    quote:
      "We didn't need smartphones, fancy cafes, or big plans. Just a dusty village road, one bicycle, a shared slate, and laughter that echoed across mustard fields.",
    bhojpuriVerse:
      "“याद बा उ दिन? जब हमनी दुन्नो बिना कवनो फिकर के गाँव के कच्चा रस्ता पर हँसत-दौड़त रहीं, आ बस एके गो ख्वाइश रहे कि साँझ कबहूँ ना होखे।”",
  },
  villageScene: {
    quote1: "Maybe we didn't realize it then…",
    quote2: "…but those ordinary days were actually the most beautiful ones.",
    bhojpuriLine:
      "“दुनिया जेतना भी बदल जाव आरती, बाकिर हमार आ तोहार बचपन के ई दोस्ती कबहूँ ना बदलि!”",
  },
  thingsINeverSay: [
    {
      english: "Thank you for being there when the whole world felt too loud.",
      bhojpuri: "जब दुनिया में बहुत शोर रहे, तब तोहार साथ हमरा के सबसे जादे सुकून दिहलस।",
    },
    {
      english: "Thank you for all the laughter that made my stomach hurt.",
      bhojpuri: "उ बेवजह के हँसी खातिर शुक्रिया, जवना में पेट दुखे लागत रहे बाकिर हँसी ना रुकति रहे।",
    },
    {
      english: "Thank you for understanding me even when I said absolutely nothing.",
      bhojpuri: "जब हम मुँह से कुछ ना बोलत रहीं, तबहुँ तू हमार आँख देख के सब बुझ जात रहलू।",
    },
    {
      english: "Thank you for turning the most ordinary dusty days into golden memories.",
      bhojpuri: "गाँव के उ साधारण धूर-माटी वाला दिनन के भी सोना जइसन यादगार बनावे खातिर शुक्रिया।",
    },
    {
      english: "And thank you, Arti, for simply being you.",
      bhojpuri: "आ सबसे बड़ बात आरती... तू जइसन बाड़ू, ओइसहीं रहे खातिर बहुत-बहुत प्यार!",
    },
  ],
  movieSection: {
    title: "Arti & Sakshi — The Story We Never Planned",
    tagline: "A tale of innocent childhood, endless laughter, and a bond that outgrew distance.",
    bhojpuriTagline: "दुगो गाँव के लइकी, एगो अटूट नाता, आ जिनगी भर के साथ!",
    director: "Directed with pure love by Sakshi Singh",
    chapters: [
      {
        title: "Act I — Two Little Girls",
        subtitle: "Barefoot in the Village Dust",
        desc: "Where it all began. Chasing dragonflies along the mud paths, sharing raw mangoes under the banyan tree, and promising to be best friends until 100 years old.",
        bhojpuriLine: "“धूर-माटी में खेलत-खेलत कब जिनगी के सबसे खास साथी बन गइनी, पतवे ना चलल।”",
        poster: "/images/village-friends.jpg",
      },
      {
        title: "Act II — Beautiful Chaos",
        subtitle: "The Slate, The Chalk & The Classroom",
        desc: "School bells ringing, stealing bites from lunchboxes before the bell, giggling uncontrollably at the back bench, and fighting silly over broken pencils.",
        bhojpuriLine: "“स्कूल के उ बस्ता, पेन्सिल खातिर लड़ाई, आ फिर टिफिन बांट के खाइब।”",
        poster: "/images/school-classroom.jpg",
      },
      {
        title: "Act III — Growing Up Together",
        subtitle: "Sunset Talks by the River",
        desc: "From little girls with pigtails to young women sharing our deepest fears and whispered dreams as the sun melted into the river horizon.",
        bhojpuriLine: "“नदी के तीरे बइठ के संझा के बेरा आपन मन के बात कहब।”",
        poster: "/images/sunset-river.jpg",
      },
      {
        title: "Act IV — A Thousand Memories",
        subtitle: "Rain, Paper Boats & Starlight",
        desc: "Dancing in unannounced monsoon showers, floating origami boats, counting falling stars, and promising that whatever comes, we stand side by side.",
        bhojpuriLine: "“सावन के पानी में कागज़ के नाव, आ छत पर बइठ के तारा गिनल।”",
        poster: "/images/under-stars.jpg",
      },
      {
        title: "Act V — Still Us, Forever",
        subtitle: "Today & All The Tomorrows",
        desc: "Life changed, cities changed, schedules grew busy. But one phone call, one glance, and we are right back to those two carefree girls.",
        bhojpuriLine: "“चाहे जेतना भी समय बीत जाव, हमनी दुन्नो आज भी उहे पुरनकी आरती-साक्षी हईं।”",
        poster: "/images/birthday-embrace.jpg",
      },
    ],
  },
  realMemories: {
    heading: "The Real Arti & Sakshi",
    bhojpuriHeading: "हमार असली यारी — दिल के सबसे करीब ❤️",
    subheading: "Not just stories or illustrations — this is US in real life, living our best moments.",
    photos: [
      {
        id: "real-1",
        src: "/images/arti-sakshi-real-1.jpg",
        title: "The Warmest Embrace (छत पर उ बेपरवाह हँसी)",
        bhojpuriNote: "“ई फोटो देख के दिल खुश हो जाला! जब तू अइसन गले लगावेलू न आरती, त लागत बा दुनिया के सब गम दूर हो गइल। तोहार ई हँसी जिनगी भर अइसहीं खिलत रहे!”",
        caption: "A candid moment of pure comfort, unconditional love, and friendship that needs no words.",
      },
      {
        id: "real-2",
        src: "/images/arti-sakshi-real-2.jpg",
        title: "Traditional Elegance (सजल-धजल हमनी दुन्नो)",
        bhojpuriNote: "“तनी देखऽ त हमनी के! केतना सुंदर लागत बानी जा। माथा पर बिंदिया, कान में झुमका, आ आँखिन में उहे बचपन के चमक। तू हमार सबसे सुंदर सखी हउवे!”",
        caption: "Dressed up in festive attire, two sisters at heart celebrating another beautiful chapter.",
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
      bhojpuriQuote: "“उ कल के ठंडा-ठंडा पानी आ हमनी के लइकई के शरारत... का दिन रहे उहो!”",
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
      bhojpuriQuote: "“गाछी में चढ़ के टिकोरा तोड़े के आ नून-मरचा लगा के खाए के मज़ा ही कुछ अउर रहे!”",
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
      bhojpuriQuote: "“पाँच मिनट के गुस्सा आ फिर एके गो समोसा में दुन्नो जन के समझौता!”",
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
      bhojpuriQuote: "“खित्ती-खित्ती खेलल आ साइकिल के पीछे बइठ के पूरा गाँव नाप दिहल!”",
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
      bhojpuriQuote: "“बरखा में भींजत कागज़ के नाव पानी में छोड़ब आ सोचल कि ई नाव कहाँ ले जाई।”",
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
      bhojpuriQuote: "“चाहे जमाना जेतना भी बदल जाव आरती, तू हमेशा हमार सबसे अजीज रहबू।”",
      image: "/images/under-stars.jpg",
      tag: "Forever",
      yearHint: "Always",
    },
  ],
  scrapbookCards: [
    {
      id: "sc-real-1",
      title: "Our Real Hug (हमर असली प्यार)",
      bhojpuriTitle: "छत पर खिंचाइल ई फोटो",
      dateStr: "Real Memories",
      image: "/images/arti-sakshi-real-1.jpg",
      sticker: "💖",
      rotation: -2,
      note: "Nothing beats our real bond. The way you hold me, laugh with me, and make every tough day lighter.",
      bhojpuriNote: "“आरती, ई फोटो हमार सबसे पसंदीदा बा। तोहार ई मुस्कान आ हमार ई भरोसा... भगवान नजर ना लगावे!”",
      isRealPhoto: true,
    },
    {
      id: "sc-real-2",
      title: "Festive Vibes (देसी सखियाँ)",
      bhojpuriTitle: "माथा पर बिंदी आ सजल रूप",
      dateStr: "Real Memories",
      image: "/images/arti-sakshi-real-2.jpg",
      sticker: "✨",
      rotation: 2.5,
      note: "Two best friends all dressed up in ethnic wear, smiling for the camera with pure happiness in our eyes.",
      bhojpuriNote: "“केतनो भी हमनी के देख लीं, मन ना भरेला! तोहार रूप आ तोहार मन दुन्नो एकदम हीरा जइसन बा।”",
      isRealPhoto: true,
    },
    {
      id: "sc-1",
      title: "That One Ridiculous Argument",
      bhojpuriTitle: "उ बेवजह के झगड़ा",
      dateStr: "Summer Afternoon",
      image: "/images/childhood-games.jpg",
      sticker: "🌸",
      rotation: -3,
      note: "We spent 2 hours arguing over who ate the last piece of dried raw mango, swore we'd never talk again, and then shared our lunch five minutes later.",
      bhojpuriNote: "“कट्टी कइला के दस मिनट बादे आके पूछत रहलू— 'अरे तनी सुन ना, खाना ना खइबू?'”",
    },
    {
      id: "sc-2",
      title: "The Endless Laughing",
      bhojpuriTitle: "पेट दुखे वाला हँसी",
      dateStr: "Every Single Day",
      image: "/images/village-friends.jpg",
      sticker: "✨",
      rotation: 1.5,
      note: "That uncontrollable laughter where tears roll down your cheeks and you can't even breathe, just because we made eye contact across the room.",
      bhojpuriNote: "“खाली एक बेर देख के मुसुकाइल आ ओकरा बाद क्लास में बिना बात के लोट-पोट हो गइल!”",
    },
    {
      id: "sc-3",
      title: "Our Secret Conversations",
      bhojpuriTitle: "रात के फुसफुसाहट",
      dateStr: "Midnight Whispers",
      image: "/images/under-stars.jpg",
      sticker: "🌙",
      rotation: -2,
      note: "Whispering our biggest secrets on the terrace under the stars, talking about who we'd become, promising we'd never drift apart.",
      bhojpuriNote: "“छत पर गद्दा बिछा के बइठल आ दुनिया जहान के गोटी लाल कइल!”",
    },
    {
      id: "sc-4",
      title: "Those School Days",
      bhojpuriTitle: "उ स्कूलिया बस्ता",
      dateStr: "Standard 5 & 6",
      image: "/images/school-classroom.jpg",
      sticker: "📚",
      rotation: 3,
      note: "Passing folded chits with coded messages, helping each other during surprise tests, and pretending to pay attention to the blackboard.",
      bhojpuriNote: "“कागज़ के पुरजा पर लिख के भेजल आ मैडम के देखला पर एकदम मासूम बन जाइल।”",
    },
    {
      id: "sc-5",
      title: "Running Around the Village",
      bhojpuriTitle: "गाँव के पगडंडी",
      dateStr: "Golden Hour",
      image: "/images/village-childhood.jpg",
      sticker: "🌾",
      rotation: -1,
      note: "Chasing after the ice-kulfi cart, racing across the earthen paths, and watching our long shadows race ahead of us in the setting sun.",
      bhojpuriNote: "“बर्फ वाला के घंटी सुन के पाँव बिना चप्पल के दौड़ पड़ल!”",
    },
    {
      id: "sc-6",
      title: "Sharing Little Dreams",
      bhojpuriTitle: "सपना बड़-बड़",
      dateStr: "River Ghat Evenings",
      image: "/images/sunset-river.jpg",
      sticker: "🕊️",
      rotation: 2.5,
      note: "Dipping our bare feet into cool river water, dreaming of visiting big cities, but promising that our hearts would always belong right here together.",
      bhojpuriNote: "“नदी में गोड़ डाल के पानी छपछपावल आ जिनगी के सपना बुनब।”",
    },
  ],
  openWhenLetters: [
    {
      id: "env-1",
      title: "Open When You're Happy",
      bhojpuriTitle: "जब तू बहुत खुश होखबू",
      subtitle: "For the moments your heart overflows",
      iconName: "Sun",
      color: "from-amber-100 to-rose-100 border-amber-300",
      message:
        "Aaru, whenever you are smiling, remember that your smile is contagious. Keep shining this brightly! I hope you pause for a second, take a deep breath, and soak in how wonderful life can be. And don't forget to call me and tell me all the details!",
      bhojpuriWhisper: "“तोहार हँसी देख के हमार कलेजा जुड़ा जाला आरती। अइसहीं हमेशा मुसुकाइत रहऽ!”",
      signature: "Forever cheering for you, Sakshi",
    },
    {
      id: "env-2",
      title: "Open When You're Missing The Old Days",
      bhojpuriTitle: "जब पुरान दिन के याद सतावे",
      subtitle: "When nostalgia knocks on your door",
      iconName: "Clock",
      color: "from-peach-100 to-orange-100 border-orange-300",
      message:
        "Close your eyes, Arti. Feel that warm village breeze again. Remember the sound of our bicycle bell, the taste of raw mango, the squeak of that wooden bench. Those days aren't lost in the past — they live safely inside both of us forever.",
      bhojpuriWhisper: "“आँख बंद करऽ आरती, उ गाँव के हवा आ हमनी के बचपन आज भी ओतने ताज़ा बा।”",
      signature: "Your partner-in-crime, Sakshi",
    },
    {
      id: "env-3",
      title: "Open When You Need A Laugh",
      bhojpuriTitle: "जब हँसे के मन करे",
      subtitle: "Instant giggle medicine",
      iconName: "Smile",
      color: "from-yellow-100 to-pink-100 border-yellow-300",
      message:
        "Remember that time we tried to climb the neighbor's wall and got stuck, and instead of asking for help we just started laughing so hard we woke up every dog in the neighborhood? Yeah. We were absolute clowns. And you're still stuck with me!",
      bhojpuriWhisper: "“याद बा न उ दीवार पर चढ़ के फँस गइल? कतना बड़का जोकर रहीं हमनी दुन्नो!”",
      signature: "Your clown friend, Sakshi",
    },
    {
      id: "env-4",
      title: "Open When Life Feels Difficult",
      bhojpuriTitle: "जब जिनगी भारी लागे",
      subtitle: "A reminder of who you are",
      iconName: "HeartHandshake",
      color: "from-indigo-100 to-purple-100 border-indigo-300",
      message:
        "Arti, you are one of the strongest, kindest, most resilient girls I have ever known. Bad days do not define your journey. You are loved, you are worthy, and you will get through this. Whenever you feel alone, remember I am just a heartbeat away.",
      bhojpuriWhisper: "“घबराहट मत करिहऽ, जब ले ई साक्षी जिन्दा बिया, तोहरा के कबो अकेले ना पड़े दी!”",
      signature: "Always in your corner, Sakshi",
    },
    {
      id: "env-5",
      title: "Open When You Want To Remember Us",
      bhojpuriTitle: "जब हमार याद आवे",
      subtitle: "The unbreakable thread",
      iconName: "Sparkles",
      color: "from-rose-100 to-lavender-100 border-rose-300",
      message:
        "People come and go in this noisy world, but our friendship is carved into stone. No matter where career, marriage, or geography takes us, you will always be the girl who held my hand on that dusty village path. Happy Birthday, my dear Arti.",
      bhojpuriWhisper: "“दुनिया के कवनो कोना में चल जाईं, बाकिर हमार दिल हमेशा तोहरे साथ रही आरती।”",
      signature: "With all my love, Sakshi",
    },
  ],
  galleryItems: [
    {
      id: "gal-real-1",
      title: "Our Real Smile & Unbreakable Hug",
      category: "Real Memories",
      image: "/images/arti-sakshi-real-1.jpg",
      caption: "Arti & Sakshi together in real life — laughter, embrace, and pure sisterhood under the open sky.",
      bhojpuriCaption: "“ई हऽ हमनी के असली रूप! जहवां कवनो बनावट नइखे, बस साँच प्यार बा।”",
      location: "Terrace Memories",
      date: "Forever Us",
      isReal: true,
    },
    {
      id: "gal-real-2",
      title: "Two Traditional Queens",
      category: "Real Memories",
      image: "/images/arti-sakshi-real-2.jpg",
      caption: "All dressed up with bindis and smiles — two childhood village girls who blossomed together.",
      bhojpuriCaption: "“सजल-धजल हमार आरती रानी! ई मुस्कान पर पूरा जहाँ कुर्बान बा।”",
      location: "Special Occasion",
      date: "Cherished Moments",
      isReal: true,
    },
    {
      id: "gal-1",
      title: "Walking Down That Golden Village Road",
      category: "Village",
      image: "/images/village-friends.jpg",
      caption: "School bags swinging, barefoot laughter, and dusty golden sunsets.",
      bhojpuriCaption: "“गाँव के पगडंडी पर साथे चलल...”",
      location: "Our Village Road",
      date: "Golden Childhood",
    },
    {
      id: "gal-2",
      title: "The Hand Pump & Courtyard Talks",
      category: "Childhood",
      image: "/images/village-childhood.jpg",
      caption: "Charpai mornings and the sweet smell of morning chai.",
      bhojpuriCaption: "“आंगन के चारपाई आ कल के ठंडा पानी।”",
      location: "The Old Courtyard",
      date: "Sweet Mornings",
    },
    {
      id: "gal-3",
      title: "Bench Partners for Life",
      category: "School",
      image: "/images/school-classroom.jpg",
      caption: "Sharing slates, chalk dust on our uniforms, and whispers behind textbooks.",
      bhojpuriCaption: "“स्कूल के उ बेंच जहाँ हमनी के दोस्ती पक्का भइल।”",
      location: "Classroom 5B",
      date: "School Days",
    },
    {
      id: "gal-4",
      title: "The King of Mango Trees",
      category: "Adventures",
      image: "/images/mango-tree.jpg",
      caption: "Green mangoes, chili salt, and birds singing above us.",
      bhojpuriCaption: "“आम के टिकोरा आ नून-मरचा।”",
      location: "Bada Bagh",
      date: "Summer Break",
    },
    {
      id: "gal-5",
      title: "Paper Boats & Monsoon Splashes",
      category: "Funny Moments",
      image: "/images/monsoon-village.jpg",
      caption: "Sailing paper ships down muddy streams under one yellow umbrella.",
      bhojpuriCaption: "“बरखा में कागज़ के कश्ती तैरावल।”",
      location: "Village Lane",
      date: "July Rains",
    },
    {
      id: "gal-6",
      title: "Hopscotch Champions",
      category: "Childhood",
      image: "/images/childhood-games.jpg",
      caption: "Chalk squares on the dirt path and bicycle bells ringing.",
      bhojpuriCaption: "“खित्ती-खित्ती खेलल आ साइकिल पर घूमे के मज़ा।”",
      location: "Lane 4",
      date: "Evening Games",
    },
    {
      id: "gal-7",
      title: "Reflections at the Ghat",
      category: "Friendship",
      image: "/images/sunset-river.jpg",
      caption: "Watching the sun dip below the river while dreaming of the future.",
      bhojpuriCaption: "“नदी के घाट पर संझा के गपशप।”",
      location: "River Steps",
      date: "Dusk Evenings",
    },
    {
      id: "gal-8",
      title: "Under a Billion Stars",
      category: "Friendship",
      image: "/images/under-stars.jpg",
      caption: "Countless fireflies, milky way whispers, and lifelong promises.",
      bhojpuriCaption: "“तारा के छांव में कइल वादा।”",
      location: "The Grassy Hill",
      date: "Starry Nights",
    },
    {
      id: "gal-9",
      title: "Celebrating My Favorite Girl",
      category: "Birthday",
      image: "/images/birthday-embrace.jpg",
      caption: "Happy tears, warm candlelight, and a birthday hug for Arti.",
      bhojpuriCaption: "“जनमदिन के उ खास मोमबत्ती आ हमार सखी।”",
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
      bhojpuriLine: "“जहवां से ई कहानी शुरू भइल रहे।”",
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
      bhojpuriLine: "“उ स्कूलिया दिन जब हर बात पर हँसी आवत रहे।”",
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
      bhojpuriLine: "“आम के गाछी जहाँ हमनी के राज चलत रहे।”",
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
      bhojpuriLine: "“घाट के सीढ़ी पर बइठल संझा के बेरा।”",
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
      bhojpuriLine: "“आज के ई खास दिन... खाली तोहरा नाम!”",
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
      bhojpuriLine: "“बुढ़ापा ले अइसहीं हाथ पकड़ के हँसत रहे के बा!”",
      badge: "Forever",
    },
  ],
  secretMessage: {
    teaser: "P.S. There is one more thing…",
    bhojpuriTeaser: "एगो बात अउर बा... जवन खाली तोहरे खातिर बा ❤️",
    message: "No matter how much life changes, I hope we never become strangers.",
    bhojpuriMessage:
      "“आरती, जिनगी में चाहे केतनो उतार-चढ़ाव आवे, चाहे हमनी केतनो दूर हो जाईं... ई साक्षी हमेशा तोहार साथ रही। तू खाली हमार सहेली ना हउवे, तू हमार करेजा हउवे!”",
    closingWish: "जनमदिन के ढ़ेरों प्यार आ दुआ, हमार जान आरती! 🎂❤️",
    signOff: "— तोहार अपनी साक्षी सिंह",
  },
  finalScene: {
    lines: [
      "We grew up…",
      "We changed…",
      "We made countless memories…",
      "But some friendships simply stay.",
    ],
    bhojpuriLines: [
      "हमनी बड़ भइनी...",
      "दिन बदलल, जमाना बदलल...",
      "हजारों गो याद बनल...",
      "बाकिर हमार आ तोहार दोस्ती आज भी ओइसहीं साँच बा।",
    ],
    closingWish: "Happy Birthday, Arti Singh ❤️",
    bhojpuriClosing: "जनमदिन के बहुत-बहुत बधाई हो हमार आरती! जियत रहऽ, मुसुकाइत रहऽ!",
    fromText: "With endless love, laughter, and countless memories… Sakshi Singh",
    replayText: "Replay Our Story (फिर से देखीं) ↺",
  },
};
