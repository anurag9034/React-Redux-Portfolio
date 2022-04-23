/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Anurag's Portfolio",
  description:
    "A passionate individual from Canada who always thrive to work on end to end products that creates impact in the community and always hungry to learn new tech.",
  og: {
    title: "Anurag's Portfolio",
    type: "website",
    url: "http://anuragk.com/",
  },
};

//Home Page
const greeting = {
  title: "Anurag K",
  logo_name: "Anurag K",
  nickname: "<That Web guy/>",
  subTitle:
    "A passionate individual who always thrive to work on end to end products that creates impact in the community and always hungry to learn new tech.",
  resumeLink: "#",
  portfolio_repository: "https://github.com/anurag9034",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  {
    name: "Github",
    link: "https://github.com/anurag9034",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:kamanurag5@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    /* {
      title: "Data Science & Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and Data Science projects",
        "⚡ Developing end to end data driven solutions based on client's needs",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    }, */
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building front-end web applications using React-Redux from mockup/wireframes",
        "⚡ Integrating APIs from front end and Creating application backend in Node, Express & Flask",
        "⚡ Developing complex React applications in Redux for awesome state management",
        "⚡ Using SASS, Bootstrap, MaterialUI to design and prototype faster",
      ],
      softwareSkills: [
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
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#e34f26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "simple-icons:css3",
          style: {
            color: "#0c94f7",
          },
        },
        {
          skillName: "SASS",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#cc6699",
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
          skillName: "REDUX",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#764abc",
          },
        },
        {
          skillName: "BOOTSTRAP4",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#533b78",
          },
        },
        {
          skillName: "GIT",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#f54d27",
          },
        },
      ],
    },
    {
      title: "Design, Test and Deploy",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Making use of Figma as the ultimate design tool",
        " ⚡ Testing applications in Jest and Enzyme",

        " ⚡ Deploying serverless sites in Netlify and MERN stack applications on Heroku",

        "⚡ Designing highly attractive user interface for web applications",

        " ⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
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
      ],
    },
  ],
};

// Education Page
const degrees = {
  degrees: [
    {
      title: "Bachelors in Engineering",
      subtitle: "Electronics and Communication Engineering",
      logo_path: "ou.png",
      alt_name: "SEAS AU",
      duration: "2010 - 2014",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, C, Java etc.",
        "⚡ Apart from this, I have done courses on Web Development and Cloud Computing",
        //"⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://www.osmania.ac.in/",
    },
    /* {
      title: "Arizona State University",
      subtitle: "MS in Computer Science",
      logo_path: "download.png",
      alt_name: "ASU",
      duration: "2021 - Present",
      descriptions: [
        "⚡ I am currently studying CLoud Computing, Mobile Comouting and Distributed Database Systems",
        "⚡ In the future semesters I intend to study Fundamental of Statistical Learning, Data Mining and Software Validaton and Testing courses",
        //"⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://www.asu.edu/",
    }, */
  ],
};

/* const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Data Visualization with Python",
      subtitle: "- IBM",
      logo_path: "ibm.png",
      alt_name: "IBM",
      color_code: "#8C151599",
    },
    {
      title: "Python Programming : A Concise Introduction",
      subtitle: "- Wesleyan University",
      logo_path: "wesleyan.jpg",
      alt_name: "Wesleyan University",
      color_code: "#00000099",
    },
  ],
}; */

// Experience Page
const experience = {
  title: "Professional Experience",
  subtitle: "Work or Freelance Experience",
  description:
    "A self-motivated, creative and ambitious IT professional with high-level proficiency in responsive web development and having 5+ Years of hands-on experience on Design, Development (UI), Testing and Maintenance of Single Page web applications (SPA) using React, Angular, JavaScript, Typescript, HTML5, CSS3, Bootstrap4, jQuery, Node JS, Express JS, Redux, Mongo DB, MySQL and AJAX. I always aim for clean and efficient code while also creating high-performance, responsive and engaging applications. I am passionate about design and always providing a high-quality User Interface and User Experience. Professional strengths include creative problem-solving, written and verbal communication, and time management. I am also a quick and zealous learner!",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        /*  {
          title: "UI Developer",
          company: "John Hancock Financial",
          company_url: "https://www.johnhancock.com/index.html",
          logo_path: "download.png",
          duration: "July 2019 - Present",
          location: "Toronto, Canada",
          description:
            "Worked on web applications from scratch using React JS to develop single page application. Worked with HTML5, CSS3, JSON, Native JavaScript, ReactJS and ES6 for developing user interface. Experience in responsive web pages design with Media Queries, CSS Grid Layout, Flexbox and Bootstrap5. Work closely with the Project Manager and Team Leads on change request functions. Develops new and maintains existing applications. Increased productivity and problem-solving technics by 20%. We primarily used PERN and MERN Stack. 80% of my work was doing backend development and the remaining 20% was DevOps-related tasks.            ",
          color: "#0879bf",
        },
        {
          title: "Software Engineer",
          company: "Capgemini",
          company_url: "https://www.johnhancock.com/index.html",
          logo_path: "cap.png",
          duration: "February 2016 - June 2019",
          description:
            "Worked on server-side scripting JavaScript framework Node.js, Express.js, created Rest API's using  Node.js and connected to MongoDB. Used NPM for Node.js development & server-side packages. Created Single page applications with React using Hooks, redux for stateful management; or using previous React state object plus lifecycle for component's internalize stateful management. Used react - router for routing.",
          color: "#0879bf",
        }, */
      ],
    },
    /* {
      title: "Internships",
      experiences: [
        {
          title: "Data Science Intern",
          company: "Meditab Software, Inc",
          company_url: "https://www.meditab.com/",
          logo_path: "meditab.jpg",
          duration: "Dec 2019 - Mar 2020",
          location: "Ahmedabad, Gujarat",
          description:
            "Developed an end to end solution of providing Battery Health Monitoring system for a robot car used in the US healthcare system using data driven approaches to alert the user of the pharmacy when the battery of the robot needs to be recharged.Developed a Dashboard of Accuracy Monitoring Tool by collaborating with the Software team using Angular and D3JS.Contributed 1K+ lines of code to an established codebase via Git",
          color: "#ee3c26",
        },
        {
          title: "Big Data and Advanced Analytics Intern",
          company: "Vodafone Idea Limited",
          company_url: "https://www.vodafoneidea.com/",
          logo_path: "Vi.jpg",
          duration: "May 2019 - Jul 2019",
          location: "Mumbai, Maharashtra",
          description:
            "Built a churn prediction model,also applied data analytics and visualization techniques to analyze the data. Predicted the number of customers who will not churn to the offer provided to them by the campaign team. Prepared a Proof of concept for object detection model using YOLOv3, Fast R-CNN and Faster R-CNN for their IOT based products which were in development phase.",
          color: "#0071C5",
        },
      ],
    }, */
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "What started with a simple 'Hello World' has become a fully-fledged passion that only gets more and more exciting. Below you will find projects I've completed that showcase my skills and general background in programming    ",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    subtitle:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development",
    profile_image_path: "profile_photo.png",
  },
  addressSection: {
    title: "Address",
    subtitle: "290 Bremner Blvd, Toronto, ON M5V 3L9",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/1260+E+University+Dr,+Tempe,+AZ+85281/@33.4225344,-111.9202503,17z/data=!3m1!4b1!4m5!3m4!1s0x872b08e4e45000ad:0xa287a193d6cb2d08!8m2!3d33.4225344!4d-111.9180616",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+1 778-806-7354",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  experience,
  projectsHeader,
  contactPageData,
};
