import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tester",
  templateUrl: "./tester.component.html",
  styleUrls: ["./tester.component.css"],
})
export class TesterComponent implements OnInit {
  squares: any[] = [
    { id: "zero", show: false, class: "box " },
    { id: "one", show: false, class: "box " },
    { id: "two", show: false, class: "box " },
    { id: "three", show: false, class: "box" },
    { id: "four", show: false, class: "box" },
    { id: "five", show: false, class: "box " },
    { id: "six", show: false, class: "box " },
    { id: "seven", show: false, class: "box" },
    { id: "eight", show: false, class: "box" },
    { id: "nine", show: false, class: "box " },
    { id: "ten", show: false, class: "box " },
    { id: "eleven", show: false, class: "box  " },
    { id: "twelve", show: false, class: "box" },
    { id: "thirteen", show: false, class: "box  " },
    { id: "fourteen", show: false, class: "box" },
    { id: "fifteen", show: false, class: "box " },
  ];
  constructor() {}

  ngOnInit(): void {
    this.runBars();
  }
  runBars() {
    setTimeout(() => {
      setTimeout(() => {
        document.getElementById("first").style.width = "80%";
      }, 200);
      setTimeout(() => {
        document.getElementById("second").style.width = "60%";
      }, 600);
      setTimeout(() => {
        document.getElementById("third").style.width = "40%";
      }, 1000);
    }, 500);
  }
}
