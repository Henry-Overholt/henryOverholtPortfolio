import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ProjectsService {
  projects: any[] = [
    {
      projectName: "The Site You're On Now",
      coverPic: "./../../assets/projects/portfolio/portfolioCover.png ",
      index: 0,
      extension: "/portfolio-site",
      elevator:
        "This portfolio was a lot of fun to build. My goal was to create a simple site to showcase my skills as a Frontend Developer, and to create a one-stop shop for my projects, my background, and a simple way to get in contact with me.",
      mobile: true,
      live: true,
      mobilePic: "./../../assets/projects/portfolio/portfolioMobile.png",
      link: "http://localhost:4200/home",
      github: "https://github.com/Henry-Overholt/henryOverholtPortfolio"
    },
    {
      projectName: "Math Hoops Desktop Game",
      coverPic: "./../../assets/projects/mathHoops/mathHoopsCover.png ",
      index: 1,
      extension: "/math-hoops",
      elevator:
        "Math Hoops is originally a fast pase Math game for students, that uses WNBA and NBA player statistics to teach students about statistics and to practice quick single digit math. I had the opportunity to use the game while I was working in Detroit's Public Schools with City Year Detroit, and I loved it.  So, after I graduated from the Frontend Bootcamp at Grand Circus, I decided to transform this game, that I had a lot great memories playing, into a computer game. ",
      mobile: false,
      live: true,
      link: "https://math-hoops.surge.sh/",
      github: "https://github.com/Henry-Overholt/Math-Hoops"
    },
    {
      projectName: "Listy Project",
      coverPic: "./../../assets/projects/Listy/listyCover.png ",
      index: 2,
      extension: "/listy-project",
      elevator:
        "Listy is a day-to-day event and task manager application, that gave you current weather information, along with estimated drive time stats for events.",
      mobile: true,
      live: true,
      mobilePic: "./../../assets/projects/Listy/listyMobile.jpg",
      link: "http://listy-ui.herokuapp.com/",
      github: "https://github.com/Henry-Overholt/LISTY-app"
    }
  ];
  selectedProject: any;
  constructor() {}
  setProject(project: any): void {
    this.selectedProject = project;
    console.log(this.selectedProject);
  }
}
