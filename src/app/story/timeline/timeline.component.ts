import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-timeline",
  templateUrl: "./timeline.component.html",
  styleUrls: ["./timeline.component.css"],
})
export class TimelineComponent implements OnInit {
  timeline: any[] = [
    {
      logo: "./../../assets/careerTimeline/gcLogo.png",
      id: "",
      company: " Grand Circus",
      alt: "Grand Circus Bootcamp Logo",
      position: "After Hours Bootcamp Teaching Assistant",
      date: "JULY 2020 - PRESENT",
      strings: ["", "", ""],
      index: 0,
    },
    {
      logo: "./../../assets/careerTimeline/gcLogo.png",
      id: "",
      company: " Grand Circus",
      alt: "Grand Circus Bootcamp Logo",
      position: "Frontend Bootcamp",
      date: "JULY 2019 - SEPT 2019",
      strings: [
        "Grand Circus trains Michigan’s next generation of programmers and connects businesses to truly talented people.  Since 2015 they’ve graduated more than 1,500 bootcamp students, and have graduates at over 300 companies statewide. ",
        "I attended Grand Circus’ Frontend Bootcamp from July to September of 2019.  During that time I was taught frontend development from the ground up. Starting with recreating web layouts from wireframes using CSS and HTML, to making sites functional with JavaScript, and eventually learning Angular to build responsive efficient web applications.",
        "While at Grand Circus I completed two to three mini projects a week, two mid-term projects, and graduated after completing my final project in a team of four using agile and scrum development principals.",
      ],
      index: 1,
    },
    {
      logo: "./../../assets/careerTimeline/forOurFutureLogo.png",
      id: "",
      company: " For Our Future MI",
      alt: "For Our Future MI Logo",
      position: "Field Organizer",
      date: "SEPT 2018 - DEC 2018",
      strings: [
        "For Our Future is a Political Action Committee dedicated to Grassroots Organizing.  I was involved with the non-profit side of the organization whose goal is to go out a listen to Michigan Voters, and find out what the most important issues were for each individual we talked to. ",
        "The goal of my position was voter engagement.  My main responsibility was to reach as many voters as I could through door-to-door contact.  I engaged voters in a conversation to figure out what issues were most important to them.  For Our Future would take that information and support local candidates who matched the issues of the community they were running to represent. ",
        "As we got closer to the election, my goal was to encourage them to vote, and vote for candidates whose platform matched the issues they cared about.  Throughout my time with For Our Future during the 2018 elections, I knocked on over two thousand doors, and talked to people about their vote and the power they carried, to elect the candidates who best represented their issues.",
        "After the election we mobilized to get voters to use voice to tell their current representatives in the Michigan house and senate, to protect the certain legislation that was on the floor to be repealed by representatives who were voted out.  I was calling, knocking on doors, and going to events to talk to as many voters as possible.",
      ],
      index: 2,
    },
    {
      logo: "./../../assets/careerTimeline/saadForCOngress.png",
      id: "",
      company: "Saad for Congress",
      alt: "For Our Future MI Logo",
      position: "Regional Field Director",
      date: "JULY 2018 - AUGUST 2018",
      strings: [
        "Saad for Congress was a campaign for the House of Representatives to represent Michigan’s 11th congressional district. As one of the Regional Field Directors for the Campaign, it was my role to reach the voters in my assigned areas of the district, as well as train and organize volunteers to maximize our reach in the district ",
        "Throughout my time with the Saad for Congress Campaign I represented the campaign and it’s message at local events, meetings, and community festivals throughout the 11th District.  I created training documents for new volunteers as well as ran training sessions.  In the closing phases of the campaign, to get our supporters out and vote, I managed 150 “Get Out the Vote” shifts, launching canvasses as well as phone banks.",
        "My time with the campaign was a true highlight of my young career at that point.  The people I worked with were amazing, the pace at which we worked, and amount we got done in the day left me feeling truly inspired.  When I’ve been looking for projects since my time with the Saad for Congress campaign, I look for the same things I had there, a great collaborative environment, solution oriented peers, and shared values that help us get the job done. ",
      ],
      index: 3,
    },
    {
      logo: "./../../assets/careerTimeline/cityyearLogo.png",
      id: "",
      company: " City Year Detroit",
      alt: "City Year Logo",
      position: "Team Leader",
      date: "JULY 2017 - JUNE 2018",
      strings: [
        " City Year is a national nonprofit that is located in 29 cities across the United States.  Their goal is to assist students in lower performing schools get to tenth grade on time, and on track so that they can graduate.  I served in Detroit for two years, and in my second year I came back as a Team Leader.  My job was to lead a team of six diverse AmeriCorps members through their 11 months of service, as they provided academic and socio-emotional support to 100+ students in grades 3 thru 8 at J.E. Clark Preparatory Academy.  ",
        "City Year places young adults, ages 18-24, inside schools for a whole year. They partner with a teacher to focus on an assigned list of students, in order to tutor, mentor, and coach students. As the Team Leader, alongside my Manager, I was the go-between for our team, and the administration at our school. I build relationships with 30+ faculty members in order to achieve our teams goals. I also collected, entered, and managed our teams data on 120+ students. ",
        "During my second year with City Year Detroit, I designed an afterschool program for 20 students, with support from Learn Fresh and the Detroit Pistons, where they used the sport of basketball and their favorite NBA and WNBA players to improve their math skills. I also led a computer programming course for third thru sixth graders to introduce them to very basic programming concepts like if/else statements.  Finally I created and implemented a school wide reading challenge, where the school surpassed the initial goal of reading 23,000 minutes, instead read almost 49,000 minutes. ",
      ],
      index: 4,
    },
    {
      logo: "./../../assets/careerTimeline/cityyearLogo.png",
      id: "",
      company: "  City Year Detroit",
      alt: "City Year Logo",
      position: "AmeriCorps Member",
      date: "AUGUST 2016 - JUNE 2017",
      strings: [
        " City Year is a national nonprofit that is located in 29 cities across the United States.  Their goal is to assist students in lower performing schools get to tenth grade on time, and on track so that they can graduate. I served my first of two years with City Year Detroit on Detroit’s west side, at Noble Elementary-Middle School. ",
        "My responsibilities as a AmeriCorps member, was to tutor, mentor, and coach a focused list of 6th grade students full-time in math, reading, behavior, and attendance, in order to help them get back on track.  In order to achieve the goals the students and I set, I led structured group activities designed to increase positive interactions students have at the whole class, and small group levels. ",
        "My role in our team was as the Attendance Coordinator.  Meaning I was in charge of planning, organizing, and executing school-wide initiatives that encouraged and rewarded good attendance.  During my time we created the 95% club, where students who held a 95% attendance for the month, was allowed to attend movie and popcorn parties, hot chocolate parties, as well as open gym times.  As attendance coordinator, I had access to little resources, so materials and snacks needed to be obtained through donations that I would reach out to local organizations to receive.",
        "City Year Detroit brought me from Ohio to Michigan, but it was the people and the city that encourage me to stay, and I’ve loved it ever since.",
      ],
      index: 5,
    },
  ];
  courses: any[] = [
    {
      school: "Grand Circus",
      subject: "Frontend Programming",
      date: "July '19 - September '19",
      location: "Detroit, MI",
      logo: "./../../assets/careerTimeline/gcLogo.png",
      pictureAlt: "Grand Circus Logo",
    },
    {
      school: "Ohio University",
      subject: "World Religions",
      date: "August '12 - August '16",
      location: "Athens, OH",
      logo: "./../../assets/careerTimeline/ohioLogo.png",
      pictureAlt: "Ohio University Logo",
    },
  ];
  spin: boolean = true;
  currentTimeline: any = this.timeline[1];
  lastTimeLine: any = this.timeline[0];
  up: boolean = true;
  down: boolean = true;
  dots: any[] = [
    { number: 0 },
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 },
  ];
  constructor() {}

  ngOnInit(): void {}
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
  goToLink(url: string) {
    window.open(url, "_blank");
  }
  scroll(index: number, direction: boolean) {
    document.getElementById("strokeFromRight").classList.add("strokeFromRight");
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
