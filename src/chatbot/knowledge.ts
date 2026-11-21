/**
 * Curated Ramayana knowledge base for the local "Ask Ramayana" guide.
 * Rules for editing: summarise, never invent verses or quotations. Where a detail
 * comes from a later or regional telling, say so in `note`. `source` marks the tradition.
 */
export type Source = "Valmiki" | "Valmiki & later traditions" | "Later traditions" | "Overview";

export interface KBEntry {
  id: string;
  /** Words/phrases that signal this topic. Multi-word phrases score higher. */
  keywords: string[];
  question: string;
  answer: string;
  source: Source;
  note?: string;
  followUps?: string[];
}

export const knowledgeBase: KBEntry[] = [
  {
    id: "what-is",
    keywords: ["what is ramayana", "ramayana", "about ramayana", "epic", "summary", "story", "overview", "tell me"],
    question: "What is the Ramayana?",
    answer:
      "The Ramayana is one of the two great Sanskrit epics of India, alongside the Mahabharata. It tells the story of Rama, prince of Ayodhya: his exile, the abduction of his wife Sita by Ravana, and the war to bring her back. The name means 'the journey of Rama'. Its themes include duty, truth, devotion and the bonds between people.",
    source: "Overview",
    followUps: ["Who wrote the Ramayana?", "Who was Lord Rama?"],
  },
  {
    id: "author",
    keywords: ["valmiki", "author", "who wrote", "written", "composed", "poet", "adi kavi", "kanda", "kandas", "books", "parts"],
    question: "Who wrote the Ramayana?",
    answer:
      "The Sanskrit Ramayana is traditionally attributed to the sage Valmiki, called the Adi Kavi, the 'first poet'. It is organised into seven books called kandas: Bala, Ayodhya, Aranya, Kishkindha, Sundara, Yuddha and Uttara. Scholars generally regard the Uttara Kanda, and parts of the Bala Kanda, as later additions, and the dating of the epic is debated.",
    source: "Valmiki",
    followUps: ["What are the main teachings of the Ramayana?"],
  },
  {
    id: "rama",
    keywords: ["rama", "lord rama", "who was rama", "ram", "sri ram", "raghava", "ayodhya prince"],
    question: "Who was Lord Rama?",
    answer:
      "Rama is the eldest son of King Dasharatha of Ayodhya and Queen Kausalya, and the hero of the epic. He is remembered for keeping his father's word by accepting fourteen years of exile, and for his steady sense of duty. In Valmiki's telling he is presented as an ideal human being, though the text also calls him an incarnation of Vishnu, and later traditions emphasise this divine side more strongly.",
    source: "Valmiki & later traditions",
    followUps: ["Why did Rama go into exile?", "What does Maryada Purushottama mean?"],
  },
  {
    id: "sita",
    keywords: ["sita", "janaki", "vaidehi", "who was sita", "mother sita", "wife of rama"],
    question: "Who was Sita?",
    answer:
      "Sita is the wife of Rama and princess of Mithila, the daughter of King Janaka. In the tradition she was found in a furrow while Janaka was ploughing, which is why her name means 'furrow'. She chooses to share Rama's exile, is abducted by Ravana, and remains steadfast through her captivity in Lanka.",
    source: "Valmiki",
    note: "The later part of Sita's story, after the return to Ayodhya, is in the Uttara Kanda and is told in different ways in different retellings.",
    followUps: ["Why was Sita abducted?", "Who was Ravana?"],
  },
  {
    id: "lakshmana",
    keywords: ["lakshmana", "laxman", "lakshman", "brother of rama"],
    question: "Who was Lakshmana?",
    answer:
      "Lakshmana is Rama's younger brother, son of Sumitra, and twin of Shatrughna. He chooses to accompany Rama and Sita into the forest and serves them faithfully throughout the exile. He is a symbol of loyalty and selfless service.",
    source: "Valmiki",
  },
  {
    id: "bharata",
    keywords: ["bharata", "bharat", "padukas", "sandals"],
    question: "Who was Bharata?",
    answer:
      "Bharata is Rama's younger half-brother, son of Kaikeyi. When his mother's boons made him king, he refused the throne, went to the forest to bring Rama back, and when Rama declined to break their father's word, took Rama's sandals (padukas) back and ruled as his steward from Nandigram.",
    source: "Valmiki",
  },
  {
    id: "dasharatha",
    keywords: ["dasharatha", "dashratha", "dasaratha", "father of rama", "king of ayodhya"],
    question: "Who was Dasharatha?",
    answer:
      "Dasharatha was the king of Ayodhya, in the kingdom of Kosala, and the father of Rama, Bharata, Lakshmana and Shatrughna. Bound by his promise of two boons to Kaikeyi, he was forced to send Rama to the forest, and died of grief soon after.",
    source: "Valmiki",
  },
  {
    id: "kaikeyi",
    keywords: ["kaikeyi", "kaikai", "manthara", "two boons", "boons"],
    question: "Who was Kaikeyi, and what were the two boons?",
    answer:
      "Kaikeyi was Dasharatha's queen and Bharata's mother. Influenced by her maid Manthara, she asked the king to fulfil two boons he had once promised her: that Bharata be crowned, and that Rama be exiled to the forest for fourteen years. Retellings explain her motives in different ways.",
    source: "Valmiki",
  },
  {
    id: "exile",
    keywords: ["exile", "why did rama go", "forest", "fourteen years", "14 years", "vanavasa", "banished"],
    question: "Why did Rama go into exile?",
    answer:
      "Dasharatha planned to crown Rama as heir. Just before the ceremony, Queen Kaikeyi reminded the king of two boons he owed her. She asked that Bharata be made king and Rama be sent to the forest for fourteen years. Dasharatha was heartbroken, but Rama chose to honour his father's word and left willingly. Sita and Lakshmana went with him.",
    source: "Valmiki",
    followUps: ["Who was Kaikeyi, and what were the two boons?", "Who was Bharata?"],
  },
  {
    id: "hanuman",
    keywords: ["hanuman", "hanumana", "maruti", "bajrangbali", "monkey", "vanara god"],
    question: "Who was Hanuman?",
    answer:
      "Hanuman is a vanara, a forest-dwelling being often depicted as a monkey, and a minister of Sugriva. He is known for his strength, intelligence and devotion to Rama. He leaps across the sea to Lanka, finds Sita, and later brings a mountain of healing herbs for the wounded Lakshmana. In Valmiki he is a brilliant envoy; devotional traditions later made him a central figure of bhakti, widely worshipped today.",
    source: "Valmiki & later traditions",
    followUps: ["What did Hanuman do in Lanka?"],
  },
  {
    id: "hanuman-lanka",
    keywords: ["hanuman lanka", "hanuman leap", "ashoka grove", "ashoka vatika", "ring", "tail", "sundara kanda", "burn lanka", "found sita"],
    question: "What did Hanuman do in Lanka?",
    answer:
      "Hanuman crossed the ocean, found Sita in the Ashoka grove, gave her Rama's ring as proof he was Rama's messenger, and took back a token from her. When he was captured, his tail was set on fire, and he used it to set parts of Lanka ablaze before returning to tell Rama that Sita was alive. This is told in the Sundara Kanda.",
    source: "Valmiki",
  },
  {
    id: "ravana",
    keywords: ["ravana", "ravan", "ten heads", "king of lanka", "demon king", "dashanana"],
    question: "Who was Ravana?",
    answer:
      "Ravana was the powerful king of Lanka, a learned scholar and devotee of Shiva, and the main antagonist of the epic. He is often shown with ten heads. His pride and desire led him to abduct Sita and refuse the counsel of those who urged him to return her. Some regional traditions regard him with respect or reverence.",
    source: "Valmiki & later traditions",
  },
  {
    id: "abduction",
    keywords: ["abduct", "abducted", "kidnap", "why was sita", "golden deer", "maricha", "jatayu", "panchavati", "shurpanakha"],
    question: "Why was Sita abducted?",
    answer:
      "After Rama and Lakshmana humbled Shurpanakha, Ravana's sister, in the forest, Ravana resolved to take Sita. He sent Maricha disguised as a golden deer to lure Rama away. When Lakshmana was also drawn away, Ravana came disguised as an ascetic and carried Sita off to Lanka. The vulture Jatayu tried to stop him and was fatally wounded.",
    source: "Valmiki",
  },
  {
    id: "search",
    keywords: ["sugriva", "vali", "bali", "kishkindha", "search for sita", "vanara", "vibhishana", "sampati"],
    question: "How did Rama find Sita?",
    answer:
      "Rama made an alliance with the vanara king Sugriva at Kishkindha and helped him recover his throne. Sugriva sent search parties in all four directions. Information from the vulture Sampati led Hanuman and others to the southern shore, from where Hanuman leapt to Lanka.",
    source: "Valmiki",
  },
  {
    id: "battle",
    keywords: ["battle", "war", "lanka", "yuddha", "kumbhakarna", "indrajit", "meghnad", "ravana killed", "ravana defeated"],
    question: "What happened during the battle of Lanka?",
    answer:
      "Rama's vanara army, with Sugriva, Hanuman, Angada and Lakshmana, laid siege to Lanka. Many warriors fell, including Ravana's brother Kumbhakarna and his son Indrajit. When Lakshmana was gravely wounded, Hanuman brought healing herbs from a distant mountain. Finally Rama defeated Ravana, and Vibhishana was crowned king of Lanka.",
    source: "Valmiki",
    followUps: ["What is Ram Setu?"],
  },
  {
    id: "setu",
    keywords: ["ram setu", "rama setu", "setu", "bridge", "adam's bridge", "nala", "nala setu"],
    question: "What is Ram Setu?",
    answer:
      "In the epic, Ram Setu is the bridge the vanara army built across the sea to Lanka, with the builder Nala as its architect. The same name is used today for a chain of limestone shoals between India and Sri Lanka. Whether and how the two are connected is a matter of faith and tradition, not established history.",
    source: "Valmiki & later traditions",
  },
  {
    id: "return",
    keywords: ["return", "ayodhya", "coronation", "pushpaka", "diwali", "deepavali", "rama rajya", "homecoming"],
    question: "How did the Ramayana end?",
    answer:
      "After fourteen years, Rama, Sita and Lakshmana returned to Ayodhya in the Pushpaka chariot, welcomed by Bharata and the people. Rama was crowned, and his reign, Rama Rajya, became an ideal of just rule. Diwali is celebrated by many as the festival of this homecoming, a connection that comes from tradition rather than from Valmiki's text. The Uttara Kanda continues the story afterward, including the later parts of Sita's life, in ways that are told differently across traditions.",
    source: "Valmiki & later traditions",
  },
  {
    id: "dharma",
    keywords: ["dharma", "dhamma", "meaning of dharma", "righteousness", "duty"],
    question: "What is the meaning of Dharma?",
    answer:
      "Dharma (धर्म) is a rich Sanskrit word often translated as duty, righteousness, or the right way of living. It covers moral law, personal responsibility and social obligation. In the Ramayana it is rarely simple: characters must choose between competing duties, such as a son's duty to his father, a king's to his people, and a husband's to his wife. Different schools of thought interpret it in different ways.",
    source: "Overview",
    followUps: ["What are the main teachings of the Ramayana?"],
  },
  {
    id: "teachings",
    keywords: ["teachings", "lessons", "values", "moral", "message", "main teachings", "themes", "learn"],
    question: "What are the main teachings of the Ramayana?",
    answer:
      "The epic is often read as exploring dharma (duty), satya (truth), bhakti (devotion), loyalty, sacrifice, courage and just leadership. It also shows the tensions between these: keeping a promise can bring grief, and duty can conflict with love. Readers and traditions draw different lessons, and many consider that part of its enduring value.",
    source: "Overview",
  },
  {
    id: "maryada",
    keywords: ["maryada", "maryada purushottama", "purushottama", "ideal man"],
    question: "What does Maryada Purushottama mean?",
    answer:
      "Maryada Purushottama (मर्यादा पुरुषोत्तम) is a title for Rama. Maryada means limits, propriety or honourable conduct, and Purushottama means the best of men. Together it means 'the person who upholds the highest standards of conduct'.",
    source: "Later traditions",
  },
  {
    id: "terms",
    keywords: ["satya", "bhakti", "kartavya", "tyaga", "vanara", "rakshasa", "sanskrit", "meaning of", "kanda", "vimana", "paduka"],
    question: "What do the Sanskrit terms mean?",
    answer:
      "Satya (सत्य) means truth. Bhakti (भक्ति) is loving devotion. Kartavya (कर्तव्य) is duty or responsibility. Tyaga (त्याग) is renunciation or sacrifice. Vanara (वानर) refers to the forest-dwelling beings of the story, often depicted as monkeys. Rakshasa (राक्षस) refers to Ravana's people, often translated 'demon', though in the text they are shown with courts, cities and families. A kanda (काण्ड) is a book or chapter of the epic.",
    source: "Overview",
  },
  {
    id: "versions",
    keywords: ["versions", "other ramayanas", "tulsidas", "ramcharitmanas", "kamban", "ramakien", "different", "regional", "tradition", "retelling", "retellings", "variations", "adhyatma"],
    question: "Are there different versions of the Ramayana?",
    answer:
      "Yes. Valmiki's Sanskrit epic is the earliest surviving telling, but the story has been retold in hundreds of versions across India and Asia. Well-known examples include Kamban's Tamil Iramavataram, Tulsidas's Awadhi Ramcharitmanas (a devotional retelling, 16th century), and Thai, Indonesian and Cambodian versions such as the Ramakien. Details, emphasis and even character interpretations differ between them.",
    source: "Overview",
  },
  {
    id: "shabari",
    keywords: ["shabari", "shabri", "berries"],
    question: "Who was Shabari?",
    answer:
      "Shabari was an elderly ascetic woman who welcomed Rama and Lakshmana in the forest during their search for Sita. She is remembered for her humble, devoted hospitality. The famous detail of her offering tasted berries comes from later devotional tellings; Valmiki describes her welcome and her devotion in simpler terms.",
    source: "Valmiki & later traditions",
  },
  {
    id: "vibhishana",
    keywords: ["vibhishana", "vibhishan"],
    question: "Who was Vibhishana?",
    answer:
      "Vibhishana is Ravana's younger brother. He urged Ravana to return Sita, and when his advice was rejected, he left Lanka and joined Rama. After the war he was crowned king of Lanka. He is often seen as an example of choosing dharma over family pressure.",
    source: "Valmiki",
  },
  {
    id: "agni",
    keywords: ["agni pariksha", "fire test", "uttara kanda", "sita banished", "abandoned", "controversy", "criticism"],
    question: "Why is the later part of Sita's story debated?",
    answer:
      "After the war, Sita's fidelity is questioned in some tellings, and in the Uttara Kanda she is later separated from Rama again. These episodes are among the most debated in the epic. Different traditions, scholars and communities read them differently, and some retellings alter or omit them. I'd rather not give a single verdict; reading several versions is the best way to explore them.",
    source: "Valmiki & later traditions",
  },
  {
    id: "sahayak",
    keywords: ["shatrughna", "sumitra", "kausalya", "kaushalya", "janaka", "urmila"],
    question: "Who are the other family members?",
    answer:
      "Kausalya was Dasharatha's senior queen and Rama's mother. Sumitra was the mother of Lakshmana and Shatrughna. Janaka was king of Mithila and Sita's father. Urmila, Sita's sister, married Lakshmana. Mandavi married Bharata and Shrutakirti married Shatrughna. For more on any one of them, ask by name.",
    source: "Valmiki",
  },
];

export const suggestedQuestions = [
  "Who was Lord Rama?",
  "Why did Rama go into exile?",
  "Who was Hanuman?",
  "Why was Sita abducted?",
  "What is the meaning of Dharma?",
  "What happened during the battle of Lanka?",
  "What are the main teachings of the Ramayana?",
];
