import { Component, OnInit } from "@angular/core";
import { ProjectsService } from "./../services/projects.service";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"]
})
export class ProjectsComponent implements OnInit {
  projects: any[];
  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.projects = this.projectsService.projects;
  }
  moreInfo(i: number) {
    this.projectsService.setProject(this.projects[i]);
  }
}
