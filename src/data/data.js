import leader1 from '../images/leader1.jpg';
import leader2 from '../images/leader2.jpg';
import about1 from '../images/about1.png';
import about2 from '../images/about2.png';
import retreat1 from '../images/service1.png';
import retreat2 from '../images/service2.png';
import retreat3 from '../images/service3.png';
import review1 from '../images/1.PNG';
import review2 from '../images/2.PNG';
import review3 from '../images/3.PNG';
import review4 from '../images/4.PNG';
import review5 from '../images/5.PNG';
import service1 from '../images/service1.svg';
import service2 from '../images/service2.svg';
import service3 from '../images/service3.svg';
import service4 from '../images/service4.svg';
import service5 from '../images/service5.svg';

export const navItems = [
  { title: 'home', href: '/' },
  { title: 'about', href: '/about' },
  { title: 'services', href: '/services' },
];

export const leaders = [
  {
    img: leader1,
    name: 'Valentyna Bukovska',
    position: 'psychotherapist',
    link: '/about#valentyna',
    descr:
      "Will help to restore contact with one's inner world, achieve inner balance and master the skills of emotional regulation in the format of group work",
  },
  {
    img: leader2,
    name: 'Lidiia Oliiarnyk',
    position: 'choreographer and dance teacher',
    link: '/about#lidiia',
    descr:
      'Will help to restore contact with and listen to your body while learning to recognize signals from our body',
  },
];

export const about = [
  {
    id: 'valentyna',
    img: about1,
    photo: 'arch',
    name: 'Valentyna Bukovska',
    position: 'Psychotherapist',
    descr:
      'I am a psychotherapist specializing in emotionally focused therapy, crisis psychology, trauma therapy and business psychology. Master degree in psychology A mediator – specialist in the peaceful resolution of conflicts. Experience in the field of psychotherapy and corporate psychology – more than 13 years. Extensive experience in conducting individuial sessions and trainings Working with various categories of clients – corporate, military and victims of war in Ukraine (from 2014 to the present), working with families and individual clients.',
    listTitle: 'Member of professional organisations:',
    list: [
      'British Emotionally Focused Therapy Centre',
      'European Society for Traumatic Stress Studies',
      'Ukrainian Assosiation of Emotionally Focused Therapy',
      'Ukrainian Assosiation of Specialists of overcoming the traumatic events',
    ],
  },
  {
    id: 'lidiia',
    img: about2,
    photo: 'leaf',
    name: 'Lidiia Oliiarnyk',
    position: 'Choreographer, dance teacher',
    descr:
      'Everything we have in our life is manifested in our body. That is why maintaining our body is a necessary part of maintaining our mental well-being. Body support through dance is the most effective and accepted way of taking care of your body I am a professional dancer and choreographer. My dancing journey commenced at the age of 5. I trained people of different ages and in different countries of the world: Ukraine, Korea, Croatia, England. I will help you to feel your body, to establish a connection with the muscles, to feel toned. Dancing helps us to distract ourselves from reality and move to a parallel world where only you and music exist. Nothing helps you to reset your mind and body better than completely focus on yourself for awhile.',
  },
];

export const helpList = [
  'Personal problems',
  'Family psychotherapy and relationship problems',
  'Crisis and recovery from psychotraumatic situations',
  'Fears, anxieties',
  'Apathy and depression',
  'Despair and feeling of powerlessness',
  'Child-parent relations',
  'Self-esteem problems',
  'Intrusive thoughts',
  'Experiencing negative emotions and feelings',
  'Difficulties in communication with other people',
];

export const retreats = [
  {
    title:
      'Psychological retreat "The pleasure of being in tune with yourself and your body"',
    img: retreat1,
    text: [
      'A space where a complete psychological reset and self-restoration awaits you.',
      'In a pleasant process, we provide you with an opportunity to:',
      [
        '- hear yourself and accept yourself',
        '- regulate your condition and recover qualitatively after stressful or unpleasant situations',
        '- find channels of resources within yourself and in the outside world',
        '- understand and realize your true values and priorities',
        "- establish connections with your body and learn to feel and respond to your body's signals",
      ],
      'This wonderful event is suitable for everyone who feels tired from everything that happens in life:',
      [
        '- who want to become more attentive to themselves and learn to live with a healthy focus on themselves',
        '- who want to feel harmony in their life and have additional resources for a happy life',
        '- for anyone who wants to receive more enjoyment out of life every day and easily cope with daily problems',
      ],
      'How we will achieve such results:',
      [
        '- 3 days in a beautiful venue and peaceful surroundings, with complete attention to yourself. While working internally on improving your connection with yourself and your body',
      ],
    ],
  },
  {
    title: 'Psychological retreat "The power of love" for couples”',
    img: retreat2,
    text: [
      'A space where you and your loved one can immerse yourself in the power of love and feel the happiness of being in a relationship with each other.',
      'This event is ideal for couples (married, in long term partnership and those who intend to get married) who want to better understand themselves in the context of relationships and understand their partners. This event will be extremely useful for your relationship if you already have questions about building a harmonious relationship or improving it.',
      'If you can already recognize the presence of problems or difficulties in your relationship - then this is the measure that will be the key for you to return to a happy relationship full of love and mutual understanding.',
      'What you will get, as a result of attending this unique event',
      [
        '- a deep understanding of relationships',
        '- new understanding of the peculiarities and uniqueness of your relationship',
        '- you will be able to see and understand the reasons and possible points of discord in your relationship',
        '- you will spend time in contact with yourself, each other and other couples, whose experience will be invaluable for the development of your relationship',
        '- gain a better understanding of how to harmonize your relationship - you will be able to understand what is the most difficult for you in a relationship, while finding new ways for your partner to understand it, and how you can both cope with it together. ',
      ],
      'Through this process you will be able to get to know and understand each other better.',
      '3 days a beautiful venue and peaceful surroundings, delving into the topic of love and the happiness of being in a relationship.',
      'Immersion in the specifics of building strong and happy relationships. Working through negative experiences or psychological traumas that do not provide an opportunity to build happy relationships.',
      '',
    ],
  },
  {
    title:
      'Psychological retreat "The power of love will save the world " for people who seek to create a harmonious relationship.',
    img: retreat3,
    text: [
      'An incredible space where we will fully immerse ourselves in the topic of the power of love and the role of love in our lives.',
      'It is here that each of you will be able to understand and deeply realize - what love means to you, what it means to love to you and what it means to you to be loved.....',
      'It is at this event that we will be able to invite love into our lives and begin to fully use the power of love in our own lives.',
      'This event is suitable for everyone who feels ready and wants to feel the power of love in their life and enjoy it.',
      'This is exactly the place where you need to be if you are ready to love yourself. To build plans for a happy future relationship full of love or to feel even more the power of love in your relationships.',
      'If you want to feel and control the power of love in every part of your life in contact with all the people who dear to you.',
      '3-5 days a beautiful venue and peaceful surroundings, delving into the topic of love and the happiness of being in a relationship.',
      'Immersion in the specifics of building strong and happy relationships. Working through negative experiences or psychological traumas that do not provide an opportunity to build happy relationships.',
    ],
  },
];

export const reviews = [
  {
    img: review2,
    name: 'Anna Krasnuk',
    text: "I can buy myself flowers. I can really buy myself flowers and feel completely happy about it. I realised that I could love myself and show it to myself. I can do things for myself, and I should feel happy about this. I can and should take care of myself because I am the most important person in my life. I used to do a lot of good things for other people. I used to take care of many people in my life. Now I've finally realised that I have the right to put myself first and do good things for myself. This is just an incredible honour; it's like getting the most important permission in your life. And I can only give this permission to myself - no one else can give it to me. I needed help in order to give myself this permission, and the therapists helped me very delicately in this. The self-love space specialist showed me that I can and really have a right to take care of myself in the first place, and I should think about myself, listen to myself, and understand myself. It's a great feeling to realise that I can buy myself flowers. Now, it’s not only a very popular song for me; it's my lifestyle. I can do it, and I can really feel all these great emotions about it. It is an amazing feeling. Thank you so much.",
  },
  {
    img: review3,
    name: 'Karyna Prokopenko',
    text: "The atmosphere of the group was just amazing. It was so full of love. I was so relaxed, and everyone in our group was the same. It was a real atmosphere of pleasure, peace, and just finding and getting love. It’s all about love—love to yourself, love to all the people—and it’s so nice to feel this love and realise what this filling means in our lives. It’s really a very common known fact, but very often we just can't remember it or can't concentrate on it. This group helps me to highlight the meaning of self-love in my life, so I am happy to share this experience. I will definitely be more attentive to myself now. I will focus on myself and my needs, it is so beneficial to get this kind of self-support. Every day we should support our selfishness (in the good sense of the word) by doing something good for ourselves. I realised how simple it is, and even when I’m having the shower, it can be done very quickly just because I have to do it, and straight after I have to go to work, I have a lot of stuff to do around the house to take care of my family, but I can completely change my way of thinking and get this five-minute shower for myself, and I will feel completely different in a different way after these five minutes of self-love. Simple things can be so useful and beneficial for us, and realising this is just brilliant. I want to say thank you to the beautiful group leaders. I'm happy that I took part in this event.",
  },
  {
    img: review4,
    name: 'Alina Kaizer',
    text: "Actually, this was my first experience with this kind of mental health support. I had been preparing myself for this for maybe a couple years. It had been a long time since I thought about it. I was not sure about this, but now I can definitely say that it was time to do it. My experience of working with specialists who provide mental support is like swimming in the ocean, where you can completely relax and enjoy yourself, and everything is so soft. The psychotherapist is listening to you and supporting you. It is the person who can completely understand you, and you can be open and say everything you are thinking about or worrying about. It is so nice... and when you are working with your body therapist, it is completely enjoyable. I feel a connection between my emotions and my body. It was just incredible to understand the emotions and how my body reacts to everything that is going on in my life—everything is in my body. I realised how all my emotions are reflected in my body and how I experience a lot of discomfort on the physical level due to discomfort on the emotional level. This process gives me the possibility to understand this, and what is most important is the ability to change it, because when you understand it, you can change it. I want to say that it's a great experience, and it's worth doing it as soon as possible. I was trying to overcome all my struggles by myself for a very long time, but now I am sure that next time I have some difficult situations, I will definitely get this kind of support. I want to say a huge thank you to Valentyna and Lidiia for their professionalism and hugely kind hearts. It was a wonderful experience, which you made very pleasant for me.",
  },
  {
    img: review5,
    name: 'Julia Ponomarenko',
    text: 'I had a really tough time in my life. I had very difficult times in my life. It was a new country, new surroundings—everything was new for me. It was very difficult to make the right decisions at the time. I found Self-Love-Space specialists, and they helped me to become more self-confident and gain the strength to build my life again from the beginning. I didn’t even know what to do or how to start doing something in that moment of my life; I was trying so hard, it was so difficult for me, but when I found the specialists from Self-love-Space, I saw my life from a completely different perspective, and soon I realised that I have a lot of opportunities. I started to use this opportunity, as it seemed like I was simply blind before. In the communication with the therapists, I opened my eyes, and I started to see everything around me. I understood how to take the first steps. They were small steps, but they were very important steps in my life. I was making the right decisions. Now, after one year, I can say that I really started to enjoy life. I built my life. It was not easy. Sometimes I cried. Sometimes I was too tired to do anything. I felt even helpless sometimes, but with this help, I can overcome everything. I really appreciate the support I received. I appreciate all the help I received, and I would like to say that everyone who struggles at the moment, everyone who has some difficult time in their life, just feel free to get support; you will have a lot of benefits from it.',
  },
  {
    img: review1,
    name: 'Olha Leonova',
    text: "It was absolutely great to receive support from the Self-Love Space. I didn’t expect that such easy exercises and recommendations could be so useful for my life. I feel like my life is changing,  getting better every day, and when I say better, I mean I am really focusing on myself. I can feel awareness and contact with myself. Such awareness gives me a lot of benefits because I can really take care of myself and do what I really want. I have a lot of people in my life who are great and very important to me, but they all wanted to make my life better in the way they thought would be good for me, and now I'm starting to understand what way is good for me, like I’m really getting on my way. I’m on my way, and it is a beautiful feeling when you understand yourself. It is really amazing how you can change your life just by focusing on yourself and your needs. Just understand your body, your emotions, your thoughts, and the connection between all this parts I would like to say only thank you, tonnes of thanks, because it is a new chapter of my life, and I’m writing it by myself now.",
  },
];

export const services = [
  { img: service1, href: 'services#retreats', title: 'Retreats' },
  { img: service2, href: 'services#sessions', title: 'Individual sessions' },
  {
    img: service3,
    href: 'services#psychotherapy',
    title: 'Group psychotherapy',
  },
  {
    img: service4,
    href: 'services#consultations',
    title: 'Family/couple consultations',
  },
  { img: service5, href: 'services#therapy', title: 'Body therapy' },
];

export const consultations = [
  [
    '- the conflict is prolonged or repeated',
    '- sexual relations deteriorated',
    '- there is aggression or violence in the relationship',
    '- you are faced with misunderstanding, betrayal, jealousy',
    '- feel the constant competition',
    '- there has been a change in social roles',
    '- difficulties in communication with partner or children',
    '- no support',
    '- need preparation and help',
    '- marriage',
    '- you are going through trauma or divorce',
  ],
  [
    '- renew love, passion, intimacy and understanding of each other',
    '- establish and restore the atmosphere of harmony and attraction',
    '- work out personal boundaries and respect the boundaries of the partner',
    '- to define joint values ​​and plans',
    '- learn to hear and listen to each other',
    '- to solve the problems in the upbringing of children',
  ],
  [
    '- the session lasts 80 minutes',
    '- we focus on a deep understanding of your situation',
    '- very gently reveal the causes of difficulties',
    '- and find the inner keys to your happiness',
  ],
];

export const psychotherapy = [
  {
    title: 'Group “Self-Love”',
    text: 'Such a meeting is suitable for absolutely everyone – because self-care is the key to stable mental well-being, a good emotional state and a great mood. The best gift we can give ourselves is to build a harmonious relationship with ourselves, to be aware of and satisfy our needs, and to be our own best friend. Unfortunately, in today’s reality, we often have to compromise with ourselves and make choices in favor of what we need to do at the time (at work, everyday life and many other responsibilities that we take on). Therefore, this group meeting is a place where you completely concentrate on yourself – on your emotions, your body and your thoughts. Just 2 hours of your time will fill you with a sense of self-love and inner harmony',
  },
  {
    title: 'Group for parents',
    text: 'This group meeting is suitable for people with children of all ages. Parenting – a beautiful thing in our lives and we all get a lot of satisfaction, joy and happiness from being a parent, but at times it can be draining and take a lot of our inner resources. That is why such a meeting is offered, where you can get your resources restored and find answers to the questions that concern you. Part of the process is a psycho-educational conversation, where we will better understand the development process of our children and us as parents',
  },
  {
    title: 'Group “Increasing of Psychological Awareness”',
    text: 'This is a place where we will discuss in the format of a “discussion club” the most various psychological processes and phenomena, their impact on our lives and ways to change them in order to improve our well-being about increasing our productivity. For example, how watching the news affects us, or why we want to watch melodramas all the time – how does it help me, what benefits do I get or can get from it and what are the negative consequences of this for my nervous system.',
  },
  {
    title: 'Classic psychological support group',
    text: 'A perfect way to feel much better for anyone who feels lonely, is constantly in a depressed mood or seems that life is monotonous and has lost its color. It is also a great opportunity to recover after experienced stress or difficult life events',
  },
];

export const achievements = [
  { number: '500+', text: 'group sessions' },
  { number: '5000+', text: 'individual sessions' },
  { number: '3000+', text: 'body theraphy sessions' },
];
