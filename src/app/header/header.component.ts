import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  show: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  handleNavClick(): void {
    this.show = !this.show;
  }
  handleAnchorClicks(): void {
    this.show = false;
  }
  handleLogoHover() {
    document.getElementById("strokeAnimation").classList.add("strokeFromLeft");
  }
  handleLogoHoverLeave() {
    document
      .getElementById("strokeAnimation")
      .classList.remove("strokeFromLeft");
  }
}
