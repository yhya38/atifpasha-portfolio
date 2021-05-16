// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
    animated: true // set to false to use static SVG
};

const greeting = {
    username: "Ateef pasha",
    title: "Hi all, I'm Ateef pasha",
    subTitle: emoji(
        "A passionate Front-end developer 🚀 and Iam a fresher having  good knowledge of Html, Css  with JavaScript / Reactjs frameworks."
    ),
    resumeLink: "https://drive.google.com/file/d/1CtMqBKLif-pWtDZz8MBVc2acCBbfSczc/view?usp=sharing",
    displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
    github: "https://github.com/atifpasha",
    // linkedin: "https://www.linkedin.com/in/",
    gmail: "ateefpasha789@gmail.com",
    // gitlab: "https://gitlab.com/",
    // facebook: "https://www.facebook.com/",
    instagram: 'https://www.instagram.com/sheikhatif_/',
    twitter: 'https://twitter.com/Sheikh__atif__',
    display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
    title: "What I do",
    subTitle: "CRAZY FRONT-END DEVELOPER",
    skills: [
        emoji(
            "⚡ Develop highly interactive Front end / User Interfaces for your web application"
        ),
    ],

    /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

    softwareSkills: [{
            skillName: "html-5",
            fontAwesomeClassname: "fab fa-html5"
        },
        {
            skillName: "css3",
            fontAwesomeClassname: "fab fa-css3-alt"
        },
        {
            skillName: "JavaScript",
            fontAwesomeClassname: "fab fa-js"
        },
        {
            skillName: "reactjs",
            fontAwesomeClassname: "fab fa-react"
        },
        {
            skillName: "npm",
            fontAwesomeClassname: "fab fa-npm"
        },
    ],
    display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
    display: true, // Set false to hide this section, defaults to true
    schools: [{
            logo: require("./assets/images/cpLogo.png"),
            schoolName: "Community pre-University",
            subHeader: "Computer Science",
            duration: "September 2016 - April 2018",

        },
        {
            schoolName: "Surana College",
            subHeader: "Bachelor of Science in Computer Science",
            duration: "September 2018 - April 2020",
        }
    ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
    viewSkillBars: true, //Set it to true to show Proficiency Section
    experience: [{
            Stack: "Html ",
            progressPercentage: "100%"
        },
        {
            Stack: "Css",
            progressPercentage: "90%"
        },
        {
            Stack: "Javascript",
            progressPercentage: "70%"
        },
        {
            Stack: "React",
            progressPercentage: "50%"
        }
    ],
    displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
    display: false, //Set it to true to show workExperiences Section
    experience: [{
            role: "Software ",
            company: "Clever Programmer",
            companylogo: require("./assets/images/cpLogo.png"),
            date: "September 2020 – Present",
            desc: "Changing lives of developers one line of code at a time.",
            descBullets: [
                "Custom building applications",
                "Coaching",
                "Streaming live on YouTube",
                "Creating tutorials"
            ]
        },
        {
            role: "Product Owner (PSD2)",
            company: "Erste Bank",
            companylogo: require("./assets/images/ersteLogo.jpg"),
            date: "July 2019 – September 2020",
            desc: "I lead software developers building the API for the bank in order to fulfil the PSD2 regulation requirements."
        },
        {
            role: "Junior Information Security & Systems Representative",
            company: "Vodafone",
            companylogo: require("./assets/images/vodafoneLogo.png"),
            date: "November 2018 – July 2019",
            desc: "I've conducted internal audit making sure the organization is compliant with the GDPR."
        }
    ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
    githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
    githubUserName: "drakosi99", // Change to your github username to view your profile in Contact Section.
    showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
    display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
    title: "Small Projects",
    subtitle: "Project done under Javascript / React For Source Code You Can Find in my Github Account",
    projects: [{
            image: require("./assets/images/javascript.png"),
            projectName: "Javscript Games",
            projectDesc: "Javscript for advance",
            footerLink: [{
                    name: "Visit Website",
                    url: "https://ateefjavascript.netlify.app/"
                }

            ]
        },

        {
            image: require("./assets/images/React.png"),
            projectName: "React Netflix Cards",
            projectDesc: "React for Beginners ",
            footerLink: [{
                    name: "Visit Website",
                    url: "https://nerflix-card.netlify.app/"
                }

            ]
        },
        {
            image: require("./assets/images/javascript.png"),
            projectName: "Javascript Typing game",
            projectDesc: "Javascript for Begineers",
            footerLink: [{
                name: "Visit Website",
                url: "https://typingspeedgamejavascript.netlify.app/"
            }]
        },
        // {
        //     image: require("./assets/images/React.png"),
        //     projectName: "React Amazon-clone",
        //     projectDesc: "React Project using context api",
        //     footerLink: [{
        //         name: "Visit Website",
        //         url: "https://atifpasha.github.io/Amazon-clone/"
        //     }]
        // }




    ],

    display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
    title: emoji("Achievements🏆 "),
    subtitle: "Achievements, Certifications, Awards and Some Cool Stuff that I have done !",

    achievementsCards: [{
            title: "Man of the series in Cricket  Tournament",
            subtitle: "Cricket Tournament Played In My Degree Colege",
            image: require("./assets/images/cricket.jpg"),

            footerLink: [{
                    name: "Award ",
                    url: "https://photos.google.com/search/_cAF1QipOu4-EHljbKCVYVOVY-1jAi3QmgAnLnSA_Atif%20Pasha/photo/AF1QipM4PvhezRCHqCgpNkNYQzOxfzL0QVxADO-S5As"
                },

            ]
        },
        // {
        //     title: "Google Assistant Action",
        //     subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
        //     image: require("./assets/images/googleAssistantLogo.webp"),
        //     footerLink: [{
        //         name: "View Google Assistant Action",
        //         url: ""
        //     }]
        // },

        {
            title: "KSCA-U19",
            subtitle: "Played Cricket For U-19 KSCA Team",
            image: require("./assets/images/ksca.png"),
            footerLink: [{
                name: "Visit Link",
                url: "https://www.ksca.cricket/"
            }]
        }
    ],
    display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
    title: "Blogs",
    subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

    blogs: [{
            url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
            title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
            description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
        },
        {
            url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
            title: "Why REACT is The Best?",
            description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
        }
    ],
    display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
    title: "TALKS",
    subtitle: emoji(
        ""
    ),

    talks: [{
        title: "Talk In Private",
        subtitle: "",
        slides_url: "https://www.instagram.com/sheikhatif_/",
        event_url: "+91 9743045741",
    }],
    display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
    title: emoji("Podcast 🎙️"),
    subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

    // Please Provide with Your Podcast embeded Link
    podcast: [
        ""
    ],
    display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
    title: emoji("Contact Me ☎️"),
    subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: "+91 9743045741",
    email_address: "Ateefpasha789@gmail.com"
};

// Twitter Section

const twitterDetails = {
    userName: "sheikh__atif__", //Replace "twitter" with your twitter username without @
    display: true // Set true to display this section, defaults to false
};

export {
    illustration,
    greeting,
    socialMediaLinks,
    skillsSection,
    educationInfo,
    techStack,
    workExperiences,
    openSource,
    bigProjects,
    achievementSection,
    blogSection,
    talkSection,
    podcastSection,
    contactInfo,
    twitterDetails
};