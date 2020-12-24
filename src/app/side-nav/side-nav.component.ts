import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.css"],
})
export class SideNavComponent implements OnInit {
  @Output() clicked = new EventEmitter<void>();
  route: string;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  closeNav(): void {
    this.clicked.emit();
  }
  handleRouteClick(route: string): void {
    this.route = route;
    setTimeout(() => {
      this.router.navigate([`/${route}`]);
      this.closeNav();
    }, 500);
    setTimeout(() => {
      this.route = undefined;
    }, 800);
  }
}
