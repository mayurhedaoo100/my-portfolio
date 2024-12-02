import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

import cert1 from "../assets/certificates/google-digital-marketing.jpg";
import cert2 from "../assets/certificates/microsoft-azure-fundamentals.png";
import cert3 from "../assets/certificates/google-play-listing.jpg";
import cert4 from "../assets/certificates/accenture-software-engineering.jpg"
import cert5 from "../assets/certificates/hplife-datascience.jpg";
import cert6 from "../assets/certificates/mastercard-cybersecurity.jpg"
import cert7 from "../assets/certificates/intro-cyber-security.jpg";
import cert8 from "../assets/certificates/intro-nfts.jpg";

export const HERO_CONTENT = `Develops efficient and scalable applications using React Native. Focuses on creating smooth, user-friendly experiences with responsive designs and reliable backend integration. Applications are built with modern technologies to ensure high performance and seamless functionality, delivering real value to users.`;

export const ABOUT_TEXT = `I am an eager and self-driven developer with a strong interest in mobile application development. My enthusiasm for learning and my dedication to improving my skills help me stay up-to-date with the latest trends and technologies. I focus on continuous growth and adaptability, constantly seeking opportunities to enhance my knowledge and contribute effectively to the projects I work on. My goal is to develop impactful applications that are both user-centric and technically robust. I work with technologies like React Native, Tailwind CSS, Framer motion, Firebase, MongoDB, and MySQL to build high-performance, scalable mobile apps. Each project is an opportunity to innovate and apply my skills in creating solutions that deliver real value to users, while constantly evolving and learning from new challenges.`;

export const PROJECTS = [
  {
    title: "YuvaFit",
    image: project1,
    description:
      "YuvaFit is an app designed to promote physical and mental well-being among the youth, helping them manage stress and stay fit. It offers personalized fitness routines, mindfulness exercises, and progress tracking to support a healthy lifestyle.",
    technologies: ["React Native", "Expo", "Firebase", "Firestore"],
    Link: "https://yuvafit.netlify.app"
  },
  {
    title: "Budget Buddy",
    image: project2,
    description:
      "BudgetBuddy is an expense tracker app designed to help users manage their finances, track spending, and set budgets. It allows easy categorization of expenses and provides insights into financial habits, helping users maintain a balanced budget.",
    technologies: ["React Native", "Expo", "Firebase Authentication"],
    Link: "https://github.com/mayurhedaoo100/BudgetBuddy"
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Vite", "TailwindCSS", "Framer Motion"],
    Link: "https://github.com/mayurhedaoo100/my-portfolio"
  },
];

export const CONTACT = {
  address: "Nashik, Maharashtra, India, 422001 ",
  email: "mayurh100@gmail.com",
};

export const CERTIFICATES = [
  {
    id: 1,
    title: "Google Fundamentals of Digital Marketing",
    details: "Covers essential digital marketing strategies, including SEO, analytics, and online advertising.",
    date: "October 2022",
    image: cert1,
    verificationLink: "https://learndigital.withgoogle.com/link/1tb5mplmosg",
  },
  {
    id: 2,
    title: "Microsoft Azure Fundamentals",
    details: "Introduces core Azure services, cloud concepts, and security fundamentals.",
    date: "April 2023",
    image: cert2,
    verificationLink: "https://www.credly.com/badges/b9f01c10-d853-46dd-803b-233545f6c958",
  },
  {
    id: 3,
    title: "Google Play Listing Certificate",
    details: "Focuses on optimizing app listings for better visibility and engagement on the Google Play Store.",
    date: "April 2022",
    image: cert3,
    verificationLink: "https://www.credential.net/10e18837-3d9c-4e04-b818-0c7374d3497f",
  },
  {
    id: 4,
    title: "Accenture Software Engineering Simulation",
    details: "Demonstrates expertise in software engineering, covering key concepts such as coding, testing, and debugging through an interactive, real-world simulation.",
    date: "December 2024",
    image: cert4,
    verificationLink: "",
  },
  {
    id: 5,
    title: "HP Life Data Science & Analytics",
    details: "Developed skills in data analysis, visualization, and data-driven decision-making techniques.",
    date: "November 2024",
    image: cert5,
    verificationLink: "https://www.life-global.org/certificate/8cfc89bc-7db3-4ec7-b519-239597e4b165",
  },
  {
    id: 6,
    title: "Mastercard Cybersecurity Job Simulation",
    details: "Practical experience in detecting and preventing phishing attacks, helping individuals strengthen their skills in safeguarding digital environments against cyber threats.",
    date: "December 2024",
    image: cert6,
    verificationLink: "",
  },
  {
    id: 7,
    title: "Introduction to Cyber Security by Simplilearn",
    details: "Provides foundational knowledge of cyber threats, security measures, and best practices.",
    date: "April 2022",
    image: cert7,
    verificationLink: "https://simpli-web.app.link/e/lZjJUkPwEOb",
  },
  {
    id: 8,
    title: "Upgrads Introduction to NFTs",
    details: "Explores the basics of Non-Fungible Tokens (NFTs), blockchain technology, and their applications.",
    date: "April 2022",
    image: cert8,
    verificationLink: "https://www.credential.net/e8925564-61c4-4435-8fc1-95d771e0119c#acc.qwPJN0AT",
  },
  // Add more certificates
];