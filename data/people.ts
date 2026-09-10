export type Person = {
  id: string;
  name: string;
  message: string;
  insideJoke?: string;
  enabled?: boolean;
};

export const defaultPeople: Person[] = [
  {
    id: 'Krishnan',
    name: 'Krishnan',
    message:
      'Beyond your incredible technical depth, thank you for always being so approachable and carrying that signature warm, smiling face no matter how chaotic things got. It’s been an absolute privilege working under your leadership.',
    insideJoke: 'When the entire SREs & Devs was glued to a call trying to figure out what went wrong on an Edge. You dropped into the call and pinpointed it was an nf_conntrack issue on Edge Nginx box within one minute flat. That was the moment I thought, "Yep, that\'s exactly why he\'s Head of Engineering.',
    enabled: true,
  },
  {
    id: 'Prathap',
    name: 'Prathap',
    message:
      'I couldn’t head out without saying a massive thank you. As my very first manager, you set the absolute gold standard—cool, sportive, and somehow always armed with a solution no matter what broke.​ \n I don\'t know how you did it, but you never once got irritated, no matter how many silly doubts I brought to you day after day. You answered every single one with so much patience. I still remember how genuinely thrilled I was to set up the SmokePing tool and see those dashboards live for the first time—that was such a huge milestone for me early on!​ \n Thank you for setting me up for success right from day one. I really hope our paths cross again down the road. Let’s stay in touch!',
    insideJoke: '',
    enabled: true,
  },
  {
    id: 'Nandhu',
    name: 'Nandu',
    message:
      'I couldn’t leave without telling you how much your leadership has meant to me. You are easily the most chill manager I’ve ever worked with—colder than ice! \n No matter what hit the fan, you always stood in front of us like a brick wall and took all the pressure, criticism, and shouting so the team didn\'t have to. I will always be incredibly grateful for that shield. \n Also, thanks for DB-Vault—it was your brilliant idea and my privilege to build it out! If you ever start your own company in the future, just say the word. One call and I’m joining immediately, no second thoughts. \n Thank you for everything, and let’s stay connected!',
    insideJoke: '',
    enabled: true,
  },
  {
    id: 'Balu',
    name: 'Balu',
    message:
      'I wanted to say a huge thank you for everything during my time at PhonePe. You have been way less of a manager and so much more of a friend and mentor to me. \n Thank you for always having my back, keeping me motivated, and constantly supporting me. You completely redefined what leadership looks like—you showed me how a manager can build genuine friendships while still driving results and getting things done. \n I am truly grateful for your guidance and support. Lets definitely stay in touch!',
    insideJoke: '',
    enabled: true,
  },
  {
    id: 'Apeksha.C',
    name: 'Apeksha ji',
    message:
      'Thank you for everything over the course of our time working together. You have been so much more than a senior to me - a true mentor, confidant, and finance specialist whenever I needed guidance. I am really going to miss our chats and your perspective. Thank you for always looking out for me. Lets definitely keep in touch!',
    insideJoke: 'Our Goa trips are core memories I will hold onto for life: #1: Where I walked away with some invaluable life lessons thanks to you. #2: My farewell party that somehow spiraled into an intense, late-night Mahabharat debate!',
    enabled: true,
  },
  {
    id: 'neha.p',
    name: 'Neha ji',
    message:
      'DESERVES TO BE CFO \n It is been an absolute blast working with you. You have been way less of a code reviewer and way more of a bug finder :P \n I am genuinely going to miss all our project discussions, heated arguments, and pulling your leg. On the bright side, you now get the honor of handling all the DB-Vault issues and endless pings yourself. You have got this!\n Keep me posted on how the mascot to Configspectator turns out. \n Lets definitely stay in touch!',
    insideJoke: '',
    enabled: true,
  },
  {
    id: 'Akash.C',
    name: 'Akash Chaturvedi',
    message:
      'Well, "goodbye" feels a bit fake since I will see you on the other side real soon :p \n it is been awesome watching you grow since day one. From giving you your first KT to bootstrapping and decommissioning infra together, handling RCAs, and all the team outings—it is been a great run. \n You have come a long way since then! Keep crushing it, excel at the new place, and I better see that BMW in your driveway soon. See you in a bit!',
    insideJoke: 'Akash: "Bro, I have shut off BMs instead of VMs, what should I do?" \n Me: "Congratulations on your first outage, lets login to iDRAC and bring them up."',
    enabled: true,
  },
  {
    id: 'Malhar_Sankar',
    name: 'Malhar & Sankar',
    message:
      'Even though we didn\'t get to work together for very long, it didn\'t take much time to see how hardworking—and fun-loving—you both are. \n Also, thanks to you guys for our casino experience. It definitely would not have happened without you guys! \n Keep doing what you’re doing, keep crushing it, and I really hope our paths cross again in the future. Let’s stay in touch!',
    insideJoke: '',
    enabled: true,
  },
  {
    id: 'AJ',
    name: 'AJ',
    message:
      'As my very first senior, mentor, workaholic guide, and confidant, you’ve had a massive impact on my career. \n You single-handedly building the UPI infrastructure back in the day is the stuff of legends. \n More than anything, you were the one person in the office I could trust blindly on any given day, whether I needed tech guidance or personal advice. Thank you for always having my back.\n Let’s definitely stay in touch!',
    insideJoke: 'During Y** PSP downtime—while the rest of us went off to play football, you and Nandhu were grinding away, breaking your heads to bring UPI back online!',
    enabled: true,
  },
  {
    id: 'Sachin',
    name: 'Sachin',
    message:
      '​First off, I will always be grateful to you for being the reason for PhonePe coming to Atria!  \n ​It’s crazy to think we started out as intern project partners and came full circle to end up as project partners again on Configspectator. Good luck holding down the fort with Configspectator—especially with Neha’s sharp eye finding every single bug! \n ​It’s been an awesome run working alongside you. Wishing you the absolute best, and let’s definitely stay in touch!',
    insideJoke: '',
    enabled: true,
  },
  {
    id: 'Prabhjot-Mishra',
    name: 'Prabhjot & Mishra',
    message:
      'Just wanted to drop a note before I head out. You both are not just incredibly hardworking, but genuinely kind-hearted souls. Don\'t ever change that about yourselves—keep that same energy and keep excelling in everything you do. \n It’s been a pleasure being around you guys. Wishing you both the absolute best ahead, and let’s definitely stay in touch!',
    insideJoke: '',
    enabled: true,
  },
  {
    id: 'Sid',
    name: 'Sid ji',
    message:
      'Since we missed your child marriage, the least you can do is invite us to your kid’s wedding so I can finally get my Rajasthan trip! \n In all seriousness, it’s been so much fun working with you and hanging out during team outings. \n Keep being awesome, and make sure you keep in touch (especially when that trip plan gets finalized)!',
    insideJoke: '',
    enabled: true,
  },
  {
    id: 'Jothi-Prashant-AD',
    name: 'AD & Jothi & Prashant',
    message:
      'Though we didn\'t get to work together much, I really enjoyed our chats during team outings and in the pantry. Hope our paths cross again down the road. Wishing you all the best and have a great time ahead! Let\'s stay in touch!',
    insideJoke: '',
    enabled: true,
  },
  {
    id: 'Prajwal-Rohan',
    name: 'Prajwal & Rohan',
    message:
      'Just wanted to drop a quick note before I head out. You guys are super hardworking and absolute solid engineers to have on the team. Keep up that same energy! \n ​Wishing you both all the very best for the future. \n ​(And Prajwal—I haven\'t forgotten about your referral treat yet!) \n ​Let\'s stay in touch!',
    insideJoke: '',
    enabled: true,
  },
  {
    id: 'AT',
    name: 'AT',
    message:
      '​The resident Nomad, Old Monk connoisseur, and legitimately a guy who knows everything about everything on Earth—it’s been an absolute privilege learning from you! \n ​Thank you for being such an awesome mentor and guide, both in and outside of work. All those knowledge-sharing sessions made a huge impact on me, and I’ll always be grateful for your time and advice. \n ​And don\'t worry, I am definitely bugging you when it\'s time to set up my Auro 3D system! and let’s make sure we stay in touch!',
    insideJoke: '',
    enabled: true,
  },
  {
    id: 'GG',
    name: 'GG ji',
    message:
      'I couldn’t leave without saying a proper thank you! I’m so grateful for all the KTs you gave us early on and your endless patience in answering every single silly doubt without ever batting an eye. \n It’s been awesome watching your journey here—from SRE-2 all the way to EM, and from being single to becoming a proud father of one! You’ve achieved so much, and it’s been a real pleasure working with you. \n Thank you for everything, GG ji. Wishing you and your family all the happiness ahead, and let’s definitely stay in touch!',
    insideJoke: '',
    enabled: true,
  },
  {
    id: 'Satyendra-Tarak',
    name: 'Satyendra & Tarak',
    message:
      'I couldn\'t leave without saying a quick thanks. I really appreciate all your guidance during my time here—it was a real pleasure working with you. Wishing you all the best for everything ahead, and let’s definitely stay in touch!',
    insideJoke: '',
    enabled: true,
  },
  {
    id: 'Sahil',
    name: 'Sahil',
    message:
      'PhonePe’s resident Shayari King and top singer—I couldn’t leave without dropping a message for you! \n रुकती नहीं यह ज़िंदगी किसी के जाने से, \n पर मज़ा तो आता है तेरे साथ महफ़िल जमाने से! \n केरल की ट्रिप और तेरी शायरी याद रहेगी हमेशा, \n चल मिलते हैं फिर किसी नए बहाने से! \n That Kerala trip was an absolute blast with you! Thanks for always bringing the music, the poetry, and the good vibes to the team. \n Keep singing, keep dropping those wah-wah Shayari moments, and let’s definitely stay in touch!',
    insideJoke: '',
    enabled: true,
  },
  {
    id: 'Shivam',
    name: 'Shivam',
    message:
      '​PhonePe’s resident singer. \n ​First off, don\'t even think about forgetting me when it comes to that Philippines wedding invitation! Just so you know, even if you "forget" to send the invite, I’m showing up anyway. \n ​On a serious note, you are truly such a kind, sweet soul. Don\'t ever change that about yourself, and keep excelling in everything you do in life. \n ​Oh, and now that I’m heading out, you officially have full permission to trouble Neha with all your DB-Vault issues! \n ​Wishing you all the very best, and let’s definitely stay in touch!',
    insideJoke: '',
    enabled: true,
  },
  {
    id: 'Udeshya',
    name: 'Udeshya',
    message:
      '​I couldn’t leave without dropping a note for the official Bluff Master and hands-down the kindest soul at PhonePe! \n It’s been an absolute pleasure working with you and hanging out. Just remember, you’re not getting off the hook—you owe us a hosting session at your heavenly house someday, and I’m definitely holding you to that! \n Keep being the awesome, genuine person you are. Wishing you all the success in the world, and let’s definitely stay in touch!',
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
  {
    id: 'Mannoj',
    name: 'Mannoj',
    message:
      'I couldn’t leave without thanking you properly. As one of my very first seniors, you played a huge role in shaping how I work today. \n On a serious note, back when you used to question the why behind every single thing I did, I’ll admit I used to get so frustrated. But looking back, it forced me to prepare thoroughly every time. That relentless reasoning completely upgraded my mindset on problem-solving, and I’m so grateful for it. \n Thanks for everything, Mannoj. I really hope our paths cross again!',
    insideJoke: 'Burzin pulling your leg for spending more time in the recreation room than at your desk!',
    enabled: true,
  },
  {
    id: 'Varun',
    name: 'Varun',
    message:
      'As one of my very first teammates and seniors, thank you for training me and helping me become the engineer I am today. \n It’s been an absolute privilege working with and learning from you. Hope our paths cross again down the road—let\'s definitely stay in touch!',
    insideJoke: 'Deliberately volunteering for night activities just so you could stream football matches while running DB alters! Elite multitasking !!',
    enabled: true,
  },
  {
    id: 'Reeshna-Hans',
    name: 'Reeshna & Hans',
    message:
      '​First off, huge thanks for saving the day during my first outage on a Friday night! :p \n Beyond the fire-fighting, I truly appreciate your endless patience in answering all my silly doubts and guiding me through my journey at PhonePe. I learned a lot from both of you. I really hope our paths cross again!',
    insideJoke: '',
    enabled: true,
  },
  {
    id: 'Rahul',
    name: 'Rahul',
    message:
      '​It’s been awesome working with you! I still remember dumping tons of KT on you for that BK1 setup back in the day, but watching your growth since then has been incredible. \n ​Going from contractor to FTE to EM is a serious hustle, and you earned every bit of it. Keep that momentum going! It’s been a real pleasure working with you—let’s definitely stay in touch.',
    insideJoke: '',
    enabled: true,
  },
  {
    id: 'Jeb',
    name: 'Jeb',
    message:
      '​I could not leave without reaching out to say thank you. Back when you were single-handedly managing the entire HDP stack, I used to look up to you and genuinely thought, "I want to be like him someday."​ \n You were actually the one who gave me my very first HDP task! (I can not remember if it was the Ambari setup or the Kafka connector salting, but it was definitely interesting back then for me.)​ \n Thank you for being such an inspiration early in my journey here. I really appreciate the impact you had on my growth. Let\'s definitely stay in touch!.',
    insideJoke: '',
    enabled: true,
  },
  {
    id: 'Merwin-Tharun-Madhav',
    name: 'Merwin & Tharun & Madhav',
    message:
      'Last but definitely not least—my OG batchmates! \n From generating our very first SSH keys together at PhonePe to now seeing you guys lead different verticals, it’s been an absolutely crazy journey. Watching all of us grow alongside each other has been one of the best parts of being here. \n Thanks for being awesome batchmates and friends through it all. I really hope our paths cross again down the road. Let’s definitely keep in touch and catch up soon!',
    insideJoke: '',
    enabled: true,
  },
  {
    id: 'Devs',
    name: 'Devs - Pincode aka PBS, NPE, CCD, Web, FRA, CSX, Ex-UPI, Ex-Ins ',
    message:
      'Pincode a.k.a PBS - Salil, Ekta, Tilak, Aditi, Tushar, Manuj \n Npe - Harsh \n CCD - Sarang, Dhiraj, Shivanshu, Utkarsh, Yash, Geetika \n Web - Ankur, Soumyashis \n Ex-UPI - Ajinkya, Vishal \n Ex-Ins - Bobby, Chaitanya \n It was absolute bliss working with you all! Hopefully, I closed all my tickets on time. In case you ever need further assistance on anything I left behind, feel free to trouble Nandu, Balu, Apeksha, Neha, Malhar, or Sankar. :p\n Thanks for all the support, and hope our paths cross again!',
    insideJoke: '',
    enabled: true,
  },
];
