const firstName = "Prashant"
const lastName = "Lamichhane"
const email = "prashantlamichhane68@gamail.com"
const socialLinks = [{
        media: "linkedIn",
        url: "https://www.linkedin.com/in/prashant-lamichhane/",
        logo: "https://github.com/Chepakada/portfolio/blob/master/src/components/images/github.png?raw=true"

    },
    {
        media: "github",
        url: "https://github.com/Chepakada",
        logo: "https://github.com/Chepakada/portfolio/blob/master/src/components/images/linkedin.png?raw=true"

    }
]

const positions = ["Software Developer", "FullStack Developer", "Computer Scientist", "Data Analyst"]

const projectCards = [{
        title: "Car Race",
        image: "https://github.com/Chepakada/portfolio/blob/master/src/components/images/car_race.png?raw=true",
        content: "A simple car race game created in C# with good OOP perspective.",
        url: "https://github.com/Chepakada/car_race",
        keywords:["OOP", "C#", "Game", "For Class", "Group", "Project Management"]
    },

    {
        title: "NYPD Shooting Cases",
        image: "https://github.com/Chepakada/portfolio/blob/master/src/components/images/r_poject.png?raw=true",
        content: "A report on shooting cases in NYPD for year 2022 visualized with R",
        url: "https://github.com/Chepakada/NYPD-shooting-report.git",
        keywords:["Data Analysis", "Data Science","Personal", "Visualization", "R", "markdown"]
    },
    {
        title: "The Lost Ones",
        image: "https://github.com/Chepakada/portfolio/blob/master/src/components/images/the_lost_ones.png?raw=true",
        content: "A Blogging website with database where you can create profiles and post blogs which other people(profiles) can view and react to.",
        url: "https://github.com/aj-et/open-blog-platform.git",
        keywords:["React", "Website", "Group", "Project Management", "Personal", "UI"]
    },
    {
        title: "ChatBro",
        image:"something",
        content:"A app where you can login, signup and chat with other people",
        url: "https://github.com/Chepakada/chatbro",
        keywords:[""]
    },
    {
        title:"Quizlet",
        image:"something",
        content:"A simple app with trivia questions which are based on Discrete Maths",
        url:"https://github.com/Chepakada/Quizlet",
        keywords:[""]
    },
    {
        title:"Portfolio",
        image:"Something",
        content:"A website for personal Portfolio. You are here.",
        url:"https://github.com/Chepakada/portfolio",
        keywords:[""]
    }
   
]

const experienceCards = [{
        title: "Online Grader",
        employer: "BYU-Idaho",
        contents: ["Aided students with the learning by providing detailed written feedback on understanding of Javascript, C#(object oriented programming) and Python over a course of 14 weeks semester",
            "Demonstrated proficiency in the subject matter, staying current with developments in the field and contributing to course development and improvement"
        ]
    },
    {
        title: "Custodial",
        employer: "BYU-Idaho",
        contents: ["Demonstrated effective time management and organizational skills, completing tasks efficiently and within established timelines", "Collaborated with other members of the facilities team to complete tasks over a limited time window of 3 hours"]
    }

]

export {
    firstName,
    lastName,
    projectCards,
    experienceCards,
    positions,
    email,
    socialLinks
}