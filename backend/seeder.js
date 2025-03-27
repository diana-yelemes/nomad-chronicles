import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Figure from './models/figureModel.js';
import Quiz from './models/Quiz.js';

dotenv.config();
connectDB();

// ID фигуры, которую удаляем и создаем заново
const figureId = "67e5cb5b57279a29f5640ab1";

// Полная информация о фигуре
const figure = {
  _id: figureId,
  name: "Bogenbai Batyr",
  description: `
Bogenbai batyr (warrior) – one of the major commanders of the XVIII century, the celebrated commander of Abylai khan era. As commander, he gained enormous prestige and respect among the Kazakh soldiers, who called him «Kanzhygaly Bogenbai. Bogenbai batyr was born on the coast of Syr Darya. His grandfather was Aldekun, father – Akcha, and his mother – Bayau. Bogenbai had two sons – Turanali and Turymbet. In the first half of XVIII century, Bogenbai with Olzhabai, Kabanbai, Malaysary and others batyrs, fought for the independence of his people, more than once he showed an immense courage in battles with Zonghars, and then in the liberation of their land from the Chinese invaders.

In 1725-1727, protecting Turkestan – the capital of Kazakhs, together with Abylai khan Bogenbai batyr headed the Kazakh militia against zonghars and as a result they were expelled from Turkestan and Sauran out of Dzungarian Alatau. Young Bogenbai proved as the skillful soldier in several fights with Bashkirs, Zonghars and Khivins. Strides of young batyr made under a ground. His father Akcha was the notable person among tribespeople, perfectly knew tactics of conducting fight by small group, attached great value to use features of the district. Besides, he did not shun from «black» work, he was well-known smith on forging of sabers and daggers – Acinaces. And also Akcha was akyn-improvising poet.

All these accomplishments were inherited by Bogenbai. He could organize people with his eloquence, teached aul’s inhabitants to handle the weapon. In youth, Bogenbai was brought up together with children of Az-Tauk khan, that also had beneficial impact. When he became the adult dzhigit, Bogenbai often went on steppe auls to settle intergeneric disputes, participated in kurultais – meetings. It was necessary to head groups of sarbazs on reflection of sudden enemies’ invasions. Over the years own environment of Bogenbai batyr started developing. It consisted of his brothers – Kolbay, Maymasar, Taymasar, and Atan's close relatives, Zhantay, Dosay, Tomasz, Umbetya akyn. These young people were the center of group which subsequently people named «kanzhygalynyn kyryk batyri» – forty warriors from Kanzhigali family.

In 1710, in the Karakum Desert, near the Aral Sea, Bogenbai warrior was elected leader of the militia of all three Kazakh Juzs against Zonghars invaders. It was time of the reign of Tauke khan. The choice was not accidental. Tauke khan and his companions – sultans, beys – sages Tole, Kazybek, Aiteke noticed young warrior. In his terse words were appreciable directness and mind, in the sight a courage, in action a resoluteness and power. Preference of Bogenbai to other commanders, was not only true, but in many ways crucial to the balance of forces in a bloody struggle with zonghars. After uniting the forces of all three juzs Bogenbai led them to the decisive battle against the enemy, the preponderance of Kazakhs was noticeable.

In 1712, there was a single combat of Bogenbai batyr with Zonghar noyan in Sarayly's district, on riverside of Sara-Kengir in front of mausoleum of well-known Dzhuchi-khan. The young Kazakh batyr safely came to grips in zhekpe-zhek – fight one to one and overcame the strong opponent. This victory had huge value as for increase authority of Bogenbai, and a raising of moral spirit of Kazakh soldiers. Many more times Bogenbai will get to grips with zonghar’s leaders, and every time overcoming the opponents. It was very important, because at that time the outcome of collision of enemy forces was turned often by a duel of known steppe giants. If you are stronger than the leader of opponents, so the army headed by you is stronger.

It means, in certain cases it is possible to do without big bloodshed. Bogenbai always won because he had ardent love to motherland; he attached fighting experience, masterful possession of all types of weapon and methods of hand-to-hand fight to huge physical force and skill. Bogenbai was proficient in combat operations with few troops. As a lightning from a cloudless sky, he was falling with them to stunned enemy, struck and disappeared, leaving many dead and wounded soldiers. Preliminarily Bogenbai receives the necessary information about the number of enemy forces, their location. Only having carefully weighed everything, the group of forty batyrs from Kanzhygaly’s kin launched a flying raids.

In 1729 in the Anyrakay district, there was one of the largest battles with Zonghars. At the head of the Kazakh militia was Bogenbai together with batyrs Kabanbay and Rayymbek. They applied steppe tactics of conducting combat operations. Small warrior group, having left towards Zonghars, created visibility of fewness of Kazakhs. Then, having turned back, they started carrying away the opponent in depth of a valley, and then from two flanks the main parts of the Kazakh militia struck blows. Anyrakay fight turned for Zonghars with crushing defeat. Bogenbai batyr presented a positive self-image in major defensive battle. The Kazakh armies run by him crushed Zonghars at Esil's coast and Irtysh, Shue, Sarys and Nura.

One name of Bogenbai batyr over the time started inspiring in aggressors respect and fear. And no matter how sudden invasion of enemies, he succeeded in a short time to call his faithful soldiers and reflect the most fierce onslaught. In 1756-1758 Bogenbai batyr got to great battle under Talky with the Chinese armies, which have for the first time come to East Turkestan. In this fight he blanked Chinese and pursued them to Urumqi. In the same time, there was one of the last large campaigns of Bogenbai batyr in the Ayaguz territory. Zonghars could not reject pressure of the Kazakh army under his leadership, sustained a great defeat. After that, he secured with an oath of peace by Zonghars and signed a pact of friendship and non-aggression. As a sign of thisZonghars generals slaughtered their horses and handed their heads to Kazakh generals.

Bogenbai batyr had a reputation of very judicious and wise person. Carrying out a role of the ambassador, in 1761 the accompanied son of Abylay khan – Adil, who visited China with diplomatic mission. However, more difficult to fight was with internal than external enemies. He could oppose a formidable force of their weapons to the external enemies. But with internal enemies Bogenbai was often powerless. The victories won by him and his associates, in the end, hit on him. How did this happen? Victory turned the heads of Kazakh rulers, fascinated by their thirst for more and more power, riches and honors.

But Tauke Khan’s son – Bolat, who headed Khanate after his father's death, was subjected to it in a less degree. But he ruled not so long – very soon he died, possibly as a result of poisoning. His successor Kaip hated Bogenbai. As a result, Bogenbai was stripped of the khan’s graces and militias with which extracted Kazakhs victory. From now, everything that Bogenbai did and offered was rejected. And the fact that he proposed and tried to take was a guarantee of future victories. Bogenbai surrounded himself with people who knew a lot about ores and metal processing. In the 1740s, he raised question of soldiers arming to Abulmambet khan, training their guns and casting cores, manufacturing guns.

However, his appeals were ridiculed. When Bogenbai made a forges, people called him «Kara-Muryn kanzhygaly» – «blacknose kanzhygalin» and when he brought a fizzledowsers they called him «taskemirgen batyr» – «warrior gnawing stone». But as we know, people from kanzhygaly kin were brave and capable dzhigits, many of whom were Bogenbai’s friends. Thanks to their support Bogenbai had his own school of fighting in a group fight and in single combat. At that time possession lance and saber were especially appreciated. In this art nobody could surpass Bogenbai. No wonder he came out with success from the most challenging peripetias.

Frank irony, sneers, rejections from a «blue blood» did not discourage Bogenbai. He continued the useful undertakings and population training. Over time life put everything on the places. At the Abylay khan, Bongebai, who have grown old in fights, became again in a favor. Even their relations were difficult, the glorified batyr and the clever adviser was considered as the left hand of this terrible and wise governor. Despite everything, Abylay singled out and loved Bogenbai, and when he died, felt around gaping emptiness: Not enemies but old age overcame the national warrior. After campaigns to Altai and Tarbagatay he more often stayed at home for a long time.



`,
  
  category: "Batyrs",
  birthYear: "1690",
  deathYear: "1775",
  notableWorks: [
    "Battle of Anyrakay",
    "Defense of Turkestan",

   "Kazakh-Zunghar Conflicts"

  ],
  popular: false,
  image: "https://multiurok.ru/img/312085/image_59cfbc6ef3a2d.jpg",
  createdAt: new Date()
};

// Данные для квиза
const quiz = {
  title: "Bogenbai Batyr Quiz",
  description: "Test your knowledge about the life and legacy of Bogenbai Batyr.",
  relatedFigureId: figureId,
  difficulty: "medium",
  questions: [
    {
      questionText: "When was Bogenbai Batyr born?",
      options: [
        { text: "1690", isCorrect: true },
        { text: "1710", isCorrect: false },
        { text: "1750", isCorrect: false },
        { text: "1775", isCorrect: false }
      ]
    },
    {
      questionText: "Which khan’s era was Bogenbai Batyr a celebrated commander in?",
      options: [
        { text: "Tauke Khan", isCorrect: false },
        { text: "Abylai Khan", isCorrect: true },
        { text: "Yesim Khan", isCorrect: false },
        { text: "Kenesary Khan", isCorrect: false }
      ]
    },
    {
      questionText: "Which major enemies did Bogenbai Batyr fight against?",
      options: [
        { text: "Bashkirs", isCorrect: false },
        { text: "Zonghars", isCorrect: false },
        { text: "Khivins", isCorrect: false },
        { text: "All of the above", isCorrect: true }
      ]
    },
    {
      questionText: "What was Bogenbai Batyr’s father’s name?",
      options: [
        { text: "Aldekun", isCorrect: false },
        { text: "Akcha", isCorrect: true },
        { text: "Bayau", isCorrect: false },
        { text: "Taymasar", isCorrect: false }
      ]
    },
    {
      questionText: "What important battle did Bogenbai Batyr lead in 1710?",
      options: [
        { text: "Battle of Anyrakay", isCorrect: false },
        { text: "Battle in the Karakum Desert", isCorrect: true },
        { text: "Battle of Talky", isCorrect: false },
        { text: "Battle of Ayaguz", isCorrect: false }
      ]
    },
    {
      questionText: "What was the significance of Bogenbai Batyr’s single combat victory in 1712?",
      options: [
        { text: "It increased his authority among Kazakh soldiers.", isCorrect: true },
        { text: "It caused the Zonghars to retreat immediately.", isCorrect: false },
        { text: "It led to a peace treaty between Kazakhs and Zonghars.", isCorrect: false },
        { text: "It ended the war against the Zonghars.", isCorrect: false }
      ]
    },
    {
      questionText: "Which famous battle did Bogenbai Batyr participate in during 1729?",
      options: [
        { text: "Battle of Anyrakay", isCorrect: true },
        { text: "Battle of Sarayly", isCorrect: false },
        { text: "Battle of Sauran", isCorrect: false },
        { text: "Battle of Turkestan", isCorrect: false }
      ]
    },
    {
      questionText: "What special war tactic did Bogenbai Batyr use in the Battle of Anyrakay?",
      options: [
        { text: "Ambushing the enemy at night", isCorrect: false },
        { text: "Tricking the enemy into thinking the Kazakh forces were small", isCorrect: true },
        { text: "Surrounding the enemy with cavalry from all sides", isCorrect: false },
        { text: "Using long-range archery to weaken enemy forces", isCorrect: false }
      ]
    },
    {
      questionText: "Who was Bogenbai Batyr’s main ally in the 1729 Battle of Anyrakay?",
      options: [
        { text: "Tauke Khan", isCorrect: false },
        { text: "Abylai Khan", isCorrect: false },
        { text: "Kabanbay Batyr", isCorrect: true },
        { text: "Yesim Khan", isCorrect: false }
      ]
    },
    {
      questionText: "Which major foreign force did Bogenbai Batyr defeat in 1756-1758?",
      options: [
        { text: "Bashkirs", isCorrect: false },
        { text: "Khivins", isCorrect: false },
        { text: "Chinese army", isCorrect: true },
        { text: "Russian army", isCorrect: false }
      ]
    },
    {
      questionText: "What symbolized the peace agreement between Bogenbai Batyr and the Zonghars?",
      options: [
        { text: "Signing of a treaty", isCorrect: false },
        { text: "Exchange of gifts", isCorrect: false },
        { text: "Zonghars slaughtering their horses and giving their heads to Kazakh generals", isCorrect: true },
        { text: "Zonghars surrendering their weapons", isCorrect: false }
      ]
    },
    {
      questionText: "Why was Bogenbai Batyr stripped of his position under Khan Kaip?",
      options: [
        { text: "He lost an important battle.", isCorrect: false },
        { text: "Kaip Khan disliked him and rejected his proposals.", isCorrect: true },
        { text: "He refused to fight in new battles.", isCorrect: false },
        { text: "He sided with the Chinese in negotiations.", isCorrect: false }
      ]
    },
    {
      questionText: "What military advancement did Bogenbai Batyr propose that was initially ridiculed?",
      options: [
        { text: "Training soldiers to use guns and cast artillery", isCorrect: true },
        { text: "Building stone fortresses for defense", isCorrect: false },
        { text: "Using horses for cavalry instead of foot soldiers", isCorrect: false },
        { text: "Creating a professional army with paid soldiers", isCorrect: false }
      ]
    },
    {
      questionText: "Which Kazakh khan later reinstated Bogenbai Batyr and valued his counsel?",
      options: [
        { text: "Tauke Khan", isCorrect: false },
        { text: "Kaip Khan", isCorrect: false },
        { text: "Abylai Khan", isCorrect: true },
        { text: "Yesim Khan", isCorrect: false }
      ]
    },
    {
      questionText: "What ultimately caused Bogenbai Batyr’s death?",
      options: [
        { text: "A battle injury", isCorrect: false },
        { text: "Old age", isCorrect: true },
        { text: "Poisoning", isCorrect: false },
        { text: "Execution by enemies", isCorrect: false }
      ]
    }
  ]
  
};

// Функция для удаления и повторной вставки данных
const importData = async () => {
  try {
    // Удаляем только указанную фигуру и связанный квиз
    await Figure.findByIdAndDelete(figureId);
    console.log('✅ Figure deleted successfully.');

    await Quiz.deleteMany({ relatedFigureId: figureId });
    console.log('✅ Related quiz deleted successfully.');

    // Создаем фигуру и квиз заново
    await Figure.create(figure);
    console.log('✅ Figure created successfully.');

    await Quiz.create(quiz);
    console.log('✅ Quiz created successfully.');

    process.exit();
  } catch (error) {
    console.error('❌ Error importing data:', error);
    process.exit(1);
  }
};

// Запуск функции импорта данных
importData();
