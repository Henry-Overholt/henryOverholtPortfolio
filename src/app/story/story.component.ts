import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from "@angular/animations";
@Component({
  selector: "app-story",
  templateUrl: "./story.component.html",
  styleUrls: ["./story.component.css"],
  animations: [
    trigger("fadeIn", [
      state("void", style({ opacity: 0 })),
      transition("void=>*", animate("1000ms 100ms")),
    ]),
    trigger("fadeInLate", [
      state("void", style({ opacity: 0 })),
      transition("void=>*", animate("1000ms 2s")),
    ]),
  ],
})
export class StoryComponent implements OnInit {
  timeline: any[] = [
    {
      logo: "./../../assets/careerTimeline/gcLogo.png",
      company: " ~ Grand Circus",
      alt: "Grand Circus Bootcamp Logo",
      position: "Frontend Bootcamp",
      date: "July 2019 - September 2019",
      strings: [
        "Grand Circus trains Michigan’s next generation of programmers and connects businesses to truly talented people.  Since 2015 they’ve graduated more than 1,500 bootcamp students, and have graduates at over 300 companies statewide. ",
        "I attended Grand Circus’ Frontend Bootcamp from July to September of 2019.  During that time I was taught frontend development from the ground up. Starting with recreating web layouts from screen shots using CSS and HTML, to making sites functional with JavaScript, and eventually learning the Angular Framework to build responsive efficient web applications.",
        "While at Grand Circus I completed two to three mini projects a week, two mid-term projects, and graduated after completing my final project in a team of four using agile and scrum development principals.",
      ],
      index: 0,
    },
    {
      logo: "./../../assets/careerTimeline/forOurFutureLogo.png",
      company: " ~ For Our Future MI",
      alt: "For Our Future MI Logo",
      position: "Field Organizer",
      date: "September 2018 - December 2018",
      strings: [
        "For Our Future is a Political Action Committee dedicated to Grassroots Organizing, and I worked for the non-profit arm.  The goal of the non-profit arm of For Our Future is to go out a listen to Michigan Voters, and find out what the most important issues were for each individual we talked to. ",
        "The goal of my position was voter engagement.  My main responsibility was to reach as many voters as I could through door-to-door contact.  I engaged voters in a conversation to figure out what issues were most important to them.  For Our Future would take that information and support local candidates who matched the issues of the community they were running to represent. ",
        "As we got closer to the election, my goal was to encourage them to vote, and vote for candidates whose platform matched the issues they cared about.  Throughout my time with For Our Future during the 2018 elections, I knocked on over two thousand doors, and talked to people about their vote and the power they carried, to elect the candidates who best represented their issues.",
        "After the election we mobilized to get voters to call their current representatives in the Michigan house and senate, to protect certain legislation that was on the floor to be repealed by representatives who were voted out.  I was calling, knocking on doors, and going to events to talk to as many voters as possible.",
      ],
      index: 1,
    },
    {
      logo: "./../../assets/careerTimeline/saadCongressLogo.png",
      company: "Saad for Congress",
      alt: "For Our Future MI Logo",
      position: "Regional Field Director",
      date: "July 2018 - August 2018",
      strings: [
        "Persuasively provided information to potential voters concerning the 2018 Democratic Primary, through the use of programs, and excellent interpersonal skills. ",
        "Constantly reached and surpassed personal daily and weekly contact goals.",
        "Represented the campaign at local Democratic Party events, indivisible meetings, and community festivals throughout the 11th Congressional District in Michigan.",
        "Recruited, managed and trained volunteers to make direct voter contact.",
        "Managed more than 150 ‘Get Out the Vote’ shifts, launching ‘Get Out the Vote’ canvasses and phone banks.",
      ],
      index: 2,
    },
    {
      logo: "./../../assets/careerTimeline/cityyearLogo.png",
      company: " ~ City Year Detroit",
      alt: "City Year Logo",
      position: "Team Leader",
      date: "July 2017 - June 2018",
      strings: [
        "Mentored and coached a team of six diverse AmeriCorps Members through 11 months of service to provide academic and socio-emotional support to 100+ students in grades 3 thru 8.",
        "Designed and implemented an after-school program for 30+ students focused on improving student’s math and reading levels.",
        "Formed relationships between City Year Detroit and 30+ administration, teachers, staff, and community partners to ensure student and team success.",
        "Collected and analyzed data for 120+ students to monitor student progress in math and reading.",
      ],
      index: 3,
    },
    {
      logo: "./../../assets/careerTimeline/cityyearLogo.png",
      company: " ~ City Year Detroit",
      alt: "City Year Logo",
      position: "AmeriCorps Member",
      date: "August 2016 - June 2017",
      strings: [
        "Devoted over 1700 hours to tutoring and mentoring 6 th grade students fulltime in math, reading, behavior, and attendance coaching.",
        "Led structured group activities designed to increase positive interaction students have at whole class, and small group levels.",
        "Coordinated school-wide events to celebrate student achievement and engage the community.",
        "Worked and collaborated with a diverse team of Corps Members to provide academic support to students.",
      ],
      index: 4,
    },
    // {
    //   logo: "./../../assets/careerTimeline/ohioLogo.png",
    //   company: " ~ Ohio University",
    //   alt: "For Our Future MI Logo",
    //   position: "World Religions Major",
    //   date: "August 2012 - August 2016",
    //   strings: [
    //     "This is my most recent experience",
    //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores accusamus, rerum quisquam, accusantium cupiditate nulla ipsum incidunt pariatur consequatur animi architecto cumque neque hic quo inventore laudantium totam quia reiciendis?",
    //   ],
    //   index: 5,
    // },
  ];
  currentTimeline: any = this.timeline[0];
  lastTimeLine: any = this.timeline[0];
  up: boolean = true;
  down: boolean = true;
  dots: any[] = [
    { number: 0 },
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    // { number: 5 },
  ];
  constructor() {}

  ngOnInit() {}
  handleRightArrow(): void {
    let index: number = this.currentTimeline.index;
    this.down = true;
    if (index > 0) {
      let nextIndex: number = index - 1;
      this.scroll(nextIndex, true);
    } else {
      this.up = false;
    }
  }
  handleLeftArrow(): void {
    let index: number = this.currentTimeline.index;
    this.up = true;
    if (index < this.timeline.length - 1) {
      let nextIndex: number = index + 1;
      this.scroll(nextIndex, false);
    } else {
      this.down = false;
    }
  }
  handleDotClick(i: number) {
    this.currentTimeline = this.timeline[i];
  }
  scroll(index: number, direction: boolean) {
    let element = document.getElementById("timelineHolder");
    element.style.position = "relative";
    if (direction === true) {
      element.style.left = "100%";
    } else {
      element.style.left = "-100%";
    }
    element.style.transition = ".25s";
    element.style.visibility = "hidden";
    setTimeout(() => {
      if (direction === true) {
        element.style.left = "-100%";
      } else {
        element.style.left = "100%";
      }
      this.currentTimeline = this.timeline[index];
    }, 250);
    setTimeout(() => {
      element.style.visibility = "visible";
      element.style.left = "0";
    }, 500);
  }
}
