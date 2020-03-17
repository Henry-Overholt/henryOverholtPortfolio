import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.css"]
})
export class ViewComponent implements OnInit {
  dots: any[] = [
    { number: 0, id: "ohio" },
    { number: 1, id: "cityYear" },
    { number: 2, id: "fayrouz" },
    { number: 3, id: "forOurFuture" },

    { number: 4, id: "grandCircus" }
  ];
  currentTimeline: any = { number: 4, id: "grandCircus" };
  constructor() {}

  ngOnInit() {}
  moveLeft(): void {
    if (this.currentTimeline.index < this.dots.length - 1)
      this.currentTimeline = this.dots[this.currentTimeline.index - 1];
  }
  moveRight(): void {
    if (this.currentTimeline.index > 0) {
      this.currentTimeline = this.dots[this.currentTimeline.index + 1];
    }
  }
}
