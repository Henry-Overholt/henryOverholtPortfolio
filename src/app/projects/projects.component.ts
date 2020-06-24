import { Component, OnInit } from "@angular/core";
import { ProjectsService } from "./../services/projects.service";
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from "@angular/animations";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"],
  animations: [
    trigger("cursor", [
      state("blinkOn", style({ visibility: "visible" })),
      state("blinkOff", style({ visibility: "hidden" })),
      transition("blinkOn<=>blinkOff", animate("100ms")),
    ]),
    trigger("type", [
      state("void", style({ opacity: 0 })),
      transition("void=>*", animate("100ms")),
    ]),
    trigger("swingUp", [
      state("void", style({ opacity: 0, top: "100vh" })),
      transition("void=>*", animate("1000ms")),
    ]),
    trigger("fadeIn", [
      state("void", style({ opacity: 0 })),
      transition("void=>*", animate("1000ms 500ms")),
    ]),
    trigger("changePosition", [
      state(
        "initial",
        style({
          background: "white",
        })
      ),
      state(
        "final",
        style({
          background: "rgb(0, 0, 56)",
        })
      ),
      transition("initial<=>final", animate("4000ms 1500ms")),
    ]),
    trigger("fadeTitle", [
      state("void", style({ opacity: 0 })),
      transition("void=>*", animate("2000ms 1000ms ease-in")),
    ]),
  ],
})
export class ProjectsComponent implements OnInit {
  projects: any[];
  pillars: any[] = [
    { class: " pillar  ", index: 0, state: "initial" },
    { class: "pillar ", index: 1, state: "initial" },
    { class: "pillar ", index: 2, state: "initial" },
    { class: "pillar ", index: 3, state: "initial" },
    { class: "pillar ", index: 4, state: "initial" },
    { class: "pillar ", index: 5, state: "initial" },
    { class: "pillar ", index: 6, state: "initial" },
    { class: "pillar ", index: 7, state: "initial" },
    { class: "pillar ", index: 8, state: "initial" },
    { class: "pillar ", index: 9, state: "initial" },
    { class: "pillar ", index: 10, state: "initial" },
    { class: "pillar ", index: 11, state: "initial" },
  ];
  currentState: string = "yellow";
  startSkill: boolean = false;
  skillsList: any[] = [
    { skill: "HTML", last: false, write: false, cursor: false },
    { skill: "CSS", last: false, write: false, cursor: false },
    { skill: "JavaScript", last: false, write: false, cursor: false },
    { skill: "Angular", last: false, write: false, cursor: false },
    { skill: "Node.JS", last: false, write: false, cursor: false },
    { skill: "Git/GitHub", last: false, write: false, cursor: false },
    { skill: "TypeScript", last: false, write: false, cursor: false },
    { skill: "postgresSQL", last: true, write: false, cursor: false },
  ];
  lastSkill: object = this.skillsList[this.skillsList.length - 1];
  skillsListNum: number = this.skillsList.length - 1;
  cursor: string = "blinkOn";
  interval: number = 0;
  playAgain: boolean = false;
  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.projects = this.projectsService.projects;
    this.startAnimations();
  }
  goToLink(url: string) {
    window.open(url, "_blank");
  }
  moreInfo(i: number) {
    if (this.projects[i].moreInfo === true) {
      this.projects[i].moreInfo = !this.projects[i].moreInfo;
    } else {
      this.projects.forEach((project) => {
        project.moreInfo = false;
      });
      this.projects[i].moreInfo = !this.projects[i].moreInfo;
    }
  }
  startAnimations() {
    setTimeout(() => {
      this.changeState(0);
    }, 500);

    setTimeout(() => {
      this.changeState(1);
    }, 1000);
    setTimeout(() => {
      this.changeState(2);
    }, 1500);
    setTimeout(() => {
      this.changeState(3);
    }, 2000);
    setTimeout(() => {
      this.changeState(4);
    }, 2500);
    setTimeout(() => {
      this.changeState(5);
    }, 3000);
    setTimeout(() => {
      this.changeState(6);
    }, 3000);
    setTimeout(() => {
      this.changeState(7);
    }, 2500);
    setTimeout(() => {
      this.changeState(8);
    }, 2000);
    setTimeout(() => {
      this.changeState(9);
    }, 1500);
    setTimeout(() => {
      this.changeState(10);
    }, 1000);
    setTimeout(() => {
      this.changeState(11);
    }, 500);
    setTimeout(() => {
      this.writeSkills();
    }, 1000);
    this.blinkCursor();
  }
  changeState(i: number) {
    this.pillars[i].state =
      this.pillars[i].state === "initial" ? "final" : "initial";
    setInterval(() => {
      this.pillars[i].state =
        this.pillars[i].state === "initial" ? "final" : "initial";
    }, 6500);
  }
  blinkCursor(): void {
    setInterval(() => {
      this.cursor = this.cursor === "blinkOn" ? "blinkOff" : "blinkOn";
    }, 500);
  }
  writeSkills() {
    setTimeout(() => {
      this.startSkill = true;
      this.skillsList[0].cursor = true;
      setTimeout(() => {
        this.skillsList[0].cursor = false;
        this.skillsList[1].cursor = true;
        this.skillsList[0].write = true;
        for (let i = 1; i <= this.skillsListNum; i++) {
          this.interval = this.interval + 2000;
          setTimeout(() => {
            this.skillsList[i - 1].cursor = false;
            this.skillsList[i].cursor = true;
            this.skillsList[i].write = true;
            if (i === this.skillsListNum) {
              this.playAgain = true;
            }
          }, this.interval);
        }
        this.skillsList[this.skillsListNum].cursor = false;
      }, 2000);
    }, 4000);
  }
  replay() {
    this.startSkill = false;
    this.skillsList.forEach((skill) => {
      skill.write = false;
      skill.cursor = false;
    });
    this.interval = 0;
    this.writeSkills();
    this.playAgain = false;
  }
}
