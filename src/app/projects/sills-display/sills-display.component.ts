import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from "@angular/animations";
@Component({
  selector: "app-sills-display",
  templateUrl: "./sills-display.component.html",
  styleUrls: ["./sills-display.component.css"],
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
  ],
})
export class SillsDisplayComponent implements OnInit {
  skillsList: any[] = [
    { skill: "HTML", last: false, write: false, cursor: false },
    { skill: "CSS", last: false, write: false, cursor: false },
    { skill: "JavaScript", last: false, write: false, cursor: false },
    { skill: "Angular", last: false, write: false, cursor: false },
    { skill: "Node.JS", last: false, write: false, cursor: false },
    { skill: "Git/GitHub", last: false, write: false, cursor: false },
    { skill: "TypeScript", last: false, write: false, cursor: false },
    { skill: "postgresSQL", last: false, write: false, cursor: false },
    { skill: "express.js", last: true, write: false, cursor: false },
  ];
  lastSkill: object = this.skillsList[this.skillsList.length - 1];
  skillsListNum: number = this.skillsList.length - 1;
  cursor: string = "blinkOn";
  interval: number = 0;
  playAgain: boolean = false;
  startSkill: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.blinkCursor();
    setTimeout(() => {
      this.writeSkills();
    }, 1000);
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
