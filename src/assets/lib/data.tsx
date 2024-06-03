import photoshopicon from "../../assets/icons/photoshopicon.svg";
import postgresqlicon from "../../assets/icons/postgresqlicon.svg";
import mysqlicon from "../../assets/icons/mysqlicon.svg";
import sqlserverdarkicon from "../../assets/icons/sqlserverdarkicon.svg";
import sqlserverwhiteicon from "../../assets/icons/sqlserverwhiteicon.svg";
import bootstrapicon from "../../assets/icons/bootstrapicon.svg";
import ionicicon from "../../assets/icons/ionicicon.svg";
import javaicon from "../../assets/icons/javaicon.svg";
import phpicon from "../../assets/icons/phpicon.svg";
import dotneticon from "../../assets/icons/dotneticon.svg";
import pythonicon from "../../assets/icons/pythonicon.svg";
import csharpicon from "../../assets/icons/csharpicon.svg";
import apprendreicon from "../../assets/icons/apprendreicon.svg";
import debricon from "../../assets/icons/debricon.svg";
import teamicon from "../../assets/icons/teamicon.svg";
import railwayicon from "../../assets/icons/railwayicon.svg";
import projetConstruction from "../../assets/img/ProjetConstruction2.jpeg";
import projetFanaka from "../../assets/img/ProjetFanaka.jpeg";
import projetOccasion from "../../assets/img/ProjetOccasion.png";

import adobexdicon from "../../assets/icons/adobexdicon.svg";
import canvaicon from "../../assets/icons/canvaicon.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import trelloicon from "../../assets/icons/trelloicon.svg";
import apiicon from "../../assets/icons/apiicon.svg";
import axiosicon from "../../assets/icons/axiosicon.svg";
import spotifyicon from "../../assets/icons/spotifyicon.svg";
import netlifyicon from "../../assets/icons/netlifyicon.svg";
import rendericon from "../../assets/icons/rendericon.svg";
import jwticon from "../../assets/icons/jwticon.svg";
import tastyMockup from "../../assets/img/tasty_mockup.webp";
import instorMockup from "../../assets/img/instor_mockup.webp";
import silentmoonMockup from "../../assets/img/silentmoon_mockup.webp";
import profilepicture from "../img/ProfilTahiry.webp";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";

export const headerIntroData = {
  title: {
    de: "Bonjour, je m'appelle Tahiry",
    en: "Hi, I'm Tahiry",
  },
  subtitle: {
    de: "Développeur",
    en: "Developer",
  },
  description: {
    de: "Mon but en tant que développeur est de progresser professionnellement et de participer à des projets qui inspirent. Je vous présente mon travail et ma passion pour le développement. Ensemble, nous pouvons façonner des solutions numériques et influencer l’avenir !",
    en: "My name is Tahiry, I'm a developer with the goal to advance my career and contribute to inspiring projects. Here, I showcase my work and my passion for development. Let’s collaborate to shape digital solutions and influence the future!",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        de: "Contactez moi",
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        de: "Mes Projets",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "Construction",
    description:
      "J’ai travaillé sur un projet consistant à gérer les différents aspects du métier d’une entreprise de construction BTP. J’étais à la fois le chef de projet et le développeur fullstack, et on m’a donné seulement 3 jours pour le terminer.",
    description_EN:
      "I worked on a project involving managing various aspects of a construction BTP company’s business. I was both the project manager and the full-stack developer, and I was given only 3 days to complete it.",
    technologies: [
      { name: ".Net", icon: dotneticon },
      { name: "Postgresql", icon: postgresqlicon },
      { name: "Photoshop", icon: photoshopicon },
      { name: "Bootstrap", icon: bootstrapicon },
    ],
    image: projetConstruction,
    deploymenturl: "https://delightful-cheesecake-9b19f0.netlify.app/",
    githuburl: "https://github.com/TahiryRamaroson/ConstructionBTP",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Occasion360",
    description:
      "J’ai travaillé sur la création d’un site web et d’une application mobile permettant aux utilisateurs de publier et de consulter des annonces concernant les voitures d’occasion. En tant que développeur front-end, j’étais responsable à la fois du frontOffice et du backOffice. Nous avions un délai d’un mois pour livrer le projet.",
    description_EN:
      "I worked on a project involving creating a website and a mobile application that allows users to post and view advertisements related to used cars. As a front-end developer, I was responsible for both the frontOffice and the backOffice. We had a one-month deadline to deliver the project.",
    technologies: [
      { name: "React", icon: reacticon },
      { name: "Api Rest", icon: apiicon },
      { name: "Java", icon: javaicon },
      { name: "Ionic", icon: ionicicon },
      { name: "Netlify", icon: netlifyicon },
      { name: "Railway", icon: railwayicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Postgresql", icon: postgresqlicon },
      { name: "Tailwind", icon: tailwindcssicon },
    ],
    image: projetOccasion,
    deploymenturl: "https://silentmoon-grpw.onrender.com/",
    githuburl:
      "https://github.com/TahiryRamaroson/BackOffice_occasion360",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "Fanaka",
    description:
      "J’ai travaillé sur la création d’une application pour gérer les confections et les ventes de meubles d’une entreprise. En tant que chef de projet, j'ai dirigé une équipe composé de 3 développeurs, et on m’a donné un délai d’un mois et demi pour rendre le projet.",
    description_EN:
      "I worked on creating an application to manage the design and sales of furniture for a company. As a project manager, I led a team of 3 developers, and we were given a month and a half to complete the project.",
    technologies: [
      { name: "Java", icon: javaicon },
      { name: "Postgresql", icon: postgresqlicon },
      { name: "Bootstrap", icon: bootstrapicon },
    ],
    image: projetFanaka,
    deploymenturl: "https://mern-haushaltsbuch.onrender.com/",
    githuburl: "https://github.com/TahiryRamaroson/Gestion_Meuble",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    de: "Plus de projets sur Github",
    en: "More Projects on Github",
  },
} as const;

export const skillsDataBackEnd = [
  {
    skillsTitle: "Back-End",
    skills: [
      {
        title: "Java",
        hash: "#Java",
        icon: javaicon,
        color: "#e76f00",
      },
      {
        title: "C#",
        hash: "#Csharp",
        icon: csharpicon,
        color: "#9a5196",
      },
      {
        title: ".Net",
        hash: "#DotNet",
        icon: dotneticon,
        color: "#6d429c",
      },
      {
        title: "Php",
        hash: "#Php",
        icon: phpicon,
        color: "#8892bf",
      },
      {
        title: "Python",
        hash: "#Python",
        icon: pythonicon,
        color: "#ffd444",
      },
      {
        title: "Api Rest",
        hash: "#Api",
        icon: apiicon,
        color: "#d83131",
      },
    ],
  },
] as const;

export const skillsDataFrontEnd = [
  {
    skillsTitle: "Front-End",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "Bootstrap",
        hash: "#Bootstrap",
        icon: bootstrapicon,
        color: "#563d7c",
      },
      {
        title: "Ionic",
        hash: "#Ionic",
        icon: ionicicon,
        color: "#3880ff",
      },
      {
        title: "Netlify",
        hash: "#Netlify",
        icon: netlifyicon,
        color: "#05bdba",
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Design",
    skills: [
      { title: "Figma", hash: "#Figma", icon: figmaicon, color: "#F24E1E" },
      { title: "Adobe XD", hash: "#Adobe XD", icon: adobexdicon, color: "#FF61F6"},
      { title: "Canva", hash: "#Canva", icon: canvaicon, color: "#00C4CC" },
      { title: "Photoshop", hash: "#Photoshop", icon: photoshopicon, color: "#65bff2" },
    ],
  },
] as const;

export const skillsDataBase = [
  {
    skillsTitle: "Database",
    skills: [
      { title: "PostgreSQL", hash: "#PostgreSQL", icon: postgresqlicon, color: "#336791" },
      { title: "MySQL", hash: "#MySQL", icon: mysqlicon, color: "#00748e"},
      { title: "SQL Server", hash: "#SQL Server", icon: [sqlserverdarkicon, sqlserverwhiteicon], color: ["#000000", "#FFFFFF"] },
    ],
  },
] as const;

export const navLinks = [
  { de: "Accueil", en: "Home", hash: "#home", icon: GoHome },
  { de: "Compétences", en: "Skills", hash: "#skills", icon: GoStack },
  { de: "Projets", en: "Projects", hash: "#projects", icon: GoProject },
  { de: "A propos", en: "About me", hash: "#about-me", icon: GoPerson },
  { de: "Contact", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { de: "Impressum", en: "Imprint", hash: "#imprint", data: <Imprint /> },
  { de: "Datenschutz", en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:myemail@com",
  text: "myemail@com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/tahiry-ramaroson-0a77802b4/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/TahiryRamaroson",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "https://www.gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    de: '"Es ist überhaupt nicht wichtig, es beim ersten Mal richtig zu machen. Es ist entscheidend, es beim letzten Mal richtig zu machen."',
    en: `"It's not at all important to get it right the first time. It's vitally important to get it right the last time."`,
    author: "Andrew Hunt",
  },
  {
    de: '"Das Web ist wie eine Leinwand und der Code ist die Farbe. Erschaffe dein Meisterwerk."',
    en: `"The web is like a canvas, and code is the paint. Create your masterpiece."`,
  },
] as const;

export const aboutMeData = {
  title: "A propos",
  title_EN: "About me",
  description: "Mes qualités",
  description_EN: "My qualities",
  paragraphs_DE: [
    {
      title: "Débrouillard",
      description:
        "Ma capacité à trouver des solutions créatives et à m’adapter rapidement aux défis fait de moi un atout précieux pour toute équipe.",
      icon: debricon,
    },
    {
      title: "Toujours prêt à apprendre",
      description:
        "Je suis ouvert aux retours constructifs et je m’efforce toujours de m’améliorer. L’apprentissage continu est au cœur de ma démarche professionnelle.",
      icon: apprendreicon,
    },
    {
      title: "Travail d'équipe",
      description:
        "Mon expérience dans des environnements de travail collaboratifs m’a permis de développer des compétences solides en matière de travail d’équipe. Je suis à l’aise pour partager des idées, écouter les autres et atteindre des objectifs communs.",
      icon: teamicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "Resourceful",
      description:
        "My ability to find creative solutions and adapt quickly to challenges makes me a valuable asset for any team.",
      icon: debricon,
    },
    {
      title: "Always willing to learn",
      description:
        "I am open to constructive feedback and always strive to improve. Continuous learning is at the heart of my professional approach.",
      icon: apprendreicon,
    },
    {
      title: "Teamwork",
      description:
        "My experience in collaborative work environments has allowed me to develop strong teamwork skills. I am comfortable sharing ideas, listening to others, and achieving common goals.",
      icon: teamicon,
    },
  ],
};

export const contactData = {
  title: {
    de: "Contact",
    en: "Contact",
  },
  description: {
    de: "N'hésitez pas à me contacter",
    en: "Feel free to contact me",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        de: "Dein Name",
        en: "Your Name",
      },
      type: "text",
      validation: {
        de: "Bitte gebe deinen Namen ein",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        de: "Deine E-Mail Adresse",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        de: "Bitte gebe deine Email ein",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        de: "Deine Betreff",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        de: "Bitte gebe einen Betreff ein",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      de: "Deine Nachricht",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      de: "Bitte gebe deine Nachricht ein",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      de: "Absenden",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      de: "Ich stimme zu, dass Alpay meine personenbezogenen Daten (Name und E-Mail-Adresse) verwenden darf, um mit mir Kontakt aufzunehmen.",
      en: "I agree that Alpay may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      de: "Durch Übermittlung dieser Anfrage bestätigen Sie, dass Sie die Datenschutzerklärung gelesen haben",
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    de: "🦄 Die Live Demo wird gleich geöffnet. Server werden gestartet...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    de: "🦄 Vielen Dank für deine Email. Ich werde mich schnellstmöglich bei dir melden",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    de: "🦄 Leider hat der Versand deiner Email nicht geklappt. Bitte versuche es später noch einmal",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    de: "Bitte gebe deinen Namen ein",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    de: "FR",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
