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
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, optio asperiores pariatur accusamus doloribus porro eos cupiditate dignissimos, molestias, aut modi placeat quos quo veniam! Provident quos minus illo ipsa!",
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
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi nesciunt eum tempore. Labore dolorem aut unde repudiandae dolores, fugiat ipsa beatae repellendus repellat error ad aliquam dignissimos culpa blanditiis quo?",
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
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nostrum fugiat voluptates, praesentium vero maxime, corporis dolores blanditiis numquam et delectus, molestias harum asperiores perspiciatis itaque excepturi minus eius eaque?",
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
