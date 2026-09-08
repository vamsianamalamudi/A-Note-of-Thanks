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
    name: 'Neha Prakash',
    message:
      'Its been an absolute blast working with you. Youve been way less of a code reviewer and way more of a bug finder—though I guess someone had to keep us honest!\n Im genuinely going to miss all our project discussions, heated arguments, and pulling your leg. On the bright side, you now get the honor of handling all the DB-Vault issues and endless pings yourself. You have got this!\n Keep me posted on how the mascot to Configspectator turns out—I expect updates. \n Lets definitely stay in touch!',
    insideJoke: '',
    enabled: true,
  },
  {
    id: 'Akash.C',
    name: 'Akash',
    message:
      'Well, "goodbye" feels a bit fake since Ill see you on the other side real soon :p \n Its been awesome watching you grow since day one. From giving you your first KT to bootstrapping and decommissioning infra together, handling RCAs, and all the team outings—its been a great run. \n You have come a long way since then! Keep crushing it, excel at the new place, and I better see that BMW in your driveway soon. See you in a bit!',
    insideJoke: 'Im never going to forget the iconic moment: \n Akash: "Bro, I have shut off BMs instead of VMs, what should I do?" \n Me: "Congratulations on your first outage, lets login to iDRAC and bring them up."',
    enabled: true,
  },
  {
    id: 'Apeksha.C',
    name: 'Apeksha Contractor',
    message:
      'Thank you for everything over the course of our time working together. You have been so much more than a senior to me - a true mentor, confidant, and finance specialist whenever I needed guidance. Im really going to miss our chats and your perspective. Thank you for always looking out for me. Lets definitely keep in touch!',
    insideJoke: 'Our Goa trips are core memories I will hold onto for life: #1: Where I walked away with some invaluable life lessons thanks to you. #2: My farewell party that somehow spiraled into an intense, late-night Mahabharat debate!',
    enabled: true,
  },
  {
    id: 'Balu',
    name: 'Balu',
    message:
      'I wanted to say a huge thank you for everything during my time at PhonePe. Youve been way less of a manager and so much more of a friend and mentor to me. \n Thank you for always having my back, keeping me motivated, and constantly supporting me. You completely redefined what leadership looks like—you showed me how a manager can build genuine friendships while still driving results and getting things done. \n Im truly grateful for your guidance and support. Lets definitely stay in touch!',
    insideJoke: '',
    enabled: true,
  },
  {
    id: 'Malhar_Sankar',
    name: 'Malhar & Sankar',
    message:
      'Hey Malhar & Sankar, \n Even though we didnt get to work together for very long, it didnt take much time to see how hardworking—and fun-loving—you both are. \n Also, thanks to you guys for our casino experience. It definitely would not have happened without you guys! \n Keep doing what you’re doing, keep crushing it, and I really hope our paths cross again in the future. Let’s stay in touch!',
    insideJoke: '',
    enabled: true,
  },
];
