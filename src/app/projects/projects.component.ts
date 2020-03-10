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
    trigger("swingUp", [
      state("void", style({ opacity: 0 })),
      transition("void=>*", animate("500ms"))
    ]),
    trigger("changePosition", [
      state(
        "initial",
        style({
          background: "white",
          color: "rgb(0, 0, 56)"
        })
      ),
      state(
        "final",
        style({
          background: "rgb(0, 0, 56)",
          color: "yellow"
        })
      ),
      transition("initial<=>final", animate("4000ms 1000ms"))
      // transition("final=>initial", animate("6000ms"))
    ]),
    trigger("changeColor", [
      state("void", style({ opacity: 0 })),
      // state("blue", style({ color: "rgb(0, 0, 56)" })),
      // state("yellow", style({ color: "yellow" })),
      transition("void=>*", animate("1000ms"))
      // transition("blue =>yellow", animate("5000ms")),
      // transition("yellow => blue", animate("1000ms"))
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
  randomInterval: number;
  currentState: string = "yellow";
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
    this.changeState(0);
    setTimeout(() => {
      this.changeState(1);
    }, 400);
    setTimeout(() => {
      this.changeState(2);
    }, 800);
    setTimeout(() => {
      this.changeState(3);
    }, 1200);
    setTimeout(() => {
      this.changeState(4);
    }, 1600);
    setTimeout(() => {
      this.changeState(5);
    }, 2000);
    setTimeout(() => {
      this.changeState(6);
    }, 2000);
    setTimeout(() => {
      this.changeState(7);
    }, 1600);
    setTimeout(() => {
      this.changeState(8);
    }, 1200);
    setTimeout(() => {
      this.changeState(9);
    }, 800);
    setTimeout(() => {
      this.changeState(10);
    }, 400);
    this.changeState(11);
  }
  changeState(i: number) {
    this.randomInterval = Math.floor(Math.random() * (5500 - 4500) + 4500);
    this.pillars[i].state =
      this.pillars[i].state === "initial" ? "final" : "initial";
    setInterval(() => {
      this.pillars[i].state =
        this.pillars[i].state === "initial" ? "final" : "initial";
    }, 6500);
  }
  changeTitleColor() {
    this.currentState = "blue";
    setTimeout(() => {
      this.currentState = this.currentState === "yellow" ? "blue" : "yellow";
      setInterval(() => {
        this.currentState = this.currentState === "yellow" ? "blue" : "yellow";
      }, 6100);
    }, 1000);
  }
}
