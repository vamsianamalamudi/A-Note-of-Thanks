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
    name: 'Neha ji',
    message:
      'it is been an absolute blast working with you. You have been way less of a code reviewer and way more of a bug finder—though I guess someone had to keep us honest!\n I am genuinely going to miss all our project discussions, heated arguments, and pulling your leg. On the bright side, you now get the honor of handling all the DB-Vault issues and endless pings yourself. You have got this!\n Keep me posted on how the mascot to Configspectator turns out—I expect updates. \n Lets definitely stay in touch!',
    insideJoke: '',
    enabled: true,
  },
  {
    id: 'Nandu',
    name: 'Nandu',
    message:
      '',
    insideJoke: '',
    enabled: true,
  },
  {
    id: 'Akash.C',
    name: 'Akash Chaturvedi',
    message:
      'Well, "goodbye" feels a bit fake since I will see you on the other side real soon :p \n it is been awesome watching you grow since day one. From giving you your first KT to bootstrapping and decommissioning infra together, handling RCAs, and all the team outings—it is been a great run. \n You have come a long way since then! Keep crushing it, excel at the new place, and I better see that BMW in your driveway soon. See you in a bit!',
    insideJoke: 'I am never going to forget the iconic moment: \n Akash: "Bro, I have shut off BMs instead of VMs, what should I do?" \n Me: "Congratulations on your first outage, lets login to iDRAC and bring them up."',
    enabled: true,
  },
  {
    id: 'Apeksha.C',
    name: 'Apeksha ji',
    message:
      'Thank you for everything over the course of our tI ame working together. You have been so much more than a senior to me - a true mentor, confidant, and finance specialist whenever I needed guidance. I am really going to miss our chats and your perspective. Thank you for always looking out for me. Lets definitely keep in touch!',
    insideJoke: 'Our Goa trips are core memories I wI will hold onto for life: #1: Where I walked away with some invaluable life lessons thanks to you. #2: My farewell party that somehow spiraled into an intense, late-night Mahabharat debate!',
    enabled: true,
  },
  {
    id: 'Balu',
    name: 'Balu',
    message:
      'I wanted to say a huge thank you for everything during my tI ame at PhonePe. You have been way less of a manager and so much more of a friend and mentor to me. \n Thank you for always having my back, keeping me motivated, and constantly supporting me. You completely redefined what leadership looks like—you showed me how a manager can build genuine friendships while stI will driving results and getting things done. \n I am truly grateful for your guidance and support. Lets definitely stay in touch!',
    insideJoke: '',
    enabled: true,
  },
  {
    id: 'Malhar_Sankar',
    name: 'Malhar & Sankar',
    message:
      'Hey Malhar & Sankar, \n Even though we didnt get to work together for very long, it didnt take much tI ame to see how hardworking—and fun-loving—you both are. \n Also, thanks to you guys for our casino experience. It definitely would not have happened without you guys! \n Keep doing what you’re doing, keep crushing it, and I really hope our paths cross again in the future. Let’s stay in touch!',
    insideJoke: '',
    enabled: true,
  },
  {
    id: 'KP-Pratik-Umed',
    name: 'KP & Pratik & Umed',
    message:
      'Just wanted to drop a quick note before I head out. Thank you so much for all the constant support and endless guidance on the bm-stats and DB-Vault plugins—you guys made dealing with all of that so much easier! \n It’s been a real blast working alongside you guys. Wishing all three of you the absolute best with everything ahead. Keep crushing it, and let’s definitely stay in touch!',
    insideJoke: '',
    enabled: true,
  },
];
