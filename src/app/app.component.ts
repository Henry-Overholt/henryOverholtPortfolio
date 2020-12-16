import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "portfolio";
  open: boolean = true;

  openNav(): void {
    this.open = !this.open;
  }
}
