import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ProjectsService {
  projects: any[] = [
    {
      projectName: "Marvel March",
      coverPic: "./../../assets/projects/marvelMarch/marchMarvelLarge.png ",

      extension: "/marvel-march",
      elevator:
        "Along with lots of people who were self-isolating in their homes during the Coronavirus outbreak, I was looking for ways to stay entertained.  As a Marvel fan I decided to watch through the Marvel Cinematic Universe in some sort of order, and as a developer I thought it would be fun to hack together a simple frontend to track my way through all the movies. I built a simple checklist, that stores your completed movies in local storage.",
      mobile: true,
      live: true,
      mobilePic: "./../../assets/projects/marvelMarch/marvelMarchMobile.png",
      link: "https://marvel-march.surge.sh",
      github: "https://github.com/Henry-Overholt/marvelMarch",
      techSpecs: "Angular, HTML, CSS, surge.sh, Git/Github, CookiesService",
      moreInfo: false,
    },
    {
      projectName: "This Portfolio Site",
      coverPic: "./../../assets/projects/portfolio/portfolioCover.png ",
      extension: "/portfolio-site",
      elevator:
        "This portfolio was a lot of fun to build. My goal was to create a simple site to showcase my skills as a Frontend Developer, and to create a one-stop shop for my projects, my background, and a simple way to get in contact with me.",
      mobile: true,
      live: true,
      mobilePic: "./../../assets/projects/portfolio/portfolioMobile.png",
      link: "http://henryoverholt.surge.sh",
      github: "https://github.com/Henry-Overholt/henryOverholtPortfolio",
      techSpecs:
        "Angular, HTML, CSS, surge.sh, Git/Github, Angular Animation, EmailJS",
      moreInfo: false,
    },
    {
      projectName: "Math Hoops Desktop Game",
      coverPic: "./../../assets/projects/mathHoops/mathHoopsCover.png ",
      extension: "/math-hoops",
      elevator:
        "Math Hoops is originally a fast pase Math game for students, that uses WNBA and NBA player statistics to teach students about statistics and to practice quick single digit math. I had the opportunity to use the game while I was working in Detroit's Public Schools with City Year Detroit, and I loved it.  So, after I graduated from the Frontend Bootcamp at Grand Circus, I decided to transform this game, that I had a lot great memories playing, into a computer game. ",
      mobile: false,
      live: true,
      link: "https://math-hoops.surge.sh/",
      github: "https://github.com/Henry-Overholt/Math-Hoops",
      techSpecs: "Angular, HTML, CSS, surge.sh, Git/Github",
      moreInfo: false,
    },
    {
      projectName: "Listy Project",
      coverPic: "./../../assets/projects/Listy/listyCover.png ",
      extension: "/listy-project",
      elevator:
        "Listy is a day-to-day event and task manager application, that gave you current weather information, along with estimated drive time stats for your events.  I built this application with three teammates for our final project at Grand Circus.",
      mobile: true,
      live: true,
      mobilePic: "./../../assets/projects/Listy/listyMobile.jpg",
      link: "http://listy-ui.herokuapp.com/",
      github: "https://github.com/Henry-Overholt/LISTY-app",
      techSpecs:
        "Angular, HTML, CSS, postgresSQL, Google Distance Matrix API, OpenweatherAPI, node.js, express, Git/Github",
      moreInfo: false,
    },
  ];
  selectedProject: any;
  constructor() {}
  setProject(project: any): void {
    this.selectedProject = project;
    console.log(this.selectedProject);
  }
}
