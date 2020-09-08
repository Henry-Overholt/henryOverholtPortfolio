import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.css"],
})
export class ProjectComponent implements OnInit {
  @Input() project: any;
  moreInfo: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  showMoreInfo(i: number) {
    this.moreInfo = !this.moreInfo;
  }
  goToLink(url: string) {
    window.open(url, "_blank");
  }
}
