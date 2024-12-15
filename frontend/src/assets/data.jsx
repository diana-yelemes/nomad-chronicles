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
import figure_25 from './s_kokeev.jpg'
import figure_26 from './s_pancratova.jpg'
import figure_27 from './s_satpayev.jpg'
import figure_28 from './s_valikhanov.jpg'

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
    popular: true,
    quiz: [
        { question: "What year was Abai Qunanbayuli born?", options: [1855, 1845, 1868, 1852], answer: 1845 },
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
    popular: true,
    quiz: [
        { question: "When was Aiteke Bi born?", options: [1644, 1650, 1630, 1666], answer: 1644 },
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
        { question: "What role did Kazybek Bi play in Kazakh history?", options: ["Diplomat", "Artist", "Batyr", "Politician"], answer: "Diplomat" },
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
    popular: true,
    quiz: [
        { question: "What instrument is Korkyt Ata associated with?", options: ["Dombra", "Kobyz", "Flute", "Guitar"], answer: "Kobyz" },
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
    popular: true,
    quiz: [
        { question: "What was Seyfullin's main contribution to Kazakh culture?", options: ["Literature", "Painting", "Science", "Politics"], answer: "Literature" },
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
        { question: "What year did Tole Bi die?", options: [1756, 1800, 1720, 1701], answer: 1756 },
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
        { question: "Which field was Zhansugurov known for?", options: ["Poetry", "Politics", "Science", "Painting"], answer: "Poetry" },
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
    popular: true,
    quiz: [
        { question: "What was Bogenbai known for?", options: ["Politics", "Science", "Warrior", "Music"], answer: "Warrior" },
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
    popular: true,
    quiz: [
        { question: "When was Kabanbai Batyr born?", options: [1691, 1700, 1685, 1715], answer: 1691 },
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
        { question: "What year was Nauryzbai Batyr born?", options: [1710, 1698, 1706, 1725], answer: 1706 },
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
        { question: "What role did Otegen Batyr play in Kazakh history?", options: ["Politician", "Scientist", "Warrior", "Artist"], answer: "Warrior" },
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
    popular: true,
    quiz: [
        { question: "When did Raiymbek Batyr die?", options: [1785, 1770, 1760, 1800], answer: 1785 },
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
        { question: "What year was Dulatov born?", options: [1880, 1890, 1885, 1875], answer: 1885 },
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
        { question: "What position did Konayev hold?", options: ["President", "First Secretary", "Prime Minister", "General"], answer: "First Secretary" },
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
    popular: true,
    quiz: [
        { question: "When was Turar Ryskulov born?", options: [1890, 1894, 1900, 1885], answer: 1894 },
    ]
},
{
    _id: "16",
    name: "Zhumabek Shayakhmetov",
    image: figure_16,
    birthYear: 1902,
    deathYear: 1966,
    description: "A Kazakh statesman and the first ethnic Kazakh to lead the Communist Party of Kazakhstan.",
    category: "Politicians",
    popular: false,
    quiz: [
        { question: "What is Zhumabek Shayakhmetov known for?", options: ["Being a poet", "Leading the Communist Party", "Military service", "Being a scientist"], answer: "Leading the Communist Party" },
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
    popular: true,
    quiz: [
        { question: "What year did Abylai Khan die?", options: [1771, 1781, 1791, 1761], answer: 1781 },
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
    popular: true,
    quiz: [
        { question: "What is Kasym Khan best known for?", options: ["Military conquests", "Writing laws", "Art", "Diplomacy"], answer: "Writing laws" },
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
        { question: "What was Kenessary Khan known for?", options: ["Leading a rebellion", "Writing literature", "Building cities", "Scientific discoveries"], answer: "Leading a rebellion" },
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
    popular: true,
    quiz: [
        { question: "Who did Kerey Khan co-found the Kazakh Khanate with?", options: ["Abylai Khan", "Kasym Khan", "Zhanibek Khan", "Kenessary Khan"], answer: "Zhanibek Khan" },
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
    popular: true,
    quiz: [
        { question: "When was Zhanibek Khan born?", options: [1430, 1433, 1440, 1425], answer: 1433 },
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
        { question: "What was Altynsarin's main contribution?", options: ["Education", "Military", "Politics", "Music"], answer: "Education" },
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
    popular: true,
    quiz: [
        { question: "What is Auezov's famous novel called?", options: ["Abai's Path", "Kazakh History", "Golden Steppe", "Path of the Khan"], answer: "Abai's Path" },
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
        { question: "What was Baitursynuly known for?", options: ["Alphabet reform", "Military leadership", "Science", "Painting"], answer: "Alphabet reform" },
    ]
},
{
    _id: "25",
    name: "Tleukabyl Kokeev",
    image: figure_25,
    birthYear: 1870,
    deathYear: 1937,
    description: "A Kazakh scientist who contributed to the development of education and science in Kazakhstan.",
    category: "Scientists",
    popular: false,
    quiz: [
        { question: "What year was Tleukabyl Kokeev born?", options: [1860, 1870, 1880, 1890], answer: 1870 },
    ]
},
{
    _id: "26",
    name: "Vera Pancratova",
    image: figure_26,
    birthYear: 1905,
    deathYear: 1965,
    description: "A Kazakh botanist and scientist who made significant contributions to plant studies in Central Asia.",
    category: "Scientists",
    popular: false,
    quiz: [
        { question: "What was Vera Pancratova's field of study?", options: ["Botany", "Physics", "History", "Chemistry"], answer: "Botany" },
    ]
},
{
    _id: "27",
    name: "Kanysh Satpayev",
    image: figure_27,
    birthYear: 1899,
    deathYear: 1964,
    description: "A renowned geologist and the first President of the Academy of Sciences of Kazakhstan.",
    category: "Scientists",
    popular: true,
    quiz: [
        { question: "What was Kanysh Satpayev known for?", options: ["Geology", "Literature", "Military leadership", "Medicine"], answer: "Geology" },
    ]
},
{
    _id: "28",
    name: "Shokan Valikhanov",
    image: figure_28,
    birthYear: 1835,
    deathYear: 1865,
    description: "An ethnographer and historian who studied the culture and history of Central Asia.",
    category: "Scientists",
    popular: true,
    quiz: [
        { question: "What field did Valikhanov specialize in?", options: ["Ethnography", "Mathematics", "Physics", "Medicine"], answer: "Ethnography" },
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
