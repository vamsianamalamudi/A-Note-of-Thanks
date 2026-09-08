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
      'You have this rare ability to make people feel seen without ever making a scene. Your kindness, practicality, and warmth have made a serious impact on the way this chapter felt.\n\nYou brought so much sincerity to everything, and somehow always managed to keep things light even when work was busy.\n\nI am grateful for the conversations, the support, and the small moments that ended up meaning a lot.',
    insideJoke: 'The time we both agreed a problem was “not ideal” and then immediately went into full problem-solving mode.',
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
