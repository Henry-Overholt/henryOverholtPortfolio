import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition,
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
          opacity: 0,
        })
      ),
      transition("void=>*", animate(2000)),
    ]),
    trigger("fadeInP", [
      state(
        "void",
        style({
          opacity: 0,
        })
      ),
      transition("void =>*", animate("1s 2000ms ease-in")),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  currentState = "initial";

  randomInterval: number;

  constructor() {}

  ngOnInit() {
    this.start();
  }
  start() {
    this.nameIntro();
  }
  nameIntro() {
    let title = document.querySelector("h1");
    setTimeout(() => {
      title.style.transition = "0.5s linear";
      setTimeout(() => {
        title.style.borderTop = "5px solid rgb(0,0,56)";
      }, 400);
      setTimeout(() => {
        title.style.borderRight = "5px solid rgb(0,0,56)";
      }, 500);
      setTimeout(() => {
        title.style.borderBottom = "5px solid rgb(0,0,56)";
      }, 600);
      setTimeout(() => {
        title.style.borderLeft = "5px solid rgb(0,0,56)";
      }, 700);
    }, 1000);
  }
}
