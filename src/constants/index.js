import { venus, aswhite, imlink, anletech } from "../assets/images";
import {
    css,
    git,
    github,
    html,
    javascript,
    mongodb,
    react,
    sass,
    linkedin,
    pricewise,
    contact,
    soundon,
    soundoff,
    angularjs,
    aspnet,
    bootstrap,
    csharp,
    dotnet,
    dotnetcore,
    identityserver,
    java,
    jenkins,
    jquery,
    knockoutjs,
    lucene,
    octopus,
    python,
    restapi,
    sqlserver,
    ssis,
    swift,
    teamcity
} from "../assets/icons";

export const skills = [
    {
        imageUrl: csharp,
        name: "C Sharp",
        type: "Backend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: swift,
        name: "Swift",
        type: "Backend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: aspnet,
        name: "ASP Net",
        type: "Backend",
    },
    {
        imageUrl: dotnet,
        name: "Dot Net",
        type: "Backend",
    },
    {
        imageUrl: dotnetcore,
        name: "Dot Net Core",
        type: "Backend",
    },
    {
        imageUrl: restapi,
        name: "Web API",
        type: "Backend",
    },
    {
        imageUrl: lucene,
        name: "Lucene .NET",
        type: "Database",
    },
    {
        imageUrl: identityserver,
        name: "Identity Server",
        type: "Backend",
    },
    {
        imageUrl: jenkins,
        name: "Jenkins",
        type: "CICD",
    },
    {
        imageUrl: octopus,
        name: "Octopus",
        type: "CICD",
    },
    {
        imageUrl: sqlserver,
        name: "MS SQL Server",
        type: "Database",
    },
    {
        imageUrl: ssis,
        name: "SSIS",
        type: "Database",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: teamcity,
        name: "Teamcity",
        type: "CICD",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: bootstrap,
        name: "Bootstrap",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: jquery,
        name: "Jquery",
        type: "Frontend",
    },
    {
        imageUrl: angularjs,
        name: "Angular JS",
        type: "Frontend",
    },
    {
        imageUrl: knockoutjs,
        name: "KnockoutJS",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Software Engineer",
        company_name: "Venus Fashion",
        icon: venus,
        iconBg: "#FFB600",
        date: "Nov 2020 - Present",
        points: [
            "Built new and maintained core features for venus.com as a full stack developer.",
            "Led multiple core projects to success which directly improved the system's usability and performance.",
            "Pioneered as a deploy engineer to planed and deployed new features via CI/CD pineline.",
            "Provided support for less experienced engineers (including new senior engineers)."
        ],
    },
    {
        title: "Web Developer",
        company_name: "Venus Fashion",
        icon: venus,
        iconBg: "#FFB600",
        date: "Nov 2018 - Nov 2020",
        points: [
            "Built new and maintained core features for venus.com as a full stack developer.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "AS White Global Vietnam",
        icon: aswhite,
        iconBg: "#0AB0AE",
        date: "Sep 2015 - May 2017",
        points: [
            "Built new and maintained web-based applications serving internal employees of the company's major client, EML - an Australian-based insurance provider.",
            "Brainstormed, analyzed and fnd solutions directly with client teams from Australia.",
            "Participating in code reviews and providing constructive feedback to other developers."
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Imlink Vietnam",
        icon: imlink,
        iconBg: "#000066",
        date: "Sep 2014 - Sep 2015",
        points: [
            "Built new and maintained a web-based B2B2C application providing printing services.",
            "Brainstormed, analyzed and fnd solutions directly with client teams from Japan.",
            "Participating in code reviews and providing constructive feedback to other developers."
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "AnLeTech",
        icon: anletech,
        iconBg: "#9DB3C8",
        date: "Aug 2013 - Jan 2014",
        points: [
            "Worked on iProject - a web-based ERP system for our major client from Germany.",
            "Built internal communicating application using WebSocket API."
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/quang-khuong-duy-le',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/quang-le-21275116a/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/',
    }
];