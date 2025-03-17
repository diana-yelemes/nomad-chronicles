import artists from "../assets/categories/artists.png";
import batyrs from "../assets/categories/batyrs.png";
import politicians from "../assets/categories/politicians.png";
import rulers from "../assets/categories/rulers.png";
import scientists from "../assets/categories/scientists.png";


import figure_1 from './a_abai.png'
import figure_2 from './a_aitekebi.jpg'
import figure_3 from './a_kazybekbi.jpg'
import figure_4 from './a_korqyt.jpg'
import figure_5 from './a_seyfullin.jpg'
import figure_6 from './a_tolebi.jpg'
import figure_7 from './a_zhansugurov.jpg'
import figure_8 from './b_bogenbay.jpg'
import figure_9 from './b_kabanbai.png'
import figure_10 from './b_nauryzbai.jpg'
import figure_11 from './b_otegen.jpg'
import figure_12 from './b_raiymbek.jpg'
import figure_13 from './p_dulatov.jpg'
import figure_14 from './p_konayev.jpg'
import figure_15 from './p_ryskulov.jpg'
import figure_16 from './p_shayakhmetov.jpg'
import figure_17 from './r_abylay.jpeg'
import figure_18 from './r_kasym.jpg'
import figure_19 from './r_kenesary.jpg'
import figure_20 from './r_kerey.jpg'
import figure_21 from './r_zhanibek.jpg'
import figure_22 from './s_altynsarin.jpg'
import figure_23 from './s_auezov.png'
import figure_24 from './s_baytursinuli.jpg'
import figure_25 from './s_satpayev.jpg'
import figure_26 from './s_valikhanov.jpg'

export const categories = [
    {
        name: "Artists",
        image: artists,
    },
    {
        name: "Batyrs",
        image: batyrs,
    },
    {
        name: "Politicians",
        image: politicians,
    },
    {
        name: "Rulers",
        image: rulers,
    },
    {
        name: "Scientists",
        image: scientists,
    },
];


// icons
import {
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaYoutube,
  } from "react-icons/fa6";


export const historyfigures = [
// Artists
{
    _id: "1",
    name: "Abai Qunanbayuli",
    image: figure_1,
    birthYear: 1845,
    deathYear: 1904,
    description: "A prominent Kazakh poet, composer, and philosopher.",
    category: "Artists",
    popular: false,
quiz: [
    { 
        question: "In which year was Abai Qunanbayuli born?", 
        options: [1845, 1850, 1860, 1835], 
        answer: 1845 
    },
    { 
        question: "What was Abai's birth name?", 
        options: ["Ibrahim", "Mukhtar", "Saken", "Alikhan"], 
        answer: "Ibrahim" 
    },
    { 
        question: "Which philosophical and literary work did Abai write?", 
        options: ["The Path of Abai", "Words of Edification", "Kazakh Epics", "Nomad"], 
        answer: "Words of Edification" 
    },
    { 
        question: "Which city is home to the Abai Museum dedicated to his legacy?", 
        options: ["Astana", "Semey", "Almaty", "Turkestan"], 
        answer: "Semey" 
    },
    { 
        question: "What foreign language did Abai learn that influenced his works?", 
        options: ["French", "Arabic", "Russian", "English"], 
        answer: "Russian" 
    },
    { 
        question: "Which famous Russian writers influenced Abai's works?", 
        options: [
            "Pushkin, Lermontov, and Tolstoy", 
            "Dostoevsky, Chekhov, and Gorky", 
            "Gogol, Bulgakov, and Nabokov", 
            "Turgenev, Yesenin, and Mayakovsky"
        ], 
        answer: "Pushkin, Lermontov, and Tolstoy" 
    },
    { 
        question: "What was Abai’s main goal in his writings?", 
        options: [
            "To entertain people", 
            "To spread religious teachings", 
            "To educate and enlighten the Kazakh people", 
            "To create a new political movement"
        ], 
        answer: "To educate and enlighten the Kazakh people" 
    },
    { 
        question: "Which genre of music did Abai contribute to?", 
        options: ["Symphony", "Dombra songs", "Opera", "Jazz"], 
        answer: "Dombra songs" 
    },
    { 
        question: "How did Abai contribute to the modernization of Kazakh literature?", 
        options: [
            "By writing only in Russian", 
            "By introducing European literary techniques and themes", 
            "By rejecting all foreign influences", 
            "By focusing only on traditional Kazakh storytelling"
        ], 
        answer: "By introducing European literary techniques and themes" 
    },
    { 
        question: "When did Abai Qunanbayuli pass away?", 
        options: [1904, 1910, 1898, 1920], 
        answer: 1904 
    }
] 
},
{
    _id: "2",
    name: "Aiteke Bi",
    image: figure_2,
    birthYear: 1644,
    deathYear: 1700,
    description: "A respected judge, orator, and one of the three Kazakh 'biys'.",
    category: "Artists",
    popular: false,
    quiz: [
    { 
        question: "In which year was Aiteke Bi born?", 
        options: [1644, 1650, 1665, 1635], 
        answer: 1644 
    },
    { 
        question: "Which zhuz did Aiteke Bi represent?", 
        options: ["Great Zhuz", "Middle Zhuz", "Small Zhuz", "All three Zhuzes"], 
        answer: "Small Zhuz" 
    },
    { 
        question: "Who was the ruler Aiteke Bi served as an adviser to?", 
        options: ["Abylai Khan", "Tauke Khan", "Kenessary Khan", "Yesim Khan"], 
        answer: "Tauke Khan" 
    },
    { 
        question: "Where did Aiteke Bi receive his education?", 
        options: ["Khan's Palace", "Ulugh Beg Madrasah", "Samarkand Academy", "Bukhara University"], 
        answer: "Ulugh Beg Madrasah" 
    },
    { 
        question: "What major legal code did Aiteke Bi contribute to?", 
        options: ["Great Steppe Code", "Zheti Zhargy", "Töre Bi Laws", "Golden Yasa"], 
        answer: "Zheti Zhargy" 
    },
    { 
        question: "What principle did Aiteke Bi oppose in traditional justice?", 
        options: [
            "Eye for an eye", 
            "Religious trials", 
            "Witness-based judgment", 
            "Adat customs"
        ], 
        answer: "Eye for an eye" 
    },
    { 
        question: "What was the function of the Council of Khans, where Aiteke Bi participated?", 
        options: [
            "To plan military campaigns", 
            "To select the next Khan", 
            "To discuss national unity and tribal disputes", 
            "To collect taxes"
        ], 
        answer: "To discuss national unity and tribal disputes" 
    },
    { 
        question: "Where is Aiteke Bi buried?", 
        options: ["Almaty, Kazakhstan", "Samarkand, Uzbekistan", "Navoi Region, Uzbekistan", "Turkistan, Kazakhstan"], 
        answer: "Navoi Region, Uzbekistan" 
    },
    { 
        question: "What was one of the key features of Kazakh customary law in Aiteke Bi’s time?", 
        options: [
            "Trials lasted for months", 
            "Decisions were made quickly", 
            "Only Khans could make judgments", 
            "No written records existed"
        ], 
        answer: "Decisions were made quickly" 
    },
    { 
        question: "What event took place in 2024 to honor Aiteke Bi’s legacy?", 
        options: [
            "His biography was published", 
            "His mausoleum was renovated", 
            "His 380th anniversary was commemorated", 
            "A statue of him was built in Almaty"
        ], 
        answer: "His 380th anniversary was commemorated" 
    }
] 
},
{
    _id: "3",
    name: "Kazybek Bi",
    image: figure_3,
    birthYear: 1667,
    deathYear: 1764,
    description: "A prominent Kazakh bi (judge) and diplomat known for his wisdom.",
    category: "Artists",
    popular: false,
   quiz: [
  {
    question: "In which year was Kazybek bi born?",
    options: ["1667", "1701", "1652", "1685"],
    answer: "1667"
  },
  {
    question: "What was Kazybek bi's main role in Kazakh society?",
    options: [
      "Military leader",
      "Spiritual leader",
      "Judge and diplomat",
      "Poet and historian"
    ],
    answer: "Judge and diplomat"
  },
  {
    question: "Which legal code did Kazybek bi help develop?",
    options: [
      "The Great Steppe Code",
      "Zheti Zhargy",
      "Golden Horde Laws",
      "Kazakh Imperial Edict"
    ],
    answer: "Zheti Zhargy"
  },
  {
    question: "Kazybek bi played a key role in the release of which Kazakh leader from Dzhungar captivity?",
    options: ["Tauke Khan", "Abylay Khan", "Abilmambet Khan", "Esim Khan"],
    answer: "Abylay Khan"
  },
  {
    question: "What title did Galdan Tseren give to Kazybek bi after their encounter?",
    options: [
      "Golden-Tongued Kazybek",
      "Kaz Dauysty Kazybek",
      "Iron-Willed Kazybek",
      "Wise Elder Kazybek"
    ],
    answer: "Kaz Dauysty Kazybek"
  },
  {
    question: "Which principle was NOT a part of the Zheti Zhargy legal code?",
    options: [
      "Customary practices (adat)",
      "Islamic law (sharia)",
      "European legal standards",
      "Laws on punishment and compensation"
    ],
    answer: "European legal standards"
  },
  {
    question: "Where is Kazybek bi buried?",
    options: [
      "Astana",
      "Almaty",
      "Turkistan",
      "Taraz"
    ],
    answer: "Turkistan"
  },
  {
    question: "Which famous bis did Kazybek bi collaborate with in governing the Kazakh zhuzes?",
    options: [
      "Tole bi and Aiteke bi",
      "Abylay Khan and Tauke Khan",
      "Galdan Tseren and Esim Khan",
      "Barak Khan and Kenesary Khan"
    ],
    answer: "Tole bi and Aiteke bi"
  },
  {
    question: "Kazybek bi advocated for the unity of Kazakhs under which khan?",
    options: [
      "Tauke Khan",
      "Abylay Khan",
      "Kenessary Khan",
      "Janibek Khan"
    ],
    answer: "Abylay Khan"
  },
  {
    question: "What was a notable characteristic of Kazybek bi's speeches?",
    options: [
      "They were long and complex.",
      "They were poetic and aphoristic.",
      "They were written rather than spoken.",
      "They focused only on military strategy."
    ],
    answer: "They were poetic and aphoristic."
  }
]
},
{
    _id: "4",
    name: "Korkyt Ata",
    image: figure_4,
    birthYear: 870,
    deathYear: 950,
    description: "A legendary poet and musician, the creator of the kobyz.",
    category: "Artists",
    popular: false,
    quiz: [
  {
    question: "Who was Korkyt Ata?",
    options: ["A famous warrior", "A legendary Turkic bard and composer", "A medieval scientist", "A ruler of the Kipchak tribes"],
    answer: "A legendary Turkic bard and composer"
  },
  {
    question: "What musical instrument is Korkyt Ata credited with creating?",
    options: ["Dombyra", "Kobyz", "Shankobyz", "Sazgen"],
    answer: "Kobyz"
  },
  {
    question: "What was Korkyt Ata searching for throughout his life?",
    options: ["Immortality", "Wealth and power", "A lost city", "A magical melody"],
    answer: "Immortality"
  },
  {
    question: "According to legend, how did Korkyt Ata discover his path to immortality?",
    options: ["By defeating death in battle", "By composing music on his kobyz", "By drinking from a magical spring", "By becoming a ruler"],
    answer: "By composing music on his kobyz"
  },
  {
    question: "Where was Korkyt Ata born?",
    options: ["The steppes along the Syr Darya River", "The Altai Mountains", "The Caspian Sea coast", "The Tien Shan Mountains"],
    answer: "The steppes along the Syr Darya River"
  },
  {
    question: "What is the meaning behind the legend of Korkyt Ata?",
    options: ["That true immortality is found in artistic legacy", "That music is only for entertainment", "That power is the key to eternal life", "That humans should avoid playing instruments"],
    answer: "That true immortality is found in artistic legacy"
  },
  {
    question: "What special monument was built in honor of Korkyt Ata in Kyzylorda?",
    options: ["A giant dombyra", "A kobyz-shaped memorial that produces sound in the wind", "A large statue of Korkyt Ata holding a scroll", "A library of his musical works"],
    answer: "A kobyz-shaped memorial that produces sound in the wind"
  },
  {
    question: "Which Kazakh university is named after Korkyt Ata?",
    options: ["Al-Farabi Kazakh National University", "Kyzylorda State University", "Nazarbayev University", "Eurasian National University"],
    answer: "Kyzylorda State University"
  },
  {
    question: "What annual festival is held in honor of Korkyt Ata’s legacy?",
    options: ["Turkic Music Celebration", "Kobyz and Dombyra Festival", "Music of Korkyt and the Great Steppe", "Steppe Poets Festival"],
    answer: "Music of Korkyt and the Great Steppe"
  },
  {
    question: "What does the name ‘Korkyt-Tube’ refer to?",
    options: ["A special type of musical note", "The mausoleum built at Korkyt Ata’s burial site", "A legendary steppe pathway", "A Kazakh poem dedicated to Korkyt Ata"],
    answer: "The mausoleum built at Korkyt Ata’s burial site"
  }
] 
},
{
    _id: "5",
    name: "Saken Seyfullin",
    image: figure_5,
    birthYear: 1894,
    deathYear: 1938,
    description: "A Kazakh writer and political figure.",
    category: "Artists",
    popular: false,
    quiz: [
  {
    question: "Who was Saken Seyfullin?",
    options: ["A Kazakh scientist", "A pioneer of modern Kazakh literature and national activist", "A Soviet military leader", "A famous Kazakh athlete"],
    answer: "A pioneer of modern Kazakh literature and national activist"
  },
  {
    question: "When and where was Saken Seyfullin born?",
    options: ["1894 in Almaty", "1894 in Karagandy Province", "1900 in Astana", "1889 in Omsk"],
    answer: "1894 in Karagandy Province"
  },
  {
    question: "Which cultural and educational society did Seyfullin help found in Omsk?",
    options: ["Zhas Tulpar", "Alash Orda", "Birlik (Unity)", "Aikap"],
    answer: "Birlik (Unity)"
  },
  {
    question: "What was the name of Seyfullin's first book of poetry, published in 1914?",
    options: ["Past Days", "Unrest", "On the Way of Happiness", "Now then, dzhigits!"],
    answer: "Past Days"
  },
  {
    question: "Which revolution did Seyfullin support and write a welcoming poem for?",
    options: ["The October Revolution", "The February Revolution", "The Kazakh Uprising", "The Industrial Revolution"],
    answer: "The February Revolution"
  },
  {
    question: "What happened to Seyfullin after the White Guard took power in Akmolinsk?",
    options: ["He was executed immediately", "He was arrested and sent to Petropavlovsk jail", "He fled to China", "He joined the Red Army"],
    answer: "He was arrested and sent to Petropavlovsk jail"
  },
  {
    question: "How did Saken Seyfullin escape imprisonment?",
    options: ["He was released by the Soviet government", "He was exchanged in a prisoner swap", "He broke out of Kolchak Prison", "He was pardoned by the White Guard"],
    answer: "He broke out of Kolchak Prison"
  },
  {
    question: "What was the significance of Seyfullin’s poem 'Now then, dzhigits!'?",
    options: ["It was the first work of Kazakh Soviet literature", "It was a traditional Kazakh folk song", "It criticized the Soviet regime", "It was a call for independence from Russia"],
    answer: "It was the first work of Kazakh Soviet literature"
  },
  {
    question: "How did Seyfullin die?",
    options: ["He was executed by the NKVD in 1939", "He died in exile", "He was killed in battle", "He died of natural causes"],
    answer: "He was executed by the NKVD in 1939"
  },
  {
    question: "How is Saken Seyfullin remembered today?",
    options: ["As a major contributor to Kazakh culture and literature", "As a forgotten Soviet leader", "As a controversial figure", "As a critic of Kazakh nationalism"],
    answer: "As a major contributor to Kazakh culture and literature"
  }
]
},
{
    _id: "6",
    name: "Tole Bi",
    image: figure_6,
    birthYear: 1663,
    deathYear: 1756,
    description: "A prominent bi and orator, known for his role in unifying the Kazakh people.",
    category: "Artists",
    popular: false,
    quiz: [
  {
    question: "When and where was Tole-bi born?",
    options: [
      "1663 in the modern Zhambyl region, near the River Shu",
      "1700 in Almaty",
      "1625 in Turkestan",
      "1689 in Tashkent"
    ],
    answer: "1663 in the modern Zhambyl region, near the River Shu"
  },
  {
    question: "What was Tole-bi’s role in Kazakh history?",
    options: [
      "A military general",
      "A philosopher, jurist, and diplomat",
      "A famous poet",
      "A religious leader"
    ],
    answer: "A philosopher, jurist, and diplomat"
  },
  {
    question: "What title was given to Tole-bi for his legal and governance work?",
    options: [
      "Khan of the Great Zhuz",
      "Father of biis",
      "Supreme Judge of Kazakhstan",
      "Commander of the Kazakh Army"
    ],
    answer: "Father of biis"
  },
  {
    question: "What major legal system did Tole-bi help create?",
    options: [
      "The Constitution of Kazakhstan",
      "The Seven Codes (Zheti Zhargy)",
      "The Steppe Laws",
      "The Kazakh-Russian Treaty"
    ],
    answer: "The Seven Codes (Zheti Zhargy)"
  },
  {
    question: "Which Kazakh Khan appointed Tole-bi to manage the Great Zhuz?",
    options: [
      "Tauke Khan",
      "Abylai Khan",
      "Ablai Khan",
      "Kenesary Khan"
    ],
    answer: "Tauke Khan"
  },
  {
    question: "What challenge did Tole-bi face during his lifetime?",
    options: [
      "The Mongol invasions",
      "The Russian Civil War",
      "Junggar aggression and threats to Kazakh survival",
      "The Ottoman expansion"
    ],
    answer: "Junggar aggression and threats to Kazakh survival"
  },
  {
    question: "In which year did Russian Empress Anna Ioanovna acknowledge Tole-bi as an influential person of the Great Zhuz?",
    options: [
      "1734",
      "1756",
      "1710",
      "1698"
    ],
    answer: "1734"
  },
  {
    question: "Where is Tole-bi buried?",
    options: [
      "Taraz",
      "Almaty",
      "Tashkent",
      "Astana"
    ],
    answer: "Tashkent"
  },
  {
    question: "What was Soviet historiography’s stance on biis like Tole-bi?",
    options: [
      "They were praised as national heroes",
      "They were considered negative figures due to their noble status",
      "They were ignored in historical records",
      "They were seen as military leaders"
    ],
    answer: "They were considered negative figures due to their noble status"
  },
  {
    question: "Why is Tole-bi still relevant today?",
    options: [
      "He was a famous poet",
      "He was a founder of modern Kazakhstan",
      "His legal and ethical principles still guide Kazakh society",
      "He led the Kazakh people to independence"
    ],
    answer: "His legal and ethical principles still guide Kazakh society"
  }
] 
},
{
    _id: "7",
    name: "Ilyas Zhansugurov",
    image: figure_7,
    birthYear: 1894,
    deathYear: 1938,
    description: "A  poet and a writer who contributed significantly to Kazakh literature.",
    category: "Artists",
    popular: false,
    quiz: [
  {
    question: "When and where was Ilyas Zhansugurov born?",
    options: [
      "May 14, 1894, in Aksusky district, Almaty region",
      "March 10, 1900, in Turkestan",
      "December 25, 1889, in Taraz",
      "July 1, 1895, in Semey"
    ],
    answer: "May 14, 1894, in Aksusky district, Almaty region"
  },
  {
    question: "Where did Ilyas Zhansugurov study to become a teacher?",
    options: [
      "Kazakh National University",
      "Tashkent courses for Kazakh and Kyrgyz youth",
      "Moscow State University",
      "Astana Pedagogical Institute"
    ],
    answer: "Tashkent courses for Kazakh and Kyrgyz youth"
  },
  {
    question: "What was Ilyas Zhansugurov’s role in education after his studies in Tashkent?",
    options: [
      "He became a history professor",
      "He worked as a teacher and director of the Kazakh-Kyrgyz institute",
      "He opened the first university in Kazakhstan",
      "He was a mathematics teacher in Almaty"
    ],
    answer: "He worked as a teacher and director of the Kazakh-Kyrgyz institute"
  },
  {
    question: "Which newspaper did Ilyas Zhansugurov work for after graduating from the Institute of Journalism in Moscow?",
    options: [
      "The Kazakh Worker (Еңбекші қазақ)",
      "The Steppe Herald",
      "The People's Voice",
      "Almaty Times"
    ],
    answer: "The Kazakh Worker (Еңбекші қазақ)"
  },
  {
    question: "What was the first film in which Ilyas Zhansugurov worked as a literary consultant?",
    options: [
      "The Kazakh Nomad",
      "The Steppe Bylina",
      "Golden Steppe",
      "The Road to Almaty"
    ],
    answer: "The Steppe Bylina"
  },
  {
    question: "Which organization did Ilyas Zhansugurov serve as chairman from 1932 to 1935?",
    options: [
      "Kazakh Academy of Sciences",
      "Writers' Union of Kazakhstan",
      "Kazakh National Theater",
      "Ministry of Education"
    ],
    answer: "Writers' Union of Kazakhstan"
  },
  {
    question: "What was Ilyas Zhansugurov’s last editorial role before his arrest?",
    options: [
      "Editor of the Kazakh literature magazine",
      "Editor of the department of poetry at the Kazakh publishing house of fiction",
      "Editor of The Kazakh Worker newspaper",
      "Editor of a political magazine in Moscow"
    ],
    answer: "Editor of the department of poetry at the Kazakh publishing house of fiction"
  },
  {
    question: "Which literary genres did Ilyas Zhansugurov write in?",
    options: [
      "Only poetry and novels",
      "Only plays and critiques",
      "Various genres, including poetry, novels, plays, and translations",
      "Only stories and musical reviews"
    ],
    answer: "Various genres, including poetry, novels, plays, and translations"
  },
  {
    question: "What was Ilyas Zhansugurov’s contribution to literary translation?",
    options: [
      "He translated Russian classics into Kazakh",
      "He translated Kazakh epics into Russian",
      "He translated English literature into Kazakh",
      "He focused only on original works and did not translate"
    ],
    answer: "He translated Russian classics into Kazakh"
  },
  {
    question: "What event was organized in 2019 to honor Ilyas Zhansugurov’s 125th anniversary?",
    options: [
      "A new film was made about his life",
      "A book exhibition was organized at 'Gylym Ordasy' central scientific library",
      "A statue was unveiled in Astana",
      "A poetry competition was held in his name"
    ],
    answer: "A book exhibition was organized at 'Gylym Ordasy' central scientific library"
  }
]
},

// Batyrs
{
    _id: "8",
    name: "Bogenbai Batyr",
    image: figure_8,
    birthYear: 1680,
    deathYear: 1778,
    description: "A famous Kazakh warrior and commander who defended his people from invasions.",
    category: "Batyrs",
    popular: false,
    quiz: [
  {
    question: "When was Bogenbai Batyr born?",
    options: ["1690", "1710", "1750", "1775"],
    answer: "1690"
  },
  {
    question: "Which khan’s era was Bogenbai Batyr a celebrated commander in?",
    options: ["Tauke Khan", "Abylai Khan", "Yesim Khan", "Kenesary Khan"],
    answer: "Abylai Khan"
  },
  {
    question: "Which major enemies did Bogenbai Batyr fight against?",
    options: ["Bashkirs", "Zonghars", "Khivins", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "What was Bogenbai Batyr’s father’s name?",
    options: ["Aldekun", "Akcha", "Bayau", "Taymasar"],
    answer: "Akcha"
  },
  {
    question: "What important battle did Bogenbai Batyr lead in 1710?",
    options: ["Battle of Anyrakay", "Battle in the Karakum Desert", "Battle of Talky", "Battle of Ayaguz"],
    answer: "Battle in the Karakum Desert"
  },
  {
    question: "What was the significance of Bogenbai Batyr’s single combat victory in 1712?",
    options: [
      "It increased his authority among Kazakh soldiers.",
      "It caused the Zonghars to retreat immediately.",
      "It led to a peace treaty between Kazakhs and Zonghars.",
      "It ended the war against the Zonghars."
    ],
    answer: "It increased his authority among Kazakh soldiers."
  },
  {
    question: "Which famous battle did Bogenbai Batyr participate in during 1729?",
    options: ["Battle of Anyrakay", "Battle of Sarayly", "Battle of Sauran", "Battle of Turkestan"],
    answer: "Battle of Anyrakay"
  },
  {
    question: "What special war tactic did Bogenbai Batyr use in the Battle of Anyrakay?",
    options: [
      "Ambushing the enemy at night",
      "Tricking the enemy into thinking the Kazakh forces were small",
      "Surrounding the enemy with cavalry from all sides",
      "Using long-range archery to weaken enemy forces"
    ],
    answer: "Tricking the enemy into thinking the Kazakh forces were small"
  },
  {
    question: "Who was Bogenbai Batyr’s main ally in the 1729 Battle of Anyrakay?",
    options: ["Tauke Khan", "Abylai Khan", "Kabanbay Batyr", "Yesim Khan"],
    answer: "Kabanbay Batyr"
  },
  {
    question: "Which major foreign force did Bogenbai Batyr defeat in 1756-1758?",
    options: ["Bashkirs", "Khivins", "Chinese army", "Russian army"],
    answer: "Chinese army"
  },
  {
    question: "What symbolized the peace agreement between Bogenbai Batyr and the Zonghars?",
    options: [
      "Signing of a treaty",
      "Exchange of gifts",
      "Zonghars slaughtering their horses and giving their heads to Kazakh generals",
      "Zonghars surrendering their weapons"
    ],
    answer: "Zonghars slaughtering their horses and giving their heads to Kazakh generals"
  },
  {
    question: "Why was Bogenbai Batyr stripped of his position under Khan Kaip?",
    options: [
      "He lost an important battle.",
      "Kaip Khan disliked him and rejected his proposals.",
      "He refused to fight in new battles.",
      "He sided with the Chinese in negotiations."
    ],
    answer: "Kaip Khan disliked him and rejected his proposals."
  },
  {
    question: "What military advancement did Bogenbai Batyr propose that was initially ridiculed?",
    options: [
      "Training soldiers to use guns and cast artillery",
      "Building stone fortresses for defense",
      "Using horses for cavalry instead of foot soldiers",
      "Creating a professional army with paid soldiers"
    ],
    answer: "Training soldiers to use guns and cast artillery"
  },
  {
    question: "Which Kazakh khan later reinstated Bogenbai Batyr and valued his counsel?",
    options: ["Tauke Khan", "Kaip Khan", "Abylai Khan", "Yesim Khan"],
    answer: "Abylai Khan"
  },
  {
    question: "What ultimately caused Bogenbai Batyr’s death?",
    options: ["A battle injury", "Old age", "Poisoning", "Execution by enemies"],
    answer: "Old age"
  }
] 
},
{
    _id: "9",
    name: "Kabanbai Batyr",
    image: figure_9,
    birthYear: 1691,
    deathYear: 1770,
    description: "A Kazakh batyr celebrated for his leadership in battles against external enemies.",
    category: "Batyrs",
    popular: false,
    quiz: [
  {
    question: "When was Kabanbay Batyr born?",
    options: ["1680", "1691", "1692", "1705"],
    answer: "1692"
  },
  {
    question: "Which major battle did Kabanbay Batyr participate in during 1718?",
    options: ["Battle of Ayagoz", "Battle of Anyrakay", "Battle of Bulantu-Belyu", "Battle of Baspan-Bazar"],
    answer: "Battle of Ayagoz"
  },
  {
    question: "What was the purpose of the Kazakh Assembly in Ordabasy in 1726?",
    options: [
      "To elect a new Khan",
      "To discuss the strategy against Jungars",
      "To divide the Kazakh lands",
      "To establish trade agreements with China"
    ],
    answer: "To discuss the strategy against Jungars"
  },
  {
    question: "Which rivers were involved in the Battle of Kalmakkirylgan in 1727?",
    options: ["Bulantu-Belyu Rivers", "Ili River", "Syr Darya", "Tobol River"],
    answer: "Bulantu-Belyu Rivers"
  },
  {
    question: "Which battle did Kabanbay Batyr command in 1729-1730?",
    options: ["Battle of Turkestan", "Battle of Anyrakay", "Battle of Shagan", "Battle of Tarbagatai"],
    answer: "Battle of Anyrakay"
  },
  {
    question: "Which agreement did Kabanbay Batyr take part in during 1757?",
    options: ["Kazakh-Chinese 'Aytangsyk' agreement", "Kazakh-Russian Treaty of Friendship", "Kazakh-Khivan Trade Agreement", "Kazakh-Kyrgyz Peace Treaty"],
    answer: "Kazakh-Chinese 'Aytangsyk' agreement"
  },
  {
    question: "What role did Kabanbay Batyr play in the late 1750s and 1760s?",
    options: [
      "He led military campaigns against the Russians",
      "He played a key role in Kazakh-Kyrgyz and Kazakh-Kokan relations",
      "He retired from military service",
      "He became a Khan of the Kazakh people"
    ],
    answer: "He played a key role in Kazakh-Kyrgyz and Kazakh-Kokan relations"
  },
  {
    question: "Which kin and tribe did Kabanbay Batyr belong to?",
    options: ["Argyn tribe of Middle Zhuz", "Karakerey kin, Naiman tribe of Middle Zhuz", "Dulat tribe of Senior Zhuz", "Kangly tribe of Junior Zhuz"],
    answer: "Karakerey kin, Naiman tribe of Middle Zhuz"
  },
  {
    question: "Who was Kabanbay Batyr’s father?",
    options: ["Bayzhigit", "Kozhakul", "Yessenbay", "Togas"],
    answer: "Kozhakul"
  },
  {
    question: "What event pushed Kabanbay Batyr into a path of heroism?",
    options: [
      "His father’s death by Jungars when he was seven",
      "His mother’s death due to famine",
      "His village’s destruction by Russian forces",
      "A prophecy from a Kazakh elder"
    ],
    answer: "His father’s death by Jungars when he was seven"
  },
  {
    question: "How did Kabanbay Batyr gain his name and reputation?",
    options: [
      "Winning a famous duel against a Jungar warrior",
      "Leading a raid to reclaim stolen horses from the Jungars",
      "Defeating the Russian army in a battle",
      "Saving Abylai Khan’s life in battle"
    ],
    answer: "Leading a raid to reclaim stolen horses from the Jungars"
  },
  {
    question: "What trade route did Kabanbay Batyr help establish?",
    options: [
      "The Silk Road",
      "Kazakh-Chinese trade route",
      "Kazakh-Russian fur trade route",
      "Kazakh-Khivan caravan route"
    ],
    answer: "Kazakh-Chinese trade route"
  },
  {
    question: "How many sons did Kabanbay Batyr have?",
    options: ["Four", "Five", "Six", "Seven"],
    answer: "Seven"
  },
  {
    question: "What was the historical song about Kabanbay Batyr called?",
    options: ["Kabanbay Batyr’s Song", "Kazakh’s Victory", "The Epic of Karakerey", "Song of the Steppes"],
    answer: "Kabanbay Batyr’s Song"
  },
  {
    question: "When did Kabanbay Batyr pass away?",
    options: ["1760", "1765", "1769", "1775"],
    answer: "1769"
  }
]
},
{
    _id: "10",
    name: "Nauryzbai Batyr",
    image: figure_10,
    birthYear: 1706,
    deathYear: 1781,
    description: "A Kazakh batyr known for his bravery and military skills.",
    category: "Batyrs",
    popular: false,
    quiz: [
  {
    question: "In which century did Nauryzbay Shaprashty live?",
    options: ["XVII century", "XVIII century", "XIX century", "XVI century"],
    answer: "XVIII century"
  },
  {
    question: "Which Khan did Nauryzbay serve as a commander?",
    options: ["Abylai Khan", "Kenesary Khan", "Tauke Khan", "Yesim Khan"],
    answer: "Abylai Khan"
  },
  {
    question: "What was Nauryzbay Shaprashty’s main role in the Kazakh military?",
    options: ["A diplomat", "A tumen (ten-thousandth army) commander", "A trader", "A poet"],
    answer: "A tumen (ten-thousandth army) commander"
  },
  {
    question: "Against whom did Nauryzbay Shaprashty fight most of his life?",
    options: ["Russians", "Qing Dynasty", "Dzungars", "Kyrgyz"],
    answer: "Dzungars"
  },
  {
    question: "Which battle made Nauryzbay widely famous across the Kazakh steppe?",
    options: ["Battle of Anyrakay", "Battle of Kaskelen", "Battle of Turkestan", "Battle of Ayagoz"],
    answer: "Battle of Kaskelen"
  },
  {
    question: "What was special about Nauryzbay’s horses?",
    options: ["They were given cow’s milk as foals", "They were gifted by Abylai Khan", "They were immortal", "They were stolen from the Dzungars"],
    answer: "They were given cow’s milk as foals"
  },
  {
    question: "What happened to Nauryzbay’s three brothers during the Dzungarian wars?",
    options: ["They were captured", "They became generals", "They were killed", "They fled to Russia"],
    answer: "They were killed"
  },
  {
    question: "Where was Nauryzbay born?",
    options: ["Turkestan", "Zhambyl district, Almaty region", "Semey", "Orenburg"],
    answer: "Zhambyl district, Almaty region"
  },
  {
    question: "What title did Nauryzbay earn after his victory over Kaskelen?",
    options: ["Biy", "Sardar", "Shaprashty Nauryzbay Batyr", "Khan"],
    answer: "Shaprashty Nauryzbay Batyr"
  },
  {
    question: "What was the name of the place renamed after Nauryzbay’s victory over the Dzungars?",
    options: ["Atyrau", "Ainakol", "Shymkent", "Taldykorgan"],
    answer: "Ainakol"
  }
]
},
{
    _id: "11",
    name: "Otegen Batyr",
    image: figure_11,
    birthYear: 1699,
    deathYear: 1773,
    description: "A legendary Kazakh warrior who fought valiantly to protect his people.",
    category: "Batyrs",
    popular: false,
    quiz: [
  {
    question: "At what age did Otegen Batyr start participating in wars against the Dzungars?",
    options: ["15", "18", "20", "25"],
    answer: "15"
  },
  {
    question: "Which tribe did Otegen Batyr belong to?",
    options: ["Argyn", "Dulat", "Naiman", "Kipchak"],
    answer: "Dulat"
  },
  {
    question: "In which year did Otegen Batyr fight alongside Tauasar and Raiymbek Khangeldy?",
    options: ["1710", "1723", "1735", "1750"],
    answer: "1723"
  },
  {
    question: "Which river's banks did Otegen Batyr help liberate in 1740?",
    options: ["Syr Darya", "Ili", "Ural", "Irtish"],
    answer: "Ili"
  },
  {
    question: "Who was Otegen Batyr's grandfather?",
    options: ["Tole Bi", "Suyunbay", "Syrymbet", "Kabanbai"],
    answer: "Syrymbet"
  },
  {
    question: "Which poet first sang about Otegen Batyr's heroism?",
    options: ["Zhambyl Zhabayev", "Suyunbay Akin Kusiene", "Abai Kunanbaev", "Tlemis Maykot"],
    answer: "Suyunbay Akin Kusiene"
  },
  {
    question: "Which region in Kazakhstan has land named after Otegen Batyr?",
    options: ["Mangystau", "Almaty", "Atyrau", "Kostanay"],
    answer: "Almaty"
  },
  {
    question: "What did Otegen Batyr oppose in 1756?",
    options: ["Abylai Khan's policy of ceasefire with China", "Kazakh unification", "Dzungar expansion", "The rule of Khan Kenesary"],
    answer: "Abylai Khan's policy of ceasefire with China"
  },
  {
    question: "How many sons did Otegen Batyr's father lose to the plague?",
    options: ["5", "8", "10", "12"],
    answer: "12"
  },
  {
    question: "Which historical figure documented information about Otegen Batyr?",
    options: ["E. Ismailov", "K. Turganbaev", "S. Begalin", "All of the above"],
    answer: "All of the above"
  }
] 
},
{
    _id: "12",
    name: "Raiymbek Batyr",
    image: figure_12,
    birthYear: 1705,
    deathYear: 1785,
    description: "A Kazakh batyr who is remembered for his courage and leadership in battle.",
    category: "Batyrs",
    popular: false,
    quiz: [
  {
    question: "In which century did Rayimbek Batyr live?",
    options: ["XVII century", "XVIII century", "XIX century", "XVI century"],
    answer: "XVIII century"
  },
  {
    question: "Rayimbek Batyr was a commander under which Kazakh khan?",
    options: ["Tauke Khan", "Abylai Khan", "Kenesary Khan", "Zhanibek Khan"],
    answer: "Abylai Khan"
  },
  {
    question: "What major conflict did Rayimbek Batyr participate in?",
    options: ["Kazakh-Kalmyk Wars", "Kazakh-Dzungarian Wars", "Kazakh-Russian Wars", "Kazakh-Mongol Wars"],
    answer: "Kazakh-Dzungarian Wars"
  },
  {
    question: "Which region did Rayimbek Batyr help liberate from the Dzungars?",
    options: ["Mangystau", "Turkestan", "Zhetysu", "Semirechye"],
    answer: "Zhetysu"
  },
  {
    question: "Rayimbek Batyr was recognized as a saint during his lifetime. What term was used to describe him?",
    options: ["Biy", "Shaman", "Aulie", "Tore"],
    answer: "Aulie"
  },
  {
    question: "What legendary action did Rayimbek perform as a child?",
    options: ["Tamed a wild horse", "Bit off the head of a snake", "Defeated a Dzungar warrior", "Crossed the Ili River alone"],
    answer: "Bit off the head of a snake"
  },
  {
    question: "What was the name of Rayimbek Batyr’s legendary horse?",
    options: ["Baibars", "Tulpar", "Kokoinak", "Batyr"],
    answer: "Kokoinak"
  },
  {
    question: "Which battle contributed significantly to the defeat of the Dzungars?",
    options: ["Battle of Anyrakay", "Battle of Talas", "Battle of Otrar", "Battle of Saryarka"],
    answer: "Battle of Anyrakay"
  },
  {
    question: "Rayimbek Batyr belonged to which Kazakh tribal division?",
    options: ["Argyn", "Naiman", "Alban", "Kipchak"],
    answer: "Alban"
  },
  {
    question: "What river did Rayimbek successfully lead soldiers across, according to legend?",
    options: ["Syr Darya", "Ural", "Ili", "Irtish"],
    answer: "Ili"
  }
] 
},

// Politicians
{
    _id: "13",
    name: "Mirzhakyp Dulatov",
    image: figure_13,
    birthYear: 1885,
    deathYear: 1935,
    description: "A Kazakh writer, public figure, and a prominent advocate for independence.",
    category: "Politicians",
    popular: true,
    quiz: [
  {
    question: "Where and when was Mirzhakyp Dulatov born?",
    options: [
      "In Almaty, 1885",
      "In Omsk, 1887",
      "In Turgai district (now Kostanay region), 1885",
      "In Semipalatinsk, 1890"
    ],
    answer: "In Turgai district (now Kostanay region), 1885"
  },
  {
    question: "Which book by Mirzhakyp Dulatov had a strong impact on Kazakh readers and was confiscated by tsarist authorities?",
    options: [
      "Bakytsyz Zhamal",
      "Oyan, Kazakh!",
      "Ak Zhol",
      "Kazakh"
    ],
    answer: "Oyan, Kazakh!"
  },
  {
    question: "What was Mirzhakyp Dulatov’s profession after completing his education?",
    options: [
      "Lawyer",
      "Teacher",
      "Journalist",
      "Politician"
    ],
    answer: "Teacher"
  },
  {
    question: "Which prominent Kazakh intellectual did Mirzhakyp Dulatov meet in Omsk in 1904?",
    options: [
      "Ybyray Altynsarin",
      "Alikhan Bokeikhan",
      "Akhmet Baitursynuli",
      "Shokan Ualikhanov"
    ],
    answer: "Akhmet Baitursynuli"
  },
  {
    question: "In which city did Mirzhakyp Dulatov publish his first novel, 'Bakytsyz Zhamal'?",
    options: [
      "Tashkent",
      "Omsk",
      "Kazan",
      "Orenburg"
    ],
    answer: "Kazan"
  },
  {
    question: "What was the main goal of the newspaper 'Kazakh' that Mirzhakyp Dulatov helped establish?",
    options: [
      "To spread communist ideas",
      "To entertain readers with fiction",
      "To educate and raise national awareness",
      "To focus on international news"
    ],
    answer: "To educate and raise national awareness"
  },
  {
    question: "Which political movement did Mirzhakyp Dulatov actively support?",
    options: [
      "The Alash movement",
      "The Bolshevik Party",
      "The Mensheviks",
      "The Decembrists"
    ],
    answer: "The Alash movement"
  },
  {
    question: "Where was Mirzhakyp Dulatov imprisoned before his death?",
    options: [
      "Omsk Prison",
      "Solovetsky Camp",
      "Almaty Prison",
      "Semipalatinsk Detention Center"
    ],
    answer: "Solovetsky Camp"
  },
  {
    question: "What did Mirzhakyp Dulatov refuse to do while imprisoned in Solovetsky Camp?",
    options: [
      "Confess to crimes he didn’t commit",
      "Join the Communist Party",
      "Escape to France",
      "Write propaganda for the Soviet government"
    ],
    answer: "Escape to France"
  },
  {
    question: "When was Mirzhakyp Dulatov posthumously rehabilitated?",
    options: [
      "1956",
      "1968",
      "1988",
      "1991"
    ],
    answer: "1988"
  }
] 
},
{
    _id: "14",
    name: "Dinmukhamed Konayev",
    image: figure_14,
    birthYear: 1912,
    deathYear: 1993,
    description: "A Soviet-era politician, the First Secretary of the Communist Party of Kazakhstan.",
    category: "Politicians",
    popular: true,
    quiz: [
  {
    question: "When was Dinmukhamed Akhmedovich Kunaev born?",
    options: ["January 12, 1912", "March 5, 1915", "December 25, 1910", "August 22, 1913"],
    answer: "January 12, 1912"
  },
  {
    question: "In which city was Dinmukhamed Kunaev born?",
    options: ["Astana", "Shymkent", "Verny (now Almaty)", "Semey"],
    answer: "Verny (now Almaty)"
  },
  {
    question: "What was Dinmukhamed Kunaev's field of scientific expertise?",
    options: ["Medicine", "Law", "Technical Sciences", "Economics"],
    answer: "Technical Sciences"
  },
  {
    question: "Which academic title did Kunaev obtain in 1969?",
    options: ["Doctor of Philosophy", "Doctor of Technical Sciences", "Doctor of Economic Sciences", "Doctor of Historical Sciences"],
    answer: "Doctor of Technical Sciences"
  },
  {
    question: "How many times was Kunaev awarded the title Hero of Socialist Labor?",
    options: ["Once", "Twice", "Three times", "Four times"],
    answer: "Three times"
  },
  {
    question: "In which year did Kunaev become an Academician of the Academy of Sciences of Kazakhstan?",
    options: ["1952", "1960", "1945", "1975"],
    answer: "1952"
  },
  {
    question: "Which institute did Kunaev graduate from in 1936?",
    options: [
      "Al-Farabi Kazakh National University",
      "Moscow Institute of Non-Ferrous Metals and Gold",
      "Leningrad Mining Institute",
      "Moscow State University"
    ],
    answer: "Moscow Institute of Non-Ferrous Metals and Gold"
  },
  {
    question: "Who had a significant influence on Kunaev’s personality formation?",
    options: ["Mukhamedzhan Tynyshpayev", "Orazaly Dzhandosov", "Akhmet Baitursynov", "Kanysh Satpayev"],
    answer: "Mukhamedzhan Tynyshpayev"
  },
  {
    question: "What major historical event affected Kunaev’s student years in Moscow?",
    options: [
      "The Great Patriotic War",
      "The period of forced collectivization",
      "The Russian Civil War",
      "The fall of the Soviet Union"
    ],
    answer: "The period of forced collectivization"
  },
  {
    question: "When did Dinmukhamed Kunaev pass away?",
    options: ["August 22, 1993", "September 5, 1990", "July 10, 1995", "May 30, 1992"],
    answer: "August 22, 1993"
  }
]
},
{
    _id: "15",
    name: "Turar Ryskulov",
    image: figure_15,
    birthYear: 1894,
    deathYear: 1938,
    description: "A Kazakh revolutionary and political figure in Soviet Kazakhstan.",
    category: "Politicians",
    popular: false,
    quiz: [
  {
    question: "What position did Turar Ryskulov hold in the Turkestan Autonomous Soviet Socialist Republic?",
    options: [
      "Chairman of the Central Electoral Committee",
      "Minister of Defense",
      "General Secretary of the Communist Party",
      "Head of Agriculture Department"
    ],
    answer: "Chairman of the Central Electoral Committee"
  },
  {
    question: "Which major railway construction project did Turar Ryskulov oversee?",
    options: [
      "Trans-Siberian Railway",
      "Turksib Railway",
      "Baikal-Amur Mainline",
      "Kazakhstan-Tajikistan Railway"
    ],
    answer: "Turksib Railway"
  },
  {
    question: "Which political party did Turar Ryskulov join in 1917?",
    options: [
      "Mensheviks",
      "Bolsheviks",
      "Socialist-Revolutionaries",
      "Alash Orda"
    ],
    answer: "Bolsheviks"
  },
  {
    question: "What was one of Ryskulov’s key proposals regarding the Turkestan Republic?",
    options: [
      "To merge it with China",
      "To make it a part of Kazakhstan",
      "To rename it as the Turkic Soviet Republic",
      "To dissolve it into smaller independent states"
    ],
    answer: "To rename it as the Turkic Soviet Republic"
  },
  {
    question: "What was Ryskulov’s role in Mongolia?",
    options: [
      "He served as a diplomat and helped draft Mongolia’s first Constitution",
      "He led a military campaign against Mongolia",
      "He established a trade union with Mongolia",
      "He introduced a new currency in Mongolia"
    ],
    answer: "He served as a diplomat and helped draft Mongolia’s first Constitution"
  },
  {
    question: "During the 1932-1933 famine in Kazakhstan, what action did Ryskulov take?",
    options: [
      "He remained silent to protect his career",
      "He personally distributed food aid",
      "He wrote reports to Stalin highlighting the crisis",
      "He proposed military intervention in famine-affected areas"
    ],
    answer: "He wrote reports to Stalin highlighting the crisis"
  },
  {
    question: "Where was Turar Ryskulov born?",
    options: [
      "Astana",
      "Vernensky district of Zhetysu (now Almaty region)",
      "Shymkent",
      "Orenburg"
    ],
    answer: "Vernensky district of Zhetysu (now Almaty region)"
  },
  {
    question: "Which organization did Ryskulov create as a student in Tashkent?",
    options: [
      "The Revolutionary Union of Kyrgyz Youth",
      "The Socialist Workers' Front",
      "The Bolshevik Youth Brigade",
      "The Turkic People's Alliance"
    ],
    answer: "The Revolutionary Union of Kyrgyz Youth"
  },
  {
    question: "What was Ryskulov’s stance on the Alash Orda movement?",
    options: [
      "He supported it as a path to Kazakh independence",
      "He opposed it, believing it represented the interests of the bourgeoisie",
      "He remained neutral on the issue",
      "He initially opposed it but later supported it"
    ],
    answer: "He opposed it, believing it represented the interests of the bourgeoisie"
  },
  {
    question: "What happened to Turar Ryskulov during Stalin’s purges?",
    options: [
      "He was promoted to a higher position",
      "He was sent to exile but later returned to politics",
      "He was executed in 1938",
      "He fled to another country and lived in exile"
    ],
    answer: "He was executed in 1938"
  }
] 
},
{
    _id: "16",
    name: "Zhumabay Shayakhmetov",
    image: figure_16,
    birthYear: 1902,
    deathYear: 1966,
    description: "A Kazakh statesman and the first ethnic Kazakh to lead the Communist Party of Kazakhstan.",
    category: "Politicians",
    popular: false,
    quiz: [
  {
    question: "In what year was Zhumabay Shayakhmetov born?",
    options: ["1902", "1898", "1910", "1924"],
    "answer": "1902"
  },
  {
    question: "Which position did Zhumabay Shayakhmetov hold from 1946 to 1954?",
    options: [
      "Chairman of the Council of Ministers of the Kazakh SSR",
      "First Secretary of the Communist Party of the Kazakh SSR",
      "General Secretary of the USSR",
      "Minister of Internal Affairs of the Kazakh SSR"
    ],
    "answer": "First Secretary of the Communist Party of the Kazakh SSR"
  },
  {
    question: "In which oblast was Shayakhmetov born?",
    options: ["Akmola Oblast", "Omsk Oblast", "Pavlodar Oblast", "Almaty Oblast"],
    "answer": "Omsk Oblast"
  },
  {
    question: "What was Shayakhmetov's profession before entering politics?",
    options: ["Factory worker", "School teacher", "Lawyer", "Military officer"],
    "answer": "School teacher"
  },
  {
    question: "Which Soviet leader replaced Shayakhmetov as First Secretary of the Communist Party of the Kazakh SSR in 1954?",
    options: [
      "Leonid Brezhnev",
      "Panteleimon Ponomarenko",
      "Nikita Khrushchev",
      "Dinmukhamed Kunaev"
    ],
    "answer": "Panteleimon Ponomarenko"
  },
  {
    question: "Which organization did Shayakhmetov work for between 1928 and 1938?",
    options: ["NKVD", "KGB", "Red Army", "Council of Ministers"],
    "answer": "NKVD"
  },
  {
    question: "What role did Shayakhmetov serve from 1950 to 1954?",
    options: [
      "Chairman of the Soviet of Nationalities",
      "Chairman of the Council of Ministers",
      "First Secretary of the Communist Party of the USSR",
      "Minister of Foreign Affairs"
    ],
    "answer": "Chairman of the Soviet of Nationalities"
  },
  {
    question: "Why was Shayakhmetov removed from his position as First Secretary in 1954?",
    options: [
      "Due to health reasons",
      "As part of Khrushchev's post-Stalin reorganization",
      "He voluntarily resigned",
      "He was elected to a higher position"
    ],
    "answer": "As part of Khrushchev's post-Stalin reorganization"
  },
  {
    question: "Which oblast did Shayakhmetov serve as First Secretary after his removal from the main leadership role?",
    options: ["North Kazakhstan", "South Kazakhstan", "East Kazakhstan", "West Kazakhstan"],
    "answer": "South Kazakhstan"
  },
  {
    question: "When did Zhumabay Shayakhmetov pass away?",
    options: ["1954", "1966", "1972", "1980"],
    "answer": "1966"
  }
]
},

// Rulers
{
    _id: "17",
    name: "Abylai Khan",
    image: figure_17,
    birthYear: 1711,
    deathYear: 1781,
    description: "One of the most prominent Kazakh khans who unified the Kazakh people and defended against invasions.",
    category: "Rulers",
    popular: false,
    quiz: [
  {
    question: "What was Abylai Khan’s birth name?",
    options: ["Abylay", "Abylmansur", "Abylkhan", "Abylbek"],
    answer: "Abylmansur"
  },
  {
    question: "In which century did Abylai Khan rule the Kazakh Khanate?",
    options: ["16th century", "17th century", "18th century", "19th century"],
    answer: "18th century"
  },
  {
    question: "Which enemy did Abylai Khan fight in his early years?",
    options: ["Russians", "Qing Dynasty", "Dzungars", "Mongols"],
    answer: "Dzungars"
  },
  {
    question: "What event made Abylai widely known among the people?",
    options: [
      "Becoming the ruler of Turkestan",
      "Killing Dzhungarian commander Batyr Sharysh in battle",
      "Signing a treaty with Russia",
      "Becoming Khan of the Middle Horde"
    ],
    answer: "Killing Dzhungarian commander Batyr Sharysh in battle"
  },
  {
    question: "Which city was Abylai Khan born in according to some sources?",
    options: ["Almaty", "Tashkent", "Astana", "Omsk"],
    answer: "Tashkent"
  },
  {
    question: "What musical instrument did Abylai Khan play?",
    options: ["Kobyz", "Dombra", "Shankobyz", "Saz-syrnai"],
    answer: "Dombra"
  },
  {
    question: "How many wives did Abylai Khan have?",
    options: ["5", "8", "12", "15"],
    answer: "12"
  },
  {
    question: "Which Khan did Abylai refuse to replace despite Russian support?",
    options: ["Abulkhair Khan", "Abulmambet Khan", "Tauke Khan", "Kenesary Khan"],
    answer: "Abulmambet Khan"
  },
  {
    question: "In which year did Abylai Khan become the ruler of all three Kazakh zhuzes?",
    options: ["1749", "1755", "1765", "1771"],
    answer: "1771"
  },
  {
    question: "Why did Abylai Khan refuse to attend the Russian tsar’s ceremony in 1778?",
    options: [
      "He was at war with China",
      "He refused to swear allegiance, believing he was elected by the Kazakh people",
      "He was ill",
      "He was already allied with the Qing Dynasty"
    ],
    answer: "He refused to swear allegiance, believing he was elected by the Kazakh people"
  },
  {
    question: "What economic activities did Abylai Khan encourage among the Kazakhs?",
    options: [
      "Only cattle breeding",
      "Agriculture, trade, and blacksmithing",
      "Fishing and mining",
      "Horse breeding and hunting"
    ],
    answer: "Agriculture, trade, and blacksmithing"
  },
  {
    question: "Which famous Kazakh educator and historian was Abylai Khan’s great-grandson?",
    options: ["Ibray Altynsarin", "Akhmet Baitursynov", "Shokan Valikhanov", "Mukhtar Auezov"],
    answer: "Shokan Valikhanov"
  }
]
},
{
    _id: "18",
    name: "Kasym Khan",
    image: figure_18,
    birthYear: 1445,
    deathYear: 1518,
    description: "A Kazakh khan known for creating the first written set of laws, 'Kasym Khan's Code of Laws.'",
    category: "Rulers",
    popular: false,
    quiz: [
  {
    question: "Who was Kasym Khan's father?",
    options: ["Abylai Khan", "Zhanibek Khan", "Abulkhair Khan", "Tauke Khan"],
    answer: "Zhanibek Khan"
  },
  {
    question: "In which century did Kasym Khan rule the Kazakh Khanate?",
    options: ["14th century", "15th century", "16th century", "17th century"],
    answer: "16th century"
  },
  {
    question: "What was Kasym Khan's famous statement about the Kazakh way of life?",
    options: [
      "Our land is filled with gardens and palaces.",
      "Our most valuable property is a horse.",
      "Gold and silk are our greatest treasures.",
      "The Kazakh Khanate will conquer all neighboring lands."
    ],
    answer: "Our most valuable property is a horse."
  },
  {
    question: "Which major enemy did Kasym Khan fight during his reign?",
    options: ["The Qing Dynasty", "The Shaibanids", "The Mongols", "The Dzungars"],
    answer: "The Shaibanids"
  },
  {
    question: "Which city did Kasym Khan's forces attempt to capture in 1512?",
    options: ["Samarkand", "Tashkent", "Bukhara", "Khiva"],
    answer: "Tashkent"
  },
  {
    question: "What was the approximate population of the Kazakh Khanate during Kasym Khan’s rule?",
    options: ["500,000", "1 million", "2 million", "3 million"],
    answer: "1 million"
  },
  {
    question: "Which European country established diplomatic relations with the Kazakh Khanate during Kasym Khan’s rule?",
    options: ["France", "Spain", "Russia", "England"],
    answer: "Russia"
  },
  {
    question: "Which river marked the northwestern border of the Kazakh Khanate under Kasym Khan?",
    options: ["Syr Darya", "Yaik River", "Ishim River", "Tobol River"],
    answer: "Yaik River"
  },
  {
    question: "What happened after the death of Kasym Khan?",
    options: [
      "The Kazakh Khanate expanded further.",
      "The Khanate faced political crisis and conflicts.",
      "The Khanate allied with the Shaibanids.",
      "His son immediately took power."
    ],
    answer: "The Khanate faced political crisis and conflicts."
  },
  {
    question: "Where did Kasym Khan die?",
    options: ["Tashkent", "Turkestan", "Saraichuk", "Astana"],
    answer: "Saraichuk"
  }
]
},
{
    _id: "19",
    name: "Kenessary Khan",
    image: figure_19,
    birthYear: 1802,
    deathYear: 1847,
    description: "The last khan of the Kazakh Khanate, who led a rebellion against Russian colonization.",
    category: "Rulers",
    popular: true,
    quiz: [
  {
    question: "Who was Kenessary Kassymuly?",
    options: [
      "A Kazakh poet",
      "A Kazakh khan and leader of the national liberation struggle",
      "A Russian military officer",
      "A Tatar diplomat"
    ],
    answer: "A Kazakh khan and leader of the national liberation struggle"
  },
  {
    question: "When did Kenessary Kassymuly lead the Kazakh Khanate?",
    options: [
      "1810-1820",
      "1841-1847",
      "1860-1870",
      "1900-1905"
    ],
    answer: "1841-1847"
  },
  {
    question: "Which empire did Kenessary Kassymuly fight against?",
    options: [
      "Ottoman Empire",
      "Russian Empire",
      "British Empire",
      "Mongol Empire"
    ],
    answer: "Russian Empire"
  },
  {
    question: "Which city did Kenessary's relatives, including Sultan Sarzhan, get executed in?",
    options: [
      "Astana",
      "Tashkent",
      "Moscow",
      "Almaty"
    ],
    answer: "Tashkent"
  },
  {
    question: "Who was Kenessary Kassymuly's famous grandfather?",
    options: [
      "Abylai Khan",
      "Zhanibek Khan",
      "Tauke Khan",
      "Shaibani Khan"
    ],
    answer: "Abylai Khan"
  },
  {
    question: "What was Kenessary known for among the Kazakh people?",
    options: [
      "His literary works",
      "His trade connections",
      "His military leadership and bravery",
      "His religious teachings"
    ],
    answer: "His military leadership and bravery"
  },
  {
    question: "Which group was part of Kenessary Kassymuly's rebellion?",
    options: [
      "Only Kazakhs",
      "Kazakhs and Russians only",
      "Kazakhs, Russians, Bashkirs, Uzbeks, and others",
      "Only Tatars"
    ],
    answer: "Kazakhs, Russians, Bashkirs, Uzbeks, and others"
  },
  {
    question: "What was Kenessary's approach to diplomacy?",
    options: [
      "He avoided foreign relations",
      "He engaged in diplomacy with different ethnic groups and experts",
      "He only focused on military conquests",
      "He sought an alliance with the British Empire"
    ],
    answer: "He engaged in diplomacy with different ethnic groups and experts"
  },
  {
    question: "Which river region was an important area for Kenessary's movement?",
    options: [
      "Syr Darya",
      "Volga",
      "Ob",
      "Ural"
    ],
    answer: "Syr Darya"
  },
  {
    question: "What was one of Kenessary's main goals?",
    options: [
      "To unify all Kazakh tribes and resist Russian expansion",
      "To establish trade with China",
      "To convert the Kazakhs to a new religion",
      "To become the ruler of Russia"
    ],
    answer: "To unify all Kazakh tribes and resist Russian expansion"
  }
] 
},
{
    _id: "20",
    name: "Kerey Khan",
    image: figure_20,
    birthYear: 1428,
    deathYear: 1473,
    description: "One of the founding fathers of the Kazakh Khanate alongside Zhanibek Khan.",
    category: "Rulers",
    popular: false,
    quiz: [
  {
    question: "Who was Kerey Khan?",
    options: [
      "One of the founders and first khan of the Kazakh Khanate",
      "A ruler of the Golden Horde",
      "A military leader of the Russian Empire",
      "A Mughal emperor"
    ],
    "answer": "One of the founders and first khan of the Kazakh Khanate"
  },
  {
    question: "Kerey Khan was the great-grandson of which historical figure?",
    options: [
      "Abylai Khan",
      "Urus Khan",
      "Genghis Khan",
      "Tamerlane"
    ],
    "answer": "Urus Khan"
  },
  {
    question: "Which khanate did Kerey Khan and Janibek Khan leave to establish the Kazakh Khanate?",
    options: [
      "The Golden Horde",
      "The Nogai Horde",
      "The Abulkhair Khanate",
      "Moghulistan"
    ],
    "answer": "The Abulkhair Khanate"
  },
  {
    question: "What was the significance of Kerey Khan and Janibek Khan's migration to Zhetisu?",
    options: [
      "It led to the formation of the Kazakh Khanate",
      "It resulted in the fall of the Mongol Empire",
      "It was a temporary military retreat",
      "It caused a war with the Ottoman Empire"
    ],
    "answer": "It led to the formation of the Kazakh Khanate"
  },
  {
    question: "Who was the ruler of Moghulistan that allowed Kerey Khan and Janibek Khan to settle in Zhetisu?",
    options: [
      "Esen-Bugha",
      "Abylai Khan",
      "Shaybani Khan",
      "Togluk-Timur"
    ],
    "answer": "Esen-Bugha"
  },
  {
    question: "What year is commonly associated with the formation of the Kazakh Khanate?",
    options: [
      "1368",
      "1465-1466",
      "1511",
      "1603"
    ],
    "answer": "1465-1466"
  },
  {
    question: "Which of the following was NOT one of Kerey Khan's sons?",
    options: [
      "Buryndyk",
      "Hodge",
      "Sultan Muhammad Ali",
      "Abylai"
    ],
    "answer": "Abylai"
  },
  {
    question: "Where did Kerey Khan and Janibek Khan establish their initial power base?",
    options: [
      "Along the Syr Darya River",
      "In the Altai Mountains",
      "Near the Caspian Sea",
      "In the Russian steppes"
    ],
    "answer": "Along the Syr Darya River"
  },
  {
    question: "When did Kerey Khan die?",
    options: [
      "Around 1465",
      "Around 1473-1474",
      "Around 1500",
      "Around 1510"
    ],
    "answer": "Around 1473-1474"
  },
  {
    question: "Who succeeded Kerey Khan as the ruler of the Kazakh Khanate?",
    options: [
      "Abylai Khan",
      "Buryndyk Khan",
      "Shaybani Khan",
      "Esen-Bugha Khan"
    ],
    "answer": "Buryndyk Khan"
  }
]
},
{
    _id: "21",
    name: "Zhanibek Khan",
    image: figure_21,
    birthYear: 1433,
    deathYear: 1473,
    description: "A key figure in the establishment of the Kazakh Khanate with Kerey Khan.",
    category: "Rulers",
    popular: false,
    quiz: [
  {
    question: "Who was Zhanibek Khan?",
    options: [
      "A famous Kazakh poet",
      "One of the founders of the Kazakh Khanate",
      "A Mongol emperor",
      "A leader of the Golden Horde"
    ],
    answer: "One of the founders of the Kazakh Khanate"
  },
  {
    question: "With whom did Zhanibek Khan co-found the Kazakh Khanate?",
    options: [
      "Abylai Khan",
      "Kerey Khan",
      "Kasim Khan",
      "Tauke Khan"
    ],
    answer: "Kerey Khan"
  },
  {
    question: "What was Zhanibek Khan's real name according to historical sources?",
    options: [
      "Abylai Khan",
      "Abu Said",
      "Barak Khan",
      "Kuyyrshyk Khan"
    ],
    answer: "Abu Said"
  },
  {
    question: "Why was Zhanibek Khan sometimes referred to as 'Younger Zhanibek'?",
    options: [
      "Because he was the youngest son of his father",
      "To differentiate him from other rulers named Zhanibek",
      "He ruled at a young age",
      "He was subordinate to another Khan"
    ],
    answer: "To differentiate him from other rulers named Zhanibek"
  },
  {
    question: "Which historical sources mention Zhanibek Khan?",
    options: [
      "Tarih-i Rashidi",
      "Muiz al-ansab",
      "Shaybani-name",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "Who was Zhanibek Khan's father?",
    options: [
      "Toktakiya",
      "Barak Khan",
      "Urus Khan",
      "Abu Said"
    ],
    answer: "Barak Khan"
  },
  {
    question: "Which historical term was used to refer to Zhanibek Khan by the Kazakh people?",
    options: [
      "The Bright Way of Zhanibek Khan",
      "Az Zhanibek",
      "The Golden Khan",
      "The Great Khan of the Steppes"
    ],
    answer: "Az Zhanibek"
  },
  {
    question: "In which century did Zhanibek Khan help establish the Kazakh Khanate?",
    options: [
      "14th century",
      "15th century",
      "16th century",
      "17th century"
    ],
    answer: "15th century"
  },
  {
    question: "Which title was commonly used to distinguish rulers within the Ulus of Jochi and Central Asia?",
    options: [
      "Az and Ulug",
      "Ulug and Kichig",
      "Great and Minor Khan",
      "Supreme and Lesser Khan"
    ],
    answer: "Ulug and Kichig"
  },
  {
    question: "Why is Zhanibek Khan more frequently mentioned in historical sources than Kerey Khan?",
    options: [
      "He ruled longer than Kerey Khan",
      "His name appeared in multiple genealogical records and historical chronicles",
      "He conquered more territories than Kerey Khan",
      "He was a descendant of Genghis Khan"
    ],
    answer: "His name appeared in multiple genealogical records and historical chronicles"
  }
]
},

// Scientists
{
    _id: "22",
    name: "Ibray Altynsarin",
    image: figure_22,
    birthYear: 1841,
    deathYear: 1889,
    description: "An educator and writer who played a key role in spreading education in Kazakhstan.",
    category: "Scientists",
    popular: true,
    quiz: [
  {
    question: "When was Ybyrai Altynsarin born?",
    options: ["October 20, 1841", "March 15, 1839", "December 5, 1850", "July 12, 1845"],
    answer: "October 20, 1841"
  },
  {
    question: "Who raised Ybyrai Altynsarin after his father's early death?",
    options: ["His uncle", "His grandfather Balgozha Dzhanburchin", "His mother", "A Russian nobleman"],
    answer: "His grandfather Balgozha Dzhanburchin"
  },
  {
    question: "What was the main goal of the school Altynsarin attended in Orenburg?",
    options: [
      "To train Kazakh children for military service",
      "To prepare literate people for the tsarist administration",
      "To convert Kazakh children to Christianity",
      "To teach Kazakh children agricultural skills"
    ],
    answer: "To prepare literate people for the tsarist administration"
  },
  {
    question: "Which year did Ybyrai Altynsarin successfully graduate from school?",
    options: ["1855", "1857", "1860", "1862"],
    answer: "1857"
  },
  {
    question: "What was Altynsarin's primary ambition in his career?",
    options: [
      "To become a wealthy landowner",
      "To bring education to the Kazakh people",
      "To work as a translator for the Russian government",
      "To become a famous poet"
    ],
    answer: "To bring education to the Kazakh people"
  },
  {
    question: "What obstacle did Altynsarin face while trying to focus on teaching?",
    options: [
      "Lack of funding for schools",
      "Opposition from local clergy and tsarist authorities",
      "Difficulty in finding students",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "What type of schools did Altynsarin establish?",
    options: ["Only boys' schools", "Only religious schools", "Secular Russian-Kazakh schools", "Private elite academies"],
    answer: "Secular Russian-Kazakh schools"
  },
  {
    question: "In which year was the first Kazakh girls' school opened due to Altynsarin's efforts?",
    options: ["1875", "1880", "1883", "1887"],
    answer: "1883"
  },
  {
    question: "What was the title of Altynsarin’s famous poem encouraging children to study?",
    options: [
      "Spring Awakening",
      "The Beauty of the Steppe",
      "Let's Study, Children!",
      "The Rich and the Poor"
    ],
    answer: "Let's Study, Children!"
  },
  {
    question: "What was Altynsarin’s contribution to Kazakh literature?",
    options: [
      "He wrote the first Kazakh novel",
      "He compiled the first Kazakh reader with a new alphabet based on Russian graphics",
      "He translated Russian fairy tales into Kazakh",
      "He created the first Kazakh newspaper"
    ],
    answer: "He compiled the first Kazakh reader with a new alphabet based on Russian graphics"
  },
  {
    question: "Which theme was common in Altynsarin’s poetry and stories?",
    options: [
      "Social inequality and the need for education",
      "The beauty of Kazakh traditional clothing",
      "The importance of military service",
      "The adventures of legendary Kazakh warriors"
    ],
    answer: "Social inequality and the need for education"
  },
  {
    question: "What did Altynsarin believe was the true wealth of a person?",
    options: ["Gold and land", "Knowledge and education", "A strong family", "A successful business"],
    answer: "Knowledge and education"
  }
]
},
{
    _id: "23",
    name: "Mukhtar Auezov",
    image: figure_23,
    birthYear: 1897,
    deathYear: 1961,
    description: "A prominent Kazakh writer and scholar, best known for his novel 'Abai's Path.'",
    category: "Scientists",
    popular: false,
    quiz: [
  {
    question: "When and where was Mukhtar Auezov born?",
    options: [
      "September 28, 1897, in Chingiz parish, Semey region",
      "December 15, 1900, in Almaty",
      "June 10, 1885, in Astana",
      "April 5, 1895, in Shymkent"
    ],
    "answer": "September 28, 1897, in Chingiz parish, Semey region"
  },
  {
    question: "Which Kazakh literary figure had a significant influence on Mukhtar Auezov’s upbringing?",
    options: [
      "Magzhan Zhumabaev",
      "Abai Kunanbayev",
      "Shokan Ualikhanov",
      "Ilyas Zhansugurov"
    ],
    "answer": "Abai Kunanbayev"
  },
  {
    question: "What was the name of the magazine Mukhtar Auezov published with Zhusupbek Aimauytov in 1918?",
    options: [
      "Kazakh Adebieti",
      "Abai",
      "Alash",
      "Zhas Kazakh"
    ],
    "answer": "Abai"
  },
  {
    question: "Which Kyrgyz epic deeply impressed Mukhtar Auezov and influenced his research?",
    options: [
      "Er Tostik",
      "Alpamys",
      "Manas",
      "Koblandy Batyr"
    ],
    "answer": "Manas"
  },
  {
    question: "Which university did Mukhtar Auezov attend for higher education?",
    options: [
      "Kazakh National University",
      "Moscow State University",
      "Leningrad State University",
      "Tashkent University"
    ],
    "answer": "Leningrad State University"
  },
  {
    question: "In which year was Mukhtar Auezov arrested for the first time?",
    options: [
      "1929",
      "1932",
      "1930",
      "1935"
    ],
    "answer": "1930"
  },
  {
    question: "Which famous novel by Mukhtar Auezov is recognized as an outstanding work of world literature?",
    options: [
      "The Path of Abai",
      "Nomads",
      "Kazakh Khandary",
      "The Great Steppe"
    ],
    "answer": "The Path of Abai"
  },
  {
    question: "For which novel did Mukhtar Auezov receive the Stalin Prize in 1949?",
    options: [
      "The Path of Abai",
      "Manas",
      "For October",
      "Epic of the Steppe"
    ],
    "answer": "The Path of Abai"
  },
  {
    question: "What was the name of Mukhtar Auezov’s first wife?",
    options: [
      "Raihan",
      "Valentina Kuzmina",
      "Fatima Gabitova",
      "Layla Auezova"
    ],
    "answer": "Raihan"
  },
  {
    question: "In which year did Mukhtar Auezov pass away?",
    options: [
      "1961",
      "1957",
      "1965",
      "1959"
    ],
    "answer": "1961"
  }
] 
},
{
    _id: "24",
    name: "Akhmet Baitursynuly",
    image: figure_24,
    birthYear: 1872,
    deathYear: 1937,
    description: "A linguist, poet, and public figure who reformed the Kazakh alphabet.",
    category: "Scientists",
    popular: true,
    quiz: [
  {
    question: "When and where was Akhmet Baitursynov born?",
    options: ["1872, Kostanai region", "1868, Almaty region", "1875, Astana", "1880, Shymkent"],
    answer: "1872, Kostanai region"
  },
  {
    question: "What was Baitursynov’s main goal throughout his career?",
    options: ["Political reform", "Developing Kazakh literacy", "Expanding trade routes", "Military leadership"],
    answer: "Developing Kazakh literacy"
  },
  {
    question: "How did Baitursynov contribute to the development of the Kazakh alphabet?",
    options: [
      "Created an entirely new alphabet from scratch",
      "Reformed the Arabic alphabet to suit the Kazakh language",
      "Replaced the Arabic alphabet with the Cyrillic script",
      "Introduced the use of pictograms for writing"
    ],
    answer: "Reformed the Arabic alphabet to suit the Kazakh language"
  },
  {
    question: "What was the main issue with the traditional Arabic script for Kazakh writing?",
    options: [
      "It had too many letters that confused learners",
      "It lacked enough letters to represent Kazakh vowels",
      "It was banned by Russian authorities",
      "It was too complicated for printing"
    ],
    answer: "It lacked enough letters to represent Kazakh vowels"
  },
  {
    question: "When did Baitursynov’s reformed Arabic alphabet come into use?",
    options: ["1905", "1912", "1926", "1931"],
    answer: "1912"
  },
  {
    question: "What was the name of the newspaper Baitursynov co-founded?",
    options: ["Qazaq", "Alash", "Kazakh Times", "Turkestan"],
    answer: "Qazaq"
  },
  {
    question: "Which of the following statements describes Baitursynov’s view on newspapers?",
    options: [
      "They are unnecessary for society",
      "They are the ears, eyes, and tongue of the people",
      "They should only be used for government propaganda",
      "They should focus only on entertainment"
    ],
    answer: "They are the ears, eyes, and tongue of the people"
  },
  {
    question: "Which Russian author’s fables did Baitursynov translate into Kazakh?",
    options: ["Leo Tolstoy", "Ivan Krylov", "Alexander Pushkin", "Fyodor Dostoevsky"],
    answer: "Ivan Krylov"
  },
  {
    question: "What was the name of Baitursynov’s book of civic thoughts and poetry?",
    options: ["Forty Fables", "Masa", "Alash Orda", "Kazakh Literature"],
    answer: "Masa"
  },
  {
    question: "What was the main theme of Baitursynov’s poem 'Masa'?",
    options: [
      "Encouraging people to wake up and seek enlightenment",
      "The beauty of Kazakh nature",
      "A historical account of Kazakh warriors",
      "A critique of Western culture"
    ],
    answer: "Encouraging people to wake up and seek enlightenment"
  },
  {
    question: "What political movement did Baitursynov co-found?",
    options: ["Alash Orda", "Bolsheviks", "Kazakh Unity Party", "Turkestan Independence Movement"],
    answer: "Alash Orda"
  },
  {
    question: "Why was Baitursynov arrested in 1909?",
    options: [
      "For promoting Kazakh autonomy and education",
      "For financial fraud",
      "For opposing the Bolsheviks",
      "For refusing to teach Russian in schools"
    ],
    answer: "For promoting Kazakh autonomy and education"
  },
  {
    question: "What happened to Baitursynov during Stalinist repression?",
    options: [
      "He was exiled and later executed",
      "He became a Soviet government official",
      "He moved to Europe",
      "He lived in hiding for decades"
    ],
    answer: "He was exiled and later executed"
  },
  {
    question: "In which year was Baitursynov rehabilitated and officially recognized?",
    options: ["1956", "1988", "1991", "2000"],
    answer: "1988"
  }
] 
},
{
    _id: "25",
    name: "Kanysh Satpayev",
    image: figure_25,
    birthYear: 1899,
    deathYear: 1964,
    description: "A renowned geologist and the first President of the Academy of Sciences of Kazakhstan.",
    category: "Scientists",
    popular: false,
    quiz: [
  {
    question: "In which year was Kanysh Satpayev born?",
    options: ["1895", "1899", "1902", "1910"],
    answer: "1899"
  },
  {
    question: "Where was Kanysh Satpayev born?",
    options: ["Almaty", "Astana", "Pavlodar region", "Karaganda"],
    answer: "Pavlodar region"
  },
  {
    question: "Which institute did Kanysh Satpayev graduate from?",
    options: ["Moscow State University", "Tomsk Technological Institute", "Kazakh National University", "Saint Petersburg Mining Institute"],
    answer: "Tomsk Technological Institute"
  },
  {
    question: "What was Kanysh Satpayev's major field of study?",
    options: ["Physics", "Chemistry", "Geology", "Engineering"],
    answer: "Geology"
  },
  {
    question: "Which major mining area did Kanysh Satpayev help explore and develop?",
    options: ["Mangyshlak", "Balkhash", "Zhezkazgan", "Aktobe"],
    answer: "Zhezkazgan"
  },
  {
    question: "In which year did Kanysh Satpayev become the first President of the Academy of Sciences of Kazakhstan?",
    options: ["1946", "1950", "1955", "1960"],
    answer: "1946"
  },
  {
    question: "Which prestigious award did Kanysh Satpayev receive in 1958?",
    options: ["Nobel Prize", "Lenin Prize", "State Prize of Kazakhstan", "Order of Friendship"],
    answer: "Lenin Prize"
  },
  {
    question: "What is one of the scientific contributions of Kanysh Satpayev?",
    options: [
      "Development of mathematical algorithms for AI",
      "Creating a new chemical element",
      "Predicting the large mineral reserves of Zhezkazgan",
      "Leading the first space mission from Kazakhstan"
    ],
    answer: "Predicting the large mineral reserves of Zhezkazgan"
  },
  {
    question: "In which year did Kanysh Satpayev pass away?",
    options: ["1958", "1962", "1964", "1970"],
    answer: "1964"
  },
  {
    question: "What was named after Kanysh Satpayev in recognition of his contributions?",
    options: [
      "A city, an institute, and a mineral",
      "An asteroid, a rocket, and a school",
      "A national park, a book, and a festival",
      "A bridge, a river, and a space station"
    ],
    answer: "A city, an institute, and a mineral"
  }
] 
},
{
    _id: "26",
    name: "Shokan Valikhanov",
    image: figure_26,
    birthYear: 1835,
    deathYear: 1865,
    description: "An ethnographer and historian who studied the culture and history of Central Asia.",
    category: "Scientists",
    popular: false,
    quiz: [
  {
    question: "Where was Chokan Valikhanov born?",
    options: [
      "Omsk, Russia",
      "Kushmurun Fortress, Kazakhstan",
      "Almaty, Kazakhstan",
      "Semipalatinsk, Kazakhstan"
    ],
    answer: "Kushmurun Fortress, Kazakhstan"
  },
  {
    question: "In which year did Chokan Valikhanov enter the Omsk Cadet Corps?",
    options: [
      "1845",
      "1847",
      "1850",
      "1853"
    ],
    answer: "1847"
  },
  {
    question: "Who were some of Chokan Valikhanov’s influential mentors at the Omsk Cadet Corps?",
    options: [
      "N. Kostyletsky and Gonsewsky",
      "Karl Marx and Friedrich Engels",
      "Lev Tolstoy and Anton Chekhov",
      "Dmitri Mendeleev and Ivan Pavlov"
    ],
    answer: "N. Kostyletsky and Gonsewsky"
  },
  {
    question: "Which famous Russian writer was Chokan Valikhanov closely associated with?",
    options: [
      "Leo Tolstoy",
      "Fyodor Dostoyevsky",
      "Alexander Pushkin",
      "Anton Chekhov"
    ],
    answer: "Fyodor Dostoyevsky"
  },
  {
    question: "At what age did Chokan Valikhanov graduate from the Omsk Cadet Corps?",
    options: [
      "16",
      "18",
      "20",
      "22"
    ],
    answer: "18"
  },
  {
    question: "What was one of Chokan Valikhanov's primary research areas?",
    options: [
      "Nuclear Physics",
      "Kazakh and Central Asian History and Culture",
      "Astronomy",
      "Marine Biology"
    ],
    answer: "Kazakh and Central Asian History and Culture"
  },
  {
    question: "Which epic poem did Chokan Valikhanov first document and translate into Russian?",
    options: [
      "Koblandy Batyr",
      "Er Tostik",
      "Manas",
      "Alpamys Batyr"
    ],
    answer: "Manas"
  },
  {
    question: "In what year was Chokan Valikhanov elected as a member of the Russian Geographical Society?",
    options: [
      "1855",
      "1857",
      "1859",
      "1861"
    ],
    answer: "1857"
  },
  {
    question: "What was the purpose of Chokan Valikhanov’s famous expedition to Kashgar?",
    options: [
      "To establish a military base",
      "To conduct geographical and historical research on Eastern Turkestan",
      "To trade silk and spices",
      "To search for ancient manuscripts"
    ],
    answer: "To conduct geographical and historical research on Eastern Turkestan"
  },
  {
    question: "What was the name of Chokan Valikhanov’s most significant work based on his journey to Kashgar?",
    options: [
      "The Great Steppe",
      "About Altyshara Condition or Six Eastern Cities of China's Province Nan-Lu",
      "History of Kazakhstan",
      "The Silk Road Chronicles"
    ],
    answer: "About Altyshara Condition or Six Eastern Cities of China's Province Nan-Lu"
  },
  {
    question: "Where did Chokan Valikhanov pass away?",
    options: [
      "St. Petersburg, Russia",
      "Omsk, Russia",
      "Vernyi (Almaty), Kazakhstan",
      "Koshentogan, Kazakhstan"
    ],
    answer: "Koshentogan, Kazakhstan"
  },
  {
    question: "At what age did Chokan Valikhanov die?",
    options: [
      "27",
      "30",
      "35",
      "40"
    ],
    answer: "29"
  }
] 
},

];



// FOOTER SECTION
export const FOOTER_LINKS = [
    {
      title: "Learn More",
      links: [
        "About Us",
        "Latest figures",
        "Popular figures",
        "FAQ",
        "Privacy Policy",
      ],
    },
    {
      title: "Our Community",
      links: [
        "Terms and Conditions",
        "Special Offers",
        "Customer Reviews",
      ],
    },
  ];
  
  export const FOOTER_CONTACT_INFO = {
    title: "Contact Us",
    links: [
      { label: "Contact Number", value: "123-456-7890" },
      { label: "Email Address", value: "info@nomadchronicles.com" },
    ],
  };
  
  export const SOCIALS = {
    title: "Social",
    links: [
      { icon: <FaInstagram />, id: "instagram" },
      { icon: <FaTwitter />, id: "twitter" },
      { icon: <FaYoutube />, id: "youtube" },
      { icon: <FaLinkedin />, id: "linkedin" },
    ],
  };
