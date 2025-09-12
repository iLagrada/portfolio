import {
    IoLogoJavascript,
    IoLogoHtml5,
    IoLogoReact,
    IoLogoNodejs
} from 'react-icons/io5'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'

export const PROFILE_DATA = {
    profilePicture: 'https://via.placeholder.com/150',
    name: 'Cyril Kenneth Lagrada',
    tagline: `Passionate React JS Developer with 1 year of experience, dedicated to crafting immersive web experiences and solving complex challenges.`,
    jobTitle: 'Full Stack Developer',
    location: 'Philippines',
    yearsOfExperience: 1,
    skills: [
        'React.js',
        'JavaScript',
        'HTML',
        'CSS',
        'Git',
        'Bootstrap',
        'Redux',
        'Node.js',
        'RESTful APIs'
    ],
    email: 'cyril_kenneth_lagrada@live.com',
    phone: '+63 910 182 2222',
    website: 'https://cklagrada.com'
};

export const SKILLS = [
    {
        id: '01',
        icon: IoLogoJavascript,
        title: 'JavaScript',
        comment: `JavaScript is my bread and butter. i've been working with it for over 4 years and have built numerous applications, ranging from simple scripts to complex web applications.`,
    },
    {
        id: '02',
        icon: IoLogoHtml5,
        title: 'HTML',
        comment: `HTML is the foundation of every web project I work on. I have a deep understanding of its structure and semantics, ensuring my web applications are well-structured and accessible.`,
    },
    {
        id: '03',
        icon: IoLogoReact,
        title: 'React JS',
        comment: `I'm deeply passionate about React.js and have been using it extensively for over 3 years. i've built numerous projects, including e-commerce websites, dashboards, and iteractive web applications.`,
    },
    {
        id: '04',
        icon: IoLogoNodejs,
        title: 'Node JS',
        comment: `Node.js is my go-to choice for building scalable and efficient server-side applications. With its event-driven architecture and extensive ecosystem, i've built RESTful APIs, real-time chat applications, and more.`,
    },
    {
        id: '05',
        icon: SiMongodb,
        title: 'MongoDB',
        comment: `MongoDB's flexible document-based structure and scalability make it and ideal choice for storing and managing data in modern web applications. i've used MongoDB extensively in projects, ranging from small-scale applications to large-scale platforms.`,
    },
    {
        id: '06',
        icon: RiTailwindCssFill,
        title: 'Tailwind CSS',
        comment: `Tailwind CSS has revolutionized the way I approach front-end styling. Its utility-first approach allows me to rapidly build responsive and beautifully designed interfaces without writing custom CSS.`
    }
];

export const WORK_EXPERIENCE = [
    {
        id: '01',
        company: 'City Information Technology Center',
        position: 'Information Technology Specialist II',
        duration: 'Jul 2025 - Present',
        description: 'The front-end and back-end development team. development team in designing and implementing user interfaces for various web applications development team in designing and implementing user interfaces for various web applications.'
    },
    {
        id: '02',
        company: 'City Information Technology Center ',
        position: 'Information Technology Specialist II',
        duration: 'Jan 2025 - Jun 2025',
        description: 'Front-End development team in designing and implementing user interfaces for various web applications. Collaborated with designers and Back-End developers to deliver high-quality products.'
    },
    {
        id: '03',
        company: 'City Information Technology Center  ',
        position: 'Information Technology Specialist II',
        duration: 'Jul 2024 - Dec 2024',
        description: 'Developed responsive and interactive user interfaces for client projects using modern web technologies. Participated in code reviews and provided technical guidance to junior developers'
    },
    {
        id: '04',
        company: 'City Information Technology Center   ',
        position: 'Information Technology Specialist II',
        duration: 'Mar 2024 - Jun 2024',
        description: 'Designed and developed user interfaces for web applications, focusing on usability and aesthetics. Collaborated closely with clients to understand their requirements and deliver customized solutions.'
    }
];

export const ABOUT_ME_DATA = {
    introduction: "Hi, I'm Cyril Kenneth Lagrada, an experienced React JS developer passionate about building engaging web applications and solving complex problems with code.",
    background: "I hold a Bachelor's Degree in Computer Science from STI College of Davao. Over the past years, i've gained valuable experience in backend development, working on projects ranging from e-commerce websites to interactive dashboards.",
    skills: "I'm proficient in a variety of technologies including React.js, JavaScript,HTML,CSS and Node.js. I'm also experienced in using version control systems like Git and working with RESTful APIs. In the future,",
    projects: "Some of my notable projects include an e-commerce website",
    interests: "Outside of coding, I enjoy traveling to new places, capturing moments through photography, and playing guitar. I'm also an avid reader and love exploring new cuisines.",
    carrerGoals: "I aim to continue honing my skills as a developer, exploring new technologies, and contributing to meaningful projects that make a positive impact on people's lives.",

    stats: {
        yearsOfExperience: '1+',
        numberOfProjects: 3,
        certificationsEarned: 8
    },
};