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
  paragraphOne:
    'We are a group of builders with expertise in pedagogy, physiology, and technology. We utilize our unique combination of skills to design and develop tools that bring physiology to life.',
  paragraphTwo:
    'Our mission is to help medical students construct an intuitive understanding of physiology, creating a foundational basis on which students can better understand pathology, semiology, and the treatment of disease.',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'pvm_model_title.png',
    title: 'PVModel',
    info: 'Physiology in motion, a heart simulation that beats and adapts dynamically to change, in real-time. PVModel is a reactive heart simulation. It brings life to the study of physiology.',
    info2: 'Available for Android and iOS devices.',
    url: 'https://play.google.com/store/apps/details?id=ar.com.westsoft.pvmodel&hl=es&gl=US',
    repo: 'https://github.com/scammi/PVModel', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'heart_sim.png',
    title: 'Myocardium tissue simulation',
    info: 'Web base cardiac tissue playground. Gain a better understanding of action potential propagation. Interact and draw different heart cells, simulate myocardium infarct, and watch the simulation dynamically evolve.',
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
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'linkedin',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'github',
    //   url: '',
    // },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
