import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ProjectsService {
  projects: any[] = [
    {
      projectName: "Daily UI Challenges",
      coverPic: "./../../assets/projects/dailyUI/dailyUIDesktop.png ",
      extension: "/dailyUI",
      elevator:
        "Daily UI is a series of daily design challenges sent to my indox everyday of the week, to try and get better as a frontend developer. I've decided to put most on a single site, and hopefully keep doing as many as I can.  It is a fun way to build quick apps to showcase some skills and be creative.",
      mobile: true,
      live: true,
      mobilePic: "./../../assets/projects/dailyUI/dailyUIMobile.png",
      link: "http://dailyuichallenges.surge.sh",
      github: "https://github.com/Henry-Overholt/dailyUIchallenge",
      techSpecs: "Angular, HTML, CSS, surge.sh, Git/Github",
      moreInfo: false,
      date: "Beginning July 2020",
    },
    {
      projectName: "This Portfolio Site",
      coverPic: "./../../assets/projects/portfolio/portfolioCover.png ",
      extension: "/portfolio-site",
      elevator:
        "This portfolio was a lot of fun to build. My goal was to create a simple site to showcase my skills as a Frontend Developer, and to create a one-stop shop for my projects, my background, and a simple contact form.",
      mobile: true,
      live: false,
      mobilePic: "./../../assets/projects/portfolio/portfolioMobile.png",
      link: "http://henryoverholt.surge.sh",
      github: "https://github.com/Henry-Overholt/henryOverholtPortfolio",
      techSpecs:
        "Angular, HTML, CSS, surge.sh, Git/Github, Angular Animation, EmailJS",
      moreInfo: false,
      date: "June 2020",
    },
    {
      projectName: "Marvel March",
      coverPic: "./../../assets/projects/marvelMarch/marchMarvelLarge.png ",

      extension: "/marvel-march",
      elevator:
        "Along with lots of people who were self-isolating in their homes during the Coronavirus outbreak, I was looking for ways to stay entertained.  As a Marvel fan I decided to watch through the Marvel Cinematic Universe in some sort of order, and as a developer I thought it would be fun to hack together a simple frontend to track my way through all the movies. I built a simple checklist that keeps track of what movies you have watched by storing the movies you watched locally. I also provided a suggested order for the Marvel movies, what current streaming platforms they are on, number of post-credit scenes, as well as the famous cameos of the late great Stan Lee.",
      mobile: true,
      live: true,
      mobilePic: "./../../assets/projects/marvelMarch/marvelMarchMobile.png",
      link: "https://marvel-march.surge.sh",
      github: "https://github.com/Henry-Overholt/marvelMarch",
      techSpecs: "Angular, HTML, CSS, surge.sh, Git/Github, CookiesService",
      moreInfo: false,
      date: "March 2020",
    },
    {
      projectName: "Math Hoops Desktop Game",
      coverPic: "./../../assets/projects/mathHoops/mathHoopsCover.png ",
      extension: "/math-hoops",
      elevator:
        "Math Hoops is originally a fast pace Math board game for students, that uses WNBA and NBA player statistics to teach students about statistics and to practice quick single digit math. I had the opportunity to use the game while I was working in Detroit's Public Schools with City Year Detroit, and I loved it.  So after I graduated from the Frontend Bootcamp at Grand Circus I decided to transform this game from a board game into a computer game designed to be played on iPad-sized screens or larger. ",
      mobile: false,
      live: true,
      link: "https://math-hoops.surge.sh/",
      github: "https://github.com/Henry-Overholt/Math-Hoops",
      techSpecs: "Angular, HTML, CSS, surge.sh, Git/Github",
      moreInfo: false,
      date: "January 2020",
    },
    {
      projectName: "Listy Project",
      coverPic: "./../../assets/projects/Listy/listyCover.png ",
      extension: "/listy-project",
      elevator:
        "Listy is a day-to-day event and task manager application, that gives you current weather information, along with estimated drive times for your events.  I built this application with three teammates for our final project at Grand Circus.  We followed the Scrum and Agile frameworks in order to complete our project, with daily scrums, and small sprints. ",
      mobile: true,
      live: true,
      mobilePic: "./../../assets/projects/Listy/listyMobile.jpg",
      link: "http://listy-ui.herokuapp.com/",
      github: "https://github.com/Henry-Overholt/LISTY-app",
      techSpecs:
        "Angular, HTML, CSS, postgresSQL, Google Distance Matrix API, OpenweatherAPI, node.js, express, Git/Github",
      moreInfo: false,
      date: "September 2019",
    },
    {
      projectName: "JavaScript Matching Game",
      coverPic: "./../../assets/projects/matchingGame.jpeg",
      extension: "/matching-game",
      elevator:
        "This matching game was my first mid-term project at Grand Circus. Looking back on at it, it was very simple, but at the time it was a challenging project that forced my teammates and I to implement a lot of what we had learned so far at Grand Circus.",
      mobile: false,
      live: true,
      // mobilePic: "./../../assets/projects/Listy/listyMobile.jpg",
      link: "http://sly-snakes-matching.surge.sh/",
      github: "https://github.com/Henry-Overholt/Sly-Snakes-Matching-Game",
      techSpecs: "JavaScript, HTML, CSS",
      moreInfo: false,
      date: "August 2019",
    },
  ];
  selectedProject: any;
  constructor() {}
  setProject(project: any): void {
    this.selectedProject = project;
  }
}
