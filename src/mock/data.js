import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Omar (Mexicutiioner)',
  subtitle: 'Full Stack Developer / Video Editor',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'mexi.png',
  paragraphOne: 'Hello, my name is Omar. I an individual that loves that work with anything that interests me. ',
  paragraphTwo: 'Weather that is writing scripts, editing videos, or even trading.',
  paragraphThree: 'Below are some projects I have built thus far.',
  resume: 'https://www.linkedin.com/in/omaralkhateeb99/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'UT LOGO OFFICIAL FINAL.png',
    title: 'United Traders Introdocution Video',
    info: 'An introduction video to the United Traders discord server I edited for our team.',
    info2: '',
    url: 'https://www.youtube.com/watch?v=EowrPspF-mA',
    repo: 'https://www.youtube.com/watch?v=EowrPspF-mA', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'WIP',
    info: 'Future projects',
    info2: '',
    url: 'https://github.com/omaralkha99',
    repo: 'https://github.com/omaralkha99', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'WIP',
    info: 'Future Projects',
    info2: '',
    url: 'https://github.com/omaralkha99',
    repo: 'https://github.com/omaralkha99', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Mexicutiioner',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/omaralkhateeb99/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/omaralkha99',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
