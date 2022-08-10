/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Dagmawi zewdu Portfolio",
    type: "website",
    url: "http://dagic-zewdu.com/",
  },
};

//Home Page
const greeting = {
  title: "Dagmawi zewdu",
  logo_name: "Dagic zewdu",
  nickname: "Dagic",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://docs.google.com/document/d/1F8mpy0h8qenRKJd3fbSTCvmcEV2gPjCuh3fo-vEcnzM/edit?usp=sharing",
  portfolio_repository: "https://github.com/Dagic-zewdu/Dagic",
  githubProfile: "https://github.com/Dagic-zewdu?tab=repositories",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "dagic-zewdu98@gmail.com",
  // gitlab: "https://gitlab.com/dagic-zewdu98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Dagic-zewdu",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/dagic-zewdu/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCNn6kLD_93Un0MDKF7vwkuQ",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:dagic.zewdu98@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/dagic4",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/dagmawi.zewdu/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/dagic_z/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using  React Native",
        "⚡ Creating application backend in Node, Express and Ruby on Rails ",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Ruby",
          fontAwesomeClassname: "simple-icons:ruby",
          style: {
            color: "red",
          },
        },
        {
          skillName: "Ruby Rails",
          fontAwesomeClassname: "simple-icons:rails",
          style: {
            color: "red",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Nest.js",
          fontAwesomeClassname: "simple-icons:nest",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/dagi_zewdu_dz",
    },
    {
      siteName: "Microverse",
      fontAwesomeClassname: "simple-icons:microverse",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.microverse.org/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Unity university",
      subtitle: "BSC.Degree. in Computer Science",
      logo_path: "unity.jpeg",
      alt_name: "IIITDM Kurnool",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Demonstrated the ability to work independently to analyze and solve problems.",
      ],
      website_link:
        "https://www.facebook.com/UNITY-University-855561114497854/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "HTML AND Css 3",
      subtitle: "- Microverse",
      logo_path: "html.png",
      certificate_link:
        "https://www.credential.net/1d79966a-1aab-4e1e-9c11-59cff2cbf6ae#gs.7sr83x",
      alt_name: "Microverse",
      color_code: "#8C151599",
    },
    {
      title: "Javascript",
      subtitle: "- Microverse",
      logo_path: "javascript.png",
      certificate_link:
        "https://www.credential.net/2c714e23-82c0-44c1-8a76-007295a37b4f#gs.8m82ty",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "React Redux",
      subtitle: "- Microverse",
      logo_path: "Redux.png",
      certificate_link:
        "https://www.credential.net/ac0da1ee-035d-4721-8c40-ebafaf3e7e2c#gs.8mbpzj",
      alt_name: "React Redux",
      color_code: "#0C9D5899",
    },
    {
      title: "Ruby",
      subtitle: "- Microverse",
      logo_path: "Ruby.png",
      certificate_link:
        "https://www.credential.net/464870d9-d702-4cf5-b4f0-d02c500d3bda#gs.8mcbl4",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Ruby on rails",
      subtitle: "- Microverse",
      logo_path: "rails.png",
      certificate_link:
        "https://www.credential.net/df21f063-da40-4163-a3ac-217cb51ac2f0",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Full Stack Development",
      subtitle: "- Microverse",
      logo_path: "Full.png",
      certificate_link:
        "https://www.credential.net/1bf4dfa7-ab17-40e3-8578-2afa66336592#gs.7htzbq",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer and Software Architect. I have also worked with some well established companies mostly as Full stack Developer.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Full stack developer",
          company: "X-cog",
          company_url: "",
          logo_path: "x-cog.jpeg",
          duration: "Feb 2021 - Mar 2022",
          location: "Ethiopia, Addis Ababa",
          description:
            "Ensured compatibility with major browsers on mobile and desktop platforms by coordinating core server product development in Soket.io, Express.js, and Nest.js service components.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Mentor",
          company: "Microverse",
          company_url: "https://www.microverse.org/",
          logo_path: "microverse.png",
          duration: "Jan 2022 - Present",
          location: "San Francisco, California",
          description:
            "-Mentored junior web developers, providing technical support through code reviews. Proposed improvements to code organization to improve code quality and overall performance.Provided advice and tips on how to maintain motivation to maintain longevity in the program",

          color: "#9b1578",
        },
        {
          title: "Allowance System",
          company: "Civil service institute",
          company_url: "https://cs-allowance.herokuapp.com/",
          logo_path: "civil.jpeg",
          duration: "Aug 2019 - Feb 2021",
          location: "Ethiopia, Addis Ababa",
          description: `- Developed Using (React, Bootstrap and socket.io) technology. The allowance system is developed by Ethiopian civil service organization standards. Any allowance data is dynamic but follows a specific structure of the organization. . The allowance is created by employees and passes through approval managers to get the calculation. 
- Deduction data is raised from allowance data. The employee will fill out the entire form(the place and the date) where he/she had been. After that, it will be calculated by finance employees.
-The letter system includes direct writing editing and also setting an audience. The audience can be managers or any employers of the organization.
-If there is any miscommunication among employees a chat and messaging system is integrated. It facilitates easy communication and avoids any barriers of miscommunication.

Generally. This system has a dashboard to control and monitor your progress and also has an admin side to control an account. You can check out the project with employee id (123) and password(123)`,
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Full stack projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://dagic-zewdu.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8320758513",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
