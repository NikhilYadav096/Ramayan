import { assets, type Asset } from "./assets";

/** Narrative follows Valmiki's Ramayana (the earliest surviving telling). Tradition-specific additions are labelled. */

export interface StoryStage {
  id: string;
  kanda: string;
  title: string;
  summary: string;
  detail: string;
  sanskrit?: { text: string; meaning: string };
  image: Asset;
}

export const storyStages: StoryStage[] = [
  {
    id: "birth",
    kanda: "Bala Kanda",
    title: "The Birth and Early Life of Rama",
    summary:
      "In Ayodhya, King Dasharatha longs for an heir. After sacred rites, four sons are born: Rama, Bharata, Lakshmana and Shatrughna.",
    detail:
      "Rama is born to Queen Kausalya, Bharata to Kaikeyi, and the twins Lakshmana and Shatrughna to Sumitra. As a young man, Rama accompanies the sage Vishwamitra with Lakshmana to protect a sacrifice from demons, beginning his path as a warrior of dharma.",
    sanskrit: { text: "बाल काण्ड", meaning: "Bala Kanda, the Book of Youth" },
    image: assets.story.birth,
  },
  {
    id: "swayamvara",
    kanda: "Bala Kanda",
    title: "Sita Swayamvara",
    summary:
      "In Mithila, King Janaka offers his daughter Sita in marriage to the one who can string Shiva's mighty bow. Rama lifts and strings it, and it breaks.",
    detail:
      "Sita, in tradition found by Janaka in a furrow of the earth, is married to Rama. His brothers marry too: Lakshmana to Urmila, Bharata to Mandavi, Shatrughna to Shrutakirti. The family returns to Ayodhya in joy.",
    sanskrit: { text: "विवाह", meaning: "Vivaha, marriage" },
    image: assets.story.swayamvara,
  },
  {
    id: "exile",
    kanda: "Ayodhya Kanda",
    title: "Exile to the Forest",
    summary:
      "On the eve of Rama's coronation, Queen Kaikeyi claims two old boons: Bharata should be king, and Rama should live fourteen years in the forest.",
    detail:
      "Rama accepts without protest, to keep his father's word. Sita and Lakshmana choose to go with him. Dasharatha dies of grief. Bharata refuses the throne, brings Rama's sandals back to Ayodhya, and rules in his name.",
    sanskrit: { text: "वनवास", meaning: "Vanavasa, living in the forest" },
    image: assets.story.exile,
  },
  {
    id: "abduction",
    kanda: "Aranya Kanda",
    title: "The Abduction of Sita",
    summary:
      "In the forest of Panchavati, Ravana, king of Lanka, tricks Rama away with an illusory golden deer and carries Sita off by force.",
    detail:
      "The aged vulture Jatayu tries to stop Ravana and is mortally wounded. Rama and Lakshmana return to an empty hut, and begin a desperate search.",
    sanskrit: { text: "सीताहरण", meaning: "Sitaharana, the taking of Sita" },
    image: assets.story.abduction,
  },
  {
    id: "search",
    kanda: "Kishkindha Kanda",
    title: "The Search for Sita",
    summary:
      "Guided by the dying Jatayu and others met on the way, Rama reaches Kishkindha and forms an alliance with the vanara king Sugriva.",
    detail:
      "At Lake Pampa, Rama and Lakshmana meet Hanuman, Sugriva's minister. Rama helps Sugriva regain his kingdom, and Sugriva sends search parties in all four directions to find Sita.",
    sanskrit: { text: "मैत्री", meaning: "Maitri, friendship" },
    image: assets.story.search,
  },
  {
    id: "hanuman",
    kanda: "Sundara Kanda",
    title: "Hanuman's Journey to Lanka",
    summary:
      "Hanuman leaps across the ocean, overcoming obstacles on the way, and finds Sita in the Ashoka grove, still faithful and unbroken.",
    detail:
      "He gives her Rama's ring as a sign, takes back her message, and in Lanka his tail is set alight, with which he scorches parts of the city. He returns with the news that Sita lives.",
    sanskrit: { text: "सुन्दर काण्ड", meaning: "Sundara Kanda, the Beautiful Book" },
    image: assets.story.hanuman,
  },
  {
    id: "setu",
    kanda: "Yuddha Kanda",
    title: "The Building of the Ram Setu",
    summary:
      "At the sea's edge, the vanara army builds a bridge across the water, guided by the skilled builder Nala.",
    detail:
      "Ravana's brother Vibhishana, who had urged returning Sita, leaves Lanka and joins Rama. Today, Ram Setu is also the name of a chain of shoals between India and Sri Lanka; how it relates to the epic is a matter of belief rather than settled history.",
    sanskrit: { text: "सेतु", meaning: "Setu, a bridge" },
    image: assets.story.setu,
  },
  {
    id: "battle",
    kanda: "Yuddha Kanda",
    title: "The Battle of Lanka",
    summary:
      "A long war follows. Great warriors fall on both sides, among them Kumbhakarna and Indrajit, before Rama confronts Ravana himself.",
    detail:
      "When Lakshmana is gravely wounded, Hanuman brings a mountain of healing herbs. In the end Rama defeats Ravana, and Vibhishana is made king of Lanka. Sita is restored to Rama; retellings differ in how that reunion is told.",
    sanskrit: { text: "युद्ध", meaning: "Yuddha, war" },
    image: assets.story.battle,
  },
  {
    id: "return",
    kanda: "Yuddha Kanda",
    title: "The Return to Ayodhya",
    summary:
      "The fourteen years end. Rama, Sita and Lakshmana fly home in the celestial chariot Pushpaka, and Bharata welcomes them with joy.",
    detail:
      "Rama is crowned, and his reign becomes the ideal of just rule, Rama Rajya. Many in India remember the homecoming through Diwali, a connection rooted in tradition rather than in Valmiki's text.",
    sanskrit: { text: "राम राज्य", meaning: "Rama Rajya, the reign of Rama" },
    image: assets.story.return,
  },
];

export interface Character {
  id: string;
  name: string;
  epithet: string;
  intro: string;
  role: string;
  qualities: string[];
  significance: string;
  sanskrit?: { text: string; meaning: string };
  image: Asset;
}

export const characters: Character[] = [
  {
    id: "rama",
    name: "Rama",
    epithet: "The prince of Ayodhya",
    intro: "Eldest son of Dasharatha, remembered as the ideal of a person who keeps his word and honours his duties.",
    role: "The hero of the epic. He accepts exile, searches for Sita, and defeats Ravana. In Hindu tradition he is revered as an avatar of Vishnu.",
    qualities: ["Truthful", "Composed", "Dutiful", "Compassionate"],
    significance: "Rama's life asks a hard question: what does it cost to honour your duties, and who pays? Readers admire him and also debate some of his choices.",
    sanskrit: { text: "मर्यादा पुरुषोत्तम", meaning: "Maryada Purushottama, the person of highest conduct" },
    image: assets.characters.rama,
  },
  {
    id: "sita",
    name: "Sita",
    epithet: "Daughter of Mithila",
    intro: "Princess of Mithila and wife of Rama, said to have been found by King Janaka in a furrow of the field.",
    role: "She chooses the forest over the palace, endures captivity in Lanka, and refuses Ravana's advances throughout.",
    qualities: ["Resolute", "Dignified", "Compassionate", "Courageous"],
    significance: "Sita embodies steadfastness under extreme trial. Her story, especially its later chapters, continues to inspire reflection and debate on justice and dignity.",
    sanskrit: { text: "सीता", meaning: "Sita, 'the furrow'" },
    image: assets.characters.sita,
  },
  {
    id: "lakshmana",
    name: "Lakshmana",
    epithet: "The devoted brother",
    intro: "Rama's younger brother, who gives up palace comforts to serve him in the forest.",
    role: "Guards Rama and Sita through fourteen years of exile and fights beside Rama in Lanka.",
    qualities: ["Loyal", "Fierce", "Selfless", "Vigilant"],
    significance: "Lakshmana stands for love expressed as service. His loyalty is a model of brotherhood in the epic.",
    sanskrit: { text: "सेवा", meaning: "Seva, selfless service" },
    image: assets.characters.lakshmana,
  },
  {
    id: "hanuman",
    name: "Hanuman",
    epithet: "Messenger of Rama",
    intro: "A vanara hero, minister of Sugriva, endowed with extraordinary strength, intellect and humility.",
    role: "Crosses the ocean, finds Sita, burns part of Lanka, and brings the healing herbs that revive Lakshmana.",
    qualities: ["Devoted", "Intelligent", "Humble", "Courageous"],
    significance: "In Valmiki he is a brilliant envoy and a loyal friend. Devotional traditions later elevated him into a figure of pure bhakti, widely worshipped today.",
    sanskrit: { text: "भक्ति", meaning: "Bhakti, devotion" },
    image: assets.characters.hanuman,
  },
  {
    id: "ravana",
    name: "Ravana",
    epithet: "King of Lanka",
    intro: "A mighty, learned and powerful ruler, depicted with ten heads, who ruled Lanka.",
    role: "The antagonist. He abducts Sita and refuses all counsel to return her, leading to his own downfall.",
    qualities: ["Powerful", "Learned", "Proud", "Unrestrained"],
    significance: "Ravana shows how great gifts can be undone by arrogance and desire. Some regional traditions and communities view him with greater sympathy or reverence.",
    sanskrit: { text: "अहंकार", meaning: "Ahamkara, ego" },
    image: assets.characters.ravana,
  },
  {
    id: "bharata",
    name: "Bharata",
    epithet: "The reluctant king",
    intro: "Kaikeyi's son, who is offered a kingdom his mother won for him and refuses it.",
    role: "Goes to the forest to beg Rama to return. When Rama declines, Bharata places Rama's sandals on the throne and rules as his steward.",
    qualities: ["Humble", "Righteous", "Loyal", "Restrained"],
    significance: "Bharata represents power held without possession, a ruler who treats authority as trust.",
    sanskrit: { text: "त्याग", meaning: "Tyaga, renunciation" },
    image: assets.characters.bharata,
  },
  {
    id: "dasharatha",
    name: "Dasharatha",
    epithet: "King of Ayodhya",
    intro: "Ruler of Kosala, father of Rama, Bharata, Lakshmana and Shatrughna.",
    role: "Bound by his promise to Kaikeyi, he must send Rama into exile, and dies of grief soon after.",
    qualities: ["Loving", "Bound by promise", "Noble", "Vulnerable"],
    significance: "His tragedy is the cost of a promise made without foresight, and of love torn between duty and affection.",
    sanskrit: { text: "वचन", meaning: "Vachana, a vow or promise" },
    image: assets.characters.dasharatha,
  },
  {
    id: "kaikeyi",
    name: "Kaikeyi",
    epithet: "The queen of the boons",
    intro: "Dasharatha's queen and Bharata's mother, once deeply fond of Rama.",
    role: "Influenced by her maid Manthara, she asks the king for two boons that send Rama into exile and place Bharata on the throne.",
    qualities: ["Spirited", "Protective", "Impulsive", "Persuadable"],
    significance: "Kaikeyi's choice sets the whole epic in motion. Retellings explore her motives in many ways, from jealousy to a mother's fear for her son.",
    sanskrit: { text: "वर", meaning: "Vara, a boon" },
    image: assets.characters.kaikeyi,
  },
];

export interface Moment {
  id: string;
  chapter: string;
  title: string;
  text: string;
  image: Asset;
}

export const moments: Moment[] = [
  { id: "m-wedding", chapter: "I", title: "Rama and Sita's Marriage", text: "In Mithila, two families are joined. A bow is broken, a garland given, and a journey begins that neither could imagine.", image: assets.moments.wedding },
  { id: "m-exile", chapter: "II", title: "The Forest Exile", text: "Rama, Sita and Lakshmana step out of the palace and into fourteen years of forest life, carrying only their word and each other.", image: assets.moments.exile },
  { id: "m-hs", chapter: "III", title: "Hanuman Meets Sita", text: "In the Ashoka grove, a small figure in the branches speaks Rama's name. After long silence, Sita hears hope.", image: assets.moments.hanumanSita },
  { id: "m-leap", chapter: "IV", title: "Hanuman's Journey to Lanka", text: "Where the land ends, Hanuman does not. He rises over the sea toward an island no one has crossed to find.", image: assets.moments.hanumanLeap },
  { id: "m-setu", chapter: "V", title: "The Construction of Ram Setu", text: "An army of vanaras carries stone after stone to the sea, and a bridge appears where there was only water.", image: assets.moments.setu },
  { id: "m-battle", chapter: "VI", title: "The Battle of Lanka", text: "War arrives at the gates of Lanka. In painted folios it is a storm of banners, bows and chariots, and in the epic, a reckoning.", image: assets.moments.battle },
  { id: "m-return", chapter: "VII", title: "Rama's Return to Ayodhya", text: "Fourteen years complete. A city waits with lamps and open gates, and the long exile ends in a homecoming.", image: assets.moments.return },
];

export interface Teaching {
  id: string;
  sanskrit: string;
  roman: string;
  title: string;
  text: string;
}

export const teachings: Teaching[] = [
  { id: "dharma", sanskrit: "धर्म", roman: "Dharma", title: "Dharma", text: "Duty, righteousness, the right way of living. In the epic, it is rarely simple. Characters must weigh competing duties to parents, spouses, subjects and conscience." },
  { id: "satya", sanskrit: "सत्य", roman: "Satya", title: "Truth", text: "Keeping one's word is central. Dasharatha's promise and Rama's acceptance of it drive the plot, and show both the strength and the cost of honouring a vow." },
  { id: "bhakti", sanskrit: "भक्ति", roman: "Bhakti", title: "Devotion", text: "Hanuman's service and Shabari's welcome show devotion as wholehearted, humble love. Later devotional traditions made this a major theme." },
  { id: "shaurya", sanskrit: "शौर्य", roman: "Shaurya", title: "Courage", text: "From Sita's composure in captivity to Hanuman's leap over the sea, courage in the Ramayana is as much steadiness as strength." },
  { id: "nishtha", sanskrit: "निष्ठा", roman: "Nishtha", title: "Loyalty", text: "Lakshmana stays beside Rama, Bharata guards his throne, Vibhishana chooses what he believes is right. Loyalty runs in many directions." },
  { id: "kartavya", sanskrit: "कर्तव्य", roman: "Kartavya", title: "Responsibility", text: "Every character carries obligations. The epic invites readers to consider what we owe to family, community and our own principles." },
  { id: "tyaga", sanskrit: "त्याग", roman: "Tyaga", title: "Sacrifice", text: "Thrones, comforts and years of life are given up. The epic honours sacrifice, and also lets us feel what it costs." },
  { id: "rajadharma", sanskrit: "राज धर्म", roman: "Raja Dharma", title: "Leadership", text: "A ruler's first duty is the welfare of the people. Rama Rajya endures as a symbol of just governance, though readers debate its hardest decisions." },
  { id: "sambandh", sanskrit: "सम्बन्ध", roman: "Sambandha", title: "Relationships", text: "Brothers, spouses, parents, friends and rivals: the epic is above all about how bonds hold, strain and sometimes break." },
];
