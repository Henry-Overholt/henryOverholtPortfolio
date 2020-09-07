import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tester",
  templateUrl: "./tester.component.html",
  styleUrls: ["./tester.component.css"],
})
export class TesterComponent implements OnInit {
  squares: any[];
  constructor() {}

  ngOnInit(): void {
    // this.runBars();
  }
}
