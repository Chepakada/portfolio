const firstName = "Prashant"
const lastName = "Lamichhane"
const email = "prashantlamichhane68@gamail.com"
const socialLinks = [{
        media: "linkedIn",
        url: "https://www.linkedin.com/in/prashant-lamichhane/",
        logo: ""

    },
    {
        media: "github",
        url: "https://github.com/Chepakada",
        logo: ""

    }
]

const positions = ["Software Developer", "FullStack Developer", "Computer Scientist", "Data Analyst"]

const projectCards = [{
        title: "Car Race",
        image: "https://github.com/Chepakada/portfolio/blob/master/src/components/images/car_race.png?raw=true",
        content: "A simple car race game created in C# with good OOP perspective.",
        url: "https://github.com/Chepakada/car_race"
    },

    {
        title: "NYPD Shooting Cases",
        images: "https://github.com/Chepakada/portfolio/blob/master/src/components/images/r_project.png?raw=true",
        content: "A report on shooting cases in NYPD for year 2022 visualized with R",
        url: "https://github.com/Chepakada/NYPD-shooting-report.git"
    },
    {
        title: "The Lost Ones",
        image: "something",
        content: "A Blogging website with database where you can create profiles and post blogs which other people(profiles) can view and react to.",
        url: "https://github.com/aj-et/open-blog-platform.git"
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