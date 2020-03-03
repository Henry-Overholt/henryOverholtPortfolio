import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-story",
  templateUrl: "./story.component.html",
  styleUrls: ["./story.component.css"]
})
export class StoryComponent implements OnInit {
  timeline: any[] = [
    {
      logo: "./../../assets/careerTimeline/gcLogo.png",
      company: "Grand Circus",
      alt: "Grand Circus Bootcamp Logo",
      position: "Front-end Bootcamp",
      date: "July 2019 - September 2019",
      body: [
        "This is my most recent experience",
        "This was a bootcamp",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores accusamus, rerum quisquam, accusantium cupiditate nulla ipsum incidunt pariatur consequatur animi architecto cumque neque hic quo inventore laudantium totam quia reiciendis?"
      ],
      index: 0
    },
    {
      logo: "./../../assets/careerTimeline/forOurFutureLogo.png",
      company: "For Our Future MI",
      alt: "For Our Future MI Logo",
      position: "Field Organizer",
      date: "September 2018 - December 2018",
      body: [
        "THis was a campiagn for local offices",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores accusamus, rerum quisquam, accusantium cupiditate nulla ipsum incidunt pariatur consequatur animi architecto cumque neque hic quo inventore laudantium totam quia reiciendis?"
      ],
      index: 1
    },
    {
      logo: "./../../assets/careerTimeline/cityyearLogo.png",
      company: "City Year Detroit",
      alt: "City Year Logo",
      position: "Team Leader",
      date: "August 2016 - July 2018",
      body: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores accusamus, rerum quisquam, accusantium cupiditate nulla ipsum incidunt pariatur consequatur animi architecto cumque neque hic quo inventore laudantium totam quia reiciendis?",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores accusamus, rerum quisquam, accusantium cupiditate nulla ipsum incidunt pariatur consequatur animi architecto cumque neque hic quo inventore laudantium totam quia reiciendis?"
      ],
      index: 2
    },
    {
      logo: "./../../assets/careerTimeline/ohioLogo.png",
      company: "Ohio University",
      alt: "For Our Future MI Logo",
      position: "World Religions Major",
      date: "August 2012 - August 2016",
      body: [
        "This is my most recent experience",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores accusamus, rerum quisquam, accusantium cupiditate nulla ipsum incidunt pariatur consequatur animi architecto cumque neque hic quo inventore laudantium totam quia reiciendis?"
      ],
      index: 3
    }
  ];
  currentTimeline: any = this.timeline[0];
  strings: any = this.currentTimeline.body;
  up: boolean = false;
  down: boolean = true;
  dots: number[] = [0, 1, 2, 3];

  constructor() {}

  ngOnInit() {}
  handleUpArrow(): void {
    let index: number = this.currentTimeline.index;
    this.down = true;
    if (index > 0) {
      let nextIndex: number = index - 1;
      this.currentTimeline = this.timeline[nextIndex];
    } else {
      this.up = false;
    }
  }
  handleDownArrow(): void {
    let index: number = this.currentTimeline.index;
    this.up = true;
    if (index < this.timeline.length - 1) {
      let nextIndex: number = index + 1;
      this.currentTimeline = this.timeline[nextIndex];
    } else {
      this.down = false;
    }
  }
}
