import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  @Output() clicked = new EventEmitter<void>();
  show: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  handleNavClick(): void {
    // this.show = !this.show;
    this.clicked.emit();
  }
  handleAnchorClicks(): void {
    this.show = false;
  }
}
