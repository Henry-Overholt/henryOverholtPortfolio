import { Injectable } from "@angular/core";
import { Project } from "./../interfaces/project";

@Injectable({
  providedIn: "root",
})
export class ProjectsService {
  projects: Project[] = [
    {
      projectName: "Random Episode Generator",
      coverPic: "./../../assets/projects/randomEpisodeGen.png ",
      extension: "/randomEpisodeGenerator",
      elevators: [
        "While Netflix has incredibly popular original content, once people have binged the new shows they return to their old faithful shows, like 'The Office' or 'Friends'.  Like a lot of other people I like to have a familiar show on in the background, shows I’ve seen a lot, that I enjoy but don’t need to pay attention to. For a couple years I’ve gone out and searched for sites that can provide me with a random episode of my favorite shows. I have never been satisfied with what is out there, so I took a Saturday and created my own.",
        "I found an API available from ‘The Movie Database’ that allowed me to get details of a show, then randomly pick a season, then a random episode from that season. Originally I thought I would choose a couple shows, but then decided I could use the API to allow a user to search for any show they want, then get a random episode for that show. I use this application almost daily now to find me a random episode to have on in the background, and I’m very happy with how it came. I also took this opportunity to use the Youtube Component built into Angular, that was introduced in Angular 9.",
      ],

      mobile: true,
      live: true,
      link: "http://random-episode.surge.sh/",
      github: "https://github.com/Henry-Overholt/randomEpisodeGenerator",
      techSpecs:
        "Angular, HTML, CSS, surge.sh, TMDb API, Angular's Youtube Player Component, Git/Github",
      moreInfo: false,
      date: "OCTOBER 2020",
    },
    {
      projectName: "Weather App",
      coverPic: "./../../assets/projects/weatherApp.png ",
      extension: "/weatherApp",
      elevators: [
        "I set out to create an application that would show me the current weather conditions, rain forecast for the next 60 minutes, and the forecasted weather for the next two days. I also wanted to display sunrise and sunset times, which would move the sun throughout the day as we got closer to the sunset time, then switch to a moon icon during the evening.",
        "To accomplish my goals with this project I used the API from Openweather. I used some UI design tools like coolors.co to find a pleasing color scheme, and built it using Angular. My biggest challenge was switching from Openweather’s current weather call, to using their ‘One Call’ API, which combined current, future, and rain forecast into one API call, to limit the amount of calls I would have to make. I ended up being pretty happy with the final product.",
      ],

      mobile: false,
      live: false,
      link: "",
      github: "https://github.com/Henry-Overholt/weatherApp",
      techSpecs:
        "Angular, HTML, CSS, surge.sh, OpenWeather's One Call API, GeoLocation, Git/Github",
      moreInfo: false,
      date: "JULY 2020",
    },
    {
      projectName: "Portfolio Site",
      coverPic: "./../../assets/projects/portfolio.png",
      extension: "/portfolio-site",
      elevators: [
        "My goal for my Portfolio site was to create a simple site that would showcase my skills as a Frontend Developer. I wanted a one-stop shop for a visitor to get a quick glance at who I am as a developer. I wanted to display my some projects, my career path to where I am today, and a very simple way for someone to get in touch with me about opportunities and projects.",
        "My biggest challenge with this portfolio site was the design. The goal was to create a cohesive design throughout each component. At first, I liked the components I had designed individually but not as a whole site. I struggled to create a theme that runs through every component.  Eventually I came to the idea of adding a third color to the palette, a lighter blue, then started building some animations that would run on different components.  The palette and the animations combined to create a design and theme that I was very happy with.",
      ],
      mobile: true,
      live: false,
      link: "http://henryoverholt.surge.sh",
      github: "https://github.com/Henry-Overholt/henryOverholtPortfolio",
      techSpecs:
        "Angular, HTML, CSS, surge.sh, Git/Github, Angular Animation, EmailJS",
      moreInfo: false,
      date: "JUNE 2020",
    },
    {
      projectName: "Marvel March",
      coverPic: "./../../assets/projects/marvelMarch.png ",

      extension: "/marvel-march",
      elevators: [
        "Along with lots of people who were self-isolating in their homes during the Coronavirus outbreak, I was looking for ways to stay entertained.  As a Marvel fan I decided to watch through the Marvel Cinematic Universe in some sort of order, and as a developer I thought it would be fun to hack together a simple frontend to track my way through all the movies. I built a simple checklist that keeps track of what movies you have watched by storing the movies you watched locally. I also provided a suggested order for the Marvel movies, what current streaming platforms they are on, number of post-credit scenes, as well as the famous cameos of the late great Stan Lee.",
        "This project was a lot of fun to build. It was rather simple to create, but I felt connected to everyone who was searching for entertainment during the early weeks of the Coronavirus pandemic, and now it can be used by anyone who would like an app to track their progress through the marvel cinematic universe.",
      ],
      mobile: true,
      live: true,

      link: "https://marvel-march.surge.sh",
      github: "https://github.com/Henry-Overholt/marvelMarch",
      techSpecs: "Angular, HTML, CSS, surge.sh, Git/Github, CookiesService",
      moreInfo: false,
      date: "MARCH 2020",
    },
    {
      projectName: "Math Hoops Desktop Game",
      coverPic: "./../../assets/projects/mathHoops.png ",
      extension: "/math-hoops",
      elevators: [
        "Math Hoops is originally a fast pace Math board game for students, that uses WNBA and NBA player statistics to teach students about statistics and to practice quick single digit math. I had the opportunity to use the game while I was working in Detroit's Public Schools with City Year Detroit, and I loved it.  So after I graduated from the Frontend Bootcamp at Grand Circus I decided to transform this game from a board game into a computer game designed to be played on iPad-sized screens or larger. ",
        "My biggest hurdle in building out this idea was how to take a board game, where each turn was a couple steps, and turn it into a player versus the machine, computer game. It was an interesting process of writing the code for this project. I would write code, then come back to that code a day or two later, and start seeing simpler ways to write it. Basically, everytime I came back to the project I was refactoring my code from earlier.  I would like to come back to this project, and add player versus player functionality, but at this moment I’m happy with how this game runs currently. ",
      ],
      mobile: false,
      live: true,
      link: "https://math-hoops.surge.sh/",
      github: "https://github.com/Henry-Overholt/Math-Hoops",
      techSpecs: "Angular, HTML, CSS, surge.sh, Git/Github",
      moreInfo: false,
      date: "JANUARY 2020",
    },
    {
      projectName: "Listy Project",
      coverPic: "./../../assets/projects/listy.png ",
      extension: "/listy-project",
      elevators: [
        "As part of the Grand Circus curriculum, you are required to complete a final project. Throughout the bootcamp we completed two mid-term projects, one a pure JavaScript project the other an Angular project involving an API. The final project required pulling everything we learned throughout the bootcamp, and utilizing it in our projects.  To meet the requirement, my team and I developed Listy.  Listy is a day-to-day event and task manager application, that gives you current weather information, along with estimated drive times for your events.",
        "One of the biggest challenges my team and I faced was working with Google’s Distance Matrix API. While our experience with the OpenWeather API was relatively painless, the Distance Matrix API call was throwing a lot of errors that were new to us. We needed to be passing the correct security to Google to pass the CORS errors we were facing.  Overall our time was pretty happy with our final project, we wanted to add a suggested time to leave by, and blocking your schedule from adding events too close together, but it was a great experience that ended our time at Grand Circus.",
      ],
      mobile: true,
      live: true,
      link: "http://listy-ui.herokuapp.com/",
      github: "https://github.com/Henry-Overholt/LISTY-app",
      techSpecs:
        "Angular, HTML, CSS, postgresSQL, Google Distance Matrix API, OpenweatherAPI, node.js, express, Git/Github",
      moreInfo: false,
      date: "SEPTEMBER 2019",
    },
  ];
  selectedProject: any;
  constructor() {}
  setProject(project: any): void {
    this.selectedProject = project;
  }
}
