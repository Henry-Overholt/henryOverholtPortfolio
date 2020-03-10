import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  animations: [
    trigger("fadeInName", [
      state(
        "void",
        style({
          opacity: 0
        })
      ),
      transition("void=>*", animate(2000))
    ]),
    trigger("fadeInP", [
      state(
        "void",
        style({
          opacity: 0
        })
      ),
      transition("void =>*", animate("1s 2000ms ease-in"))
    ]),
    trigger("changePosition", [
      state(
        "initial",
        style({
          left: "100%"
        })
      ),
      state(
        "final",
        style({
          left: "-100%",
          background: "yellow"
        })
      ),
      transition("initial=>final", animate("6000ms 500ms")),
      transition("final=>initial", animate("6000ms 500ms"))
    ])
  ]
})
export class HomeComponent implements OnInit {
  currentState = "initial";
  bubbles: any[] = [
    { class: " lg bubble  ", index: 0, state: "initial" },
    { class: "md bubble ", index: 1, state: "final" },
    { class: "md bubble ", index: 2, state: "initial" },
    { class: "sm bubble ", index: 3, state: "final" },
    { class: "sm bubble ", index: 4, state: "initial" },
    { class: "sm bubble ", index: 5, state: "final" },
    { class: "sm bubble ", index: 6, state: "initial" },
    { class: "lg bubble ", index: 7, state: "final" },
    {
      class: " md bubble ",
      index: 8,
      state: "initial"
    },
    { class: " lg bubble ", index: 9, state: "final" },
    { class: " lg bubble ", index: 10, state: "initial" },
    { class: " md bubble ", index: 11, state: "final" },
    { class: " md bubble ", index: 12, state: "initial" },
    { class: " sm bubble ", index: 13, state: "final" },
    { class: "sm bubble", index: 14, state: "initial" }
  ];
  randomInterval: number;

  constructor() {}

  ngOnInit() {
    this.start();
  }
  start() {
    this.nameIntro();
    this.staggerBubbles();
  }
  staggerBubbles() {
    this.changeState(0);
    setTimeout(() => {
      this.changeState(1);
    }, Math.random() * (600 - 200) + 200);
    setTimeout(() => {
      this.changeState(2);
    }, Math.random() * (1200 - 800) + 800);
    setTimeout(() => {
      this.changeState(3);
    }, Math.random() * (1700 - 1300) + 1300);
    setTimeout(() => {
      this.changeState(4);
    }, Math.random() * (2200 - 1800) + 1800);
    setTimeout(() => {
      this.changeState(5);
    }, Math.random() * (2700 - 2300) + 2300);
    setTimeout(() => {
      this.changeState(6);
    }, Math.random() * (3200 - 2700) + 2700);
    //middle
    setTimeout(() => {
      this.changeState(7);
    }, Math.random() * (3700 - 3200) + 3200);
    //middle
    setTimeout(() => {
      this.changeState(8);
    }, Math.random() * (3200 - 2700) + 2700);
    setTimeout(() => {
      this.changeState(9);
    }, Math.random() * (2700 - 2300) + 2300);
    setTimeout(() => {
      this.changeState(10);
    }, Math.random() * (2200 - 1800) + 1800);
    setTimeout(() => {
      this.changeState(11);
    }, Math.random() * (1700 - 1300) + 1300);
    setTimeout(() => {
      this.changeState(12);
    }, Math.random() * (1200 - 800) + 800);
    setTimeout(() => {
      this.changeState(13);
    }, Math.random() * (600 - 200) + 200);
    this.changeState(14);
  }
  changeState(i): void {
    this.randomInterval = Math.floor(Math.random() * (7500 - 6500) + 6500);
    this.bubbles[i].state =
      this.bubbles[i].state === "initial" ? "final" : "initial";
    setInterval(() => {
      this.bubbles[i].state =
        this.bubbles[i].state === "initial" ? "final" : "initial";
    }, this.randomInterval);
  }
  nameIntro() {
    let title = document.querySelector("h1");
    setTimeout(() => {
      title.style.transition = "0.5s linear";
      setTimeout(() => {
        title.style.borderTop = "6px solid rgb(0, 0, 56)";
      }, 400);
      setTimeout(() => {
        title.style.borderRight = "6px solid rgb(0, 0, 56)";
      }, 500);
      setTimeout(() => {
        title.style.borderBottom = "6px solid rgb(0, 0, 56)";
      }, 600);
      setTimeout(() => {
        title.style.borderLeft = "6px solid rgb(0, 0, 56)";
      }, 700);
    }, 1000);
  }
}
