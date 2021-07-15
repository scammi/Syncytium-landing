import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Syncytium', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'welcome', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Welcome to',
  name: 'Syncytium',
  subtitle: 'Physiology in movement',
  cta: 'About us',
};

// ABOUT DATA
export const aboutData = {
  img: 'syncytium-muscle-strie.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'pvm_model_title.png',
    title: 'PVModel',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/scammi/PVModel', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'heart_sim.png',
    title: 'Myocardium tissue simulation',
    info: '',
    info2: '',
    url: 'https://scacchipa.github.io/heartsimulator/',
    repo: 'https://github.com/scacchipa/heartsimulator', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'scammi@gmial.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
