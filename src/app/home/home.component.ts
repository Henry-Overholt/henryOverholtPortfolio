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
    trigger("changePosition", [
      state(
        "initial",
        style({
          left: "100vw"
        })
      ),
      state(
        "final",
        style({
          left: "-100vw"
        })
      ),
      transition("initial=>final", animate("4000ms")),
      transition("final=>initial", animate("4000ms"))
    ])
  ]
})
export class HomeComponent implements OnInit {
  currentState = "initial";
  bubbles: any[] = [
    { class: "zero lg bubble left ", index: 0, state: "initial" },
    { class: "one md bubble right", index: 1, state: "final" },
    { class: "two sm bubble right", index: 2, state: "initial" },
    { class: "three lg bubble left", index: 3, state: "final" },
    { class: "four sm bubble right", index: 4, state: "initial" },
    { class: "five md bubble left", index: 5, state: "final" },
    { class: "six md bubble right", index: 6, state: "initial" },
    { class: "seven lg bubble left", index: 7, state: "final" },
    {
      class: "eight sm bubble left",
      index: 8,
      state: "initial"
    },
    { class: "nine sm bubble right", index: 9, state: "final" },
    { class: "ten lg bubble left", index: 10, state: "initial" },
    { class: "eleven md bubble right", index: 11, state: "final" }
  ];
  randomInterval: number = Math.floor(Math.random() * (6000 - 4200) + 4200);

  constructor() {}

  ngOnInit() {
    this.staggerBubbles();
  }
  start() {
    this.staggerBubbles();
  }
  staggerBubbles() {
    this.changeState(0);
    setTimeout(() => {
      this.changeState(1);
    }, 500);
    setTimeout(() => {
      this.changeState(2);
    }, 100);
    setTimeout(() => {
      this.changeState(3);
    }, 1500);
    setTimeout(() => {
      this.changeState(4);
    }, 2000);
    setTimeout(() => {
      this.changeState(5);
    }, 2500);
    setTimeout(() => {
      this.changeState(6);
    }, 2500);
    setTimeout(() => {
      this.changeState(7);
    }, 2000);
    setTimeout(() => {
      this.changeState(8);
    }, 1500);
    setTimeout(() => {
      this.changeState(9);
    }, 1000);
    setTimeout(() => {
      this.changeState(10);
    }, 500);
    this.changeState(11);
  }
  changeState(i): void {
    this.randomInterval = Math.floor(Math.random() * (6000 - 4200) + 4200);
    this.bubbles[i].state =
      this.bubbles[i].state === "initial" ? "final" : "initial";
    setInterval(() => {
      this.bubbles[i].state =
        this.bubbles[i].state === "initial" ? "final" : "initial";
    }, this.randomInterval);
  }
}
