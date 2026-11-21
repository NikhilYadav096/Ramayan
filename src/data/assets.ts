/**
 * Central asset configuration. Every image used on the site is listed here.
 * To swap in final artwork, replace the file in /public/assets/img (or change `src`) —
 * no component needs to change. Full source list: ASSET_SOURCES.md
 *
 * All images are public-domain / CC0 historical Indian paintings from Wikimedia Commons,
 * downloaded locally. `focus` is the CSS object-position used when the image is cropped.
 */
export interface Asset {
  src: string;
  alt: string;
  focus?: string;
}

const img = (name: string) => `/assets/img/${name}.jpg`;

export const assets = {
  hero: {
    src: img("hero"),
    alt: "Rama and Lakshmana on Mount Prasravana, a Mewar Ramayana painting of hills and forest, 17th century",
    focus: "50% 40%",
  },
  /** Optional looping hero video. Leave null to use the still image only. */
  heroVideo: null as null | { src: string; poster: string },
  aboutManuscript: {
    src: img("about-manuscript"),
    alt: "A folio from a Ramayana manuscript with Devanagari text and a painted scene",
    focus: "50% 50%",
  },
  closing: {
    src: img("return"),
    alt: "Rama, Sita and Lakshmana returning to Ayodhya in the Pushpaka chariot",
    focus: "50% 50%",
  },
  story: {
    birth: { src: img("birth"), alt: "King Dasharatha with his four sons", focus: "50% 40%" },
    swayamvara: { src: img("swayamvara"), alt: "Rama breaking the bow at Sita's swayamvara, painting after Raja Ravi Varma", focus: "50% 35%" },
    exile: { src: img("exile"), alt: "Rama, Sita and Lakshmana leaving the palace of Ayodhya for exile", focus: "50% 30%" },
    abduction: { src: img("abduction"), alt: "Jatayu attacks Ravana's chariot to save Sita, an early 18th-century painting", focus: "50% 50%" },
    search: { src: img("search"), alt: "Rama and Lakshmana arrive at Lake Pampa, Mewar Ramayana", focus: "50% 50%" },
    hanuman: { src: img("hanuman-flies"), alt: "Hanuman flying across the sky, Mewar Ramayana", focus: "50% 50%" },
    setu: { src: img("setu"), alt: "Rama and Lakshmana crossing the bridge to Lanka with the vanara army", focus: "50% 50%" },
    battle: { src: img("battle"), alt: "The battle at Lanka, Udaipur Ramayana, 1649–53", focus: "50% 50%" },
    return: { src: img("return"), alt: "Rama, Sita and Lakshmana returning to Ayodhya", focus: "50% 50%" },
  },
  characters: {
    rama: { src: img("char-rama"), alt: "Rama and Sita in the forest, Kangra painting, c. 1780", focus: "50% 30%" },
    sita: { src: img("char-sita"), alt: "Sita in a forest grove, Shangri Ramayana folio", focus: "20% 40%" },
    lakshmana: { src: img("char-lakshmana"), alt: "Lakshmana removing a thorn, with Rama and Sita in the forest, c. 1780", focus: "50% 40%" },
    hanuman: { src: img("char-hanuman"), alt: "Hanuman carrying the herb mountain", focus: "50% 40%" },
    ravana: { src: img("char-ravana"), alt: "The Court of Ravana, a folio from a Ramayana", focus: "50% 30%" },
    bharata: { src: img("char-bharata"), alt: "Bharata returning to Ayodhya bearing Rama's sandals", focus: "50% 50%" },
    dasharatha: { src: img("char-dasharatha"), alt: "The death of King Dasharatha, folio from a Ramayana", focus: "50% 40%" },
    kaikeyi: { src: img("char-kaikeyi"), alt: "King Dasharatha approaching Kaikeyi's chamber", focus: "50% 50%" },
  },
  moments: {
    wedding: { src: img("wedding"), alt: "The wedding procession of Rama, Mewar Ramayana", focus: "50% 50%" },
    exile: { src: img("exile"), alt: "Rama, Sita and Lakshmana leaving Ayodhya for the forest", focus: "50% 30%" },
    hanumanSita: { src: img("hanuman-sita"), alt: "Hanuman finds Sita in the Ashoka grove, Akbar's Ramayana", focus: "50% 50%" },
    hanumanLeap: { src: img("hanuman-flies"), alt: "Hanuman flies across the sky, Mewar Ramayana", focus: "50% 50%" },
    setu: { src: img("setu"), alt: "The vanara army building and crossing the bridge to Lanka", focus: "50% 50%" },
    battle: { src: img("battle"), alt: "The battle at Lanka, Udaipur, 1649–53", focus: "50% 50%" },
    return: { src: img("return"), alt: "Rama, Sita and Lakshmana returning to Ayodhya", focus: "50% 50%" },
  },
} satisfies Record<string, unknown>;
