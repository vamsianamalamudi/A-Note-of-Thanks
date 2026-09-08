export type Person = {
  id: string;
  name: string;
  message: string;
  insideJoke?: string;
  enabled?: boolean;
};

export const defaultPeople: Person[] = [
  {
    id: 'neha.p',
    name: 'Neha',
    message:
      'You always brought calm to the chaos. The kind of energy that made hard days feel lighter, and even the messiest problems feel manageable when you were around.\n\nI always appreciated how thoughtful you were, how quick to help, and how easy it was to trust you with anything.\n\nI am genuinely glad our paths crossed, and I am going to miss the steady warmth you brought to the room.',
    insideJoke: 'The “one more quick question” that somehow became a 45-minute real conversation.',
    enabled: true,
  },
  {
    id: 'Akash.C',
    name: 'Akash',
    message:
      'Working with you was a reminder that good people make everything better. You brought curiosity, clarity, and a kind of grounded humor that made difficult work feel less heavy.\n\nWhether we were solving something important or just talking through the chaos, it always felt easier with you in the loop.\n\nThank you for being such a solid presence and for making the journey more fun and more human.',
    insideJoke: 'The way we both pretended to be “totally fine” while absolutely not being fine.',
    enabled: true,
  },
  {
    id: 'Apeksha.C',
    name: 'Apeksha',
    message:
      'Thank you for everything over the course of our time working together. You have been so much more than a senior to me - a true mentor, confidant, and finance specialist whenever I needed guidance. Im really going to miss our chats and your perspective. Thank you for always looking out for me. Lets definitely keep in touch!',
    insideJoke: 'Our Goa trips are core memories I will hold onto for life: \n Goa Outing #1: Where I walked away with some invaluable life lessons thanks to you \n Goa Outing #2: My farewell party that somehow spiraled into an intense, late-night Mahabharat debate!',
    enabled: true,
  },
  {
    id: 'Balu',
    name: 'Balu',
    message:
      'You made work feel more like a team and less like a task list. Your energy, honesty, and easy humor made the whole experience smoother and more enjoyable.\n\nI always respected how you showed up for people—thoughtful, reliable, and genuinely easy to work with.\n\nIt was a privilege to share this stretch of time with you, and I will carry the good parts of it with me.',
    insideJoke: '',
    enabled: true,
  },
];
