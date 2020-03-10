import { Component, OnInit } from "@angular/core";
import { ProjectsService } from "./../services/projects.service";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"],
  animations: [
    trigger("type", [
      state("void", style({ opacity: 0 })),
      transition("void=>*", animate("500ms 1000ms"))
    ]),
    trigger("swingUp", [
      state("void", style({ opacity: 0, top: "100vh" })),
      transition("void=>*", animate("1000ms"))
    ]),
    trigger("fadeIn", [
      state("void", style({ opacity: 0 })),
      transition("void=>*", animate("1000ms 500ms"))
    ]),
    trigger("changePosition", [
      state(
        "initial",
        style({
          background: "white"
        })
      ),
      state(
        "final",
        style({
          background: "rgb(0, 0, 56)"
        })
      ),
      transition("initial<=>final", animate("4000ms 1500ms"))
    ]),
    trigger("fadeTitle", [
      state("void", style({ opacity: 0 })),
      transition("void=>*", animate("2000ms 1000ms ease-in"))
    ])
  ]
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
    { class: "pillar ", index: 11, state: "initial" }
  ];
  currentState: string = "yellow";
  commands: any[] = [
    {
      position: "Henrys-MacBook-Pro:~ henry-overholt$",
      command: "cd Documents",
      spread: false,
      class: "",
      folders: [],
      show: false
    },
    {
      position: "Henrys-MacBook-Pro:Documents henry-overholt$",
      command: "ls",
      spread: false,
      class: "",
      folders: [],
      show: false
    },
    {
      position: "",
      command: "",
      spread: true,
      class: "spread",
      folders: ["home", "contact", "projects", "story", "skills"],
      show: false
    },
    {
      position: "Henrys-MacBook-Pro:Documents henry-overholt$ ",
      command: "cd skills",
      spread: false,
      class: "",
      folders: [],
      show: false
    },
    {
      position: "Henrys-MacBook-Pro:skills henry-overholt$ ",
      command: "ls",
      spread: false,
      class: "",
      folders: [],
      show: false
    },
    {
      position: "",
      command: "",
      spread: true,
      class: " skills",
      folders: [
        "HTML",
        "CSS",
        "JavaScript",
        "Angular",
        "Node.JS",
        "Git/GitHub",
        "TypeScript",
        "SQL"
      ],
      show: false
    }
  ];
  cursor: boolean = true;
  playAgain: boolean = false;
  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.projects = this.projectsService.projects;
    this.startAnimations();
  }
  moreInfo(i: number) {
    this.projectsService.setProject(this.projects[i]);
  }
  startAnimations() {
    // this.changeTitleColor();
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
    this.blinkCursor();
    this.writeCommands();
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
      this.cursor = !this.cursor;
    }, 500);
  }
  writeCommands() {
    setTimeout(() => {
      this.commands[0].show = true;
      setTimeout(() => {
        this.commands[1].show = true;
        setTimeout(() => {
          this.commands[2].show = true;
          setTimeout(() => {
            this.commands[3].show = true;
            setTimeout(() => {
              this.commands[4].show = true;
              setTimeout(() => {
                this.commands[5].show = true;
                this.playAgain = true;
              }, 1500);
            }, 4000);
          }, 4000);
        }, 1500);
      }, 4000);
    }, 4000);
  }
  replay() {
    this.commands.forEach(command => {
      command.show = false;
    });
    this.writeCommands();
    this.playAgain = false;
  }
}
