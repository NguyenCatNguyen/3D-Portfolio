const BASE_URL = "/3D-Portfolio";

const navLinks = [
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const skills = [
  { name: "HTML", imgPath: `${BASE_URL}/images/html.png` },
  { name: "CSS", imgPath: `${BASE_URL}/images/css.png` },
  { name: "JavaScript", imgPath: `${BASE_URL}/images/js.png` },
  { name: "Python", imgPath: `${BASE_URL}/images/python.png` },
  { name: "GSAP", imgPath: `${BASE_URL}/images/gsap.png` },
  { name: "React", imgPath: `${BASE_URL}/images/react.png` },
  { name: "Three.js", imgPath: `${BASE_URL}/images/threejs.png` },
  { name: "Tailwind CSS", imgPath: `${BASE_URL}/images/tailwindcss.png` },
  { name: "Git & GitHub", imgPath: `${BASE_URL}/images/github.png` },
  { name: "Framer", imgPath: `${BASE_URL}/images/framer.png` },
];

const words = [
  { text: "Ideas", imgPath: `${BASE_URL}/images/ideas.png` },
  { text: "Concepts", imgPath: `${BASE_URL}/images/concepts.png` },
  { text: "Designs", imgPath: `${BASE_URL}/images/designs.png` },
  { text: "Code", imgPath: `${BASE_URL}/images/code.png` },
  { text: "Ideas", imgPath: `${BASE_URL}/images/ideas.png` },
  { text: "Concepts", imgPath: `${BASE_URL}/images/concepts.png` },
  { text: "Designs", imgPath: `${BASE_URL}/images/designs.png` },
  { text: "Code", imgPath: `${BASE_URL}/images/code.png` },
];

const counterItems = [
  { value: 4,   suffix: "+", label: "Years of Experience" },
  { value: 7,   suffix: "+", label: "Languages & Frameworks" },
  { value: 38,  suffix: "+", label: "Completed Projects" },
  { value: 200, suffix: "+", label: "Commits This Year" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: `${BASE_URL}/images/seo.png`,
    title: "Modern Front-End Technologies",
    desc: "Building dynamic UIs with React, TailwindCSS, and up-to-date JavaScript (ES6+) practices.",
  },
  {
    imgPath: `${BASE_URL}/images/chat.png`,
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: `${BASE_URL}/images/git.png`,
    title: "Git, Github, & Version Control",
    desc: "Efficient branching, merging, and pull-request workflows to collaborate smoothly on GitHub.",
  },
  {
    imgPath: `${BASE_URL}/images/ui.png`,
    title: "Responsive & Mobile-First Design",
    desc: "Crafting layouts that adapt seamlessly across devices for an optimal user experience.",
  },
];



export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  navLinks,
  skills,
  BASE_URL,
};
