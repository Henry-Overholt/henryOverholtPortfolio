import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tester",
  templateUrl: "./tester.component.html",
  styleUrls: ["./tester.component.css"],
})
export class TesterComponent implements OnInit {
  squares: any[];
  spin: boolean = true;
  constructor() {}

  ngOnInit(): void {
    // this.runBars();
  }
  handleWheelSpin() {
    if (this.spin === true) {
      document.getElementById("interestsWheel").classList.remove("spinWheel");
      this.spin = !this.spin;
    } else {
      document.getElementById("interestsWheel").classList.add("spinWheel");
      this.spin = !this.spin;
    }
  }
}
