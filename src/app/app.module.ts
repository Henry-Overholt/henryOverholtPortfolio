import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { StoryComponent } from "./story/story.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ContactComponent } from "./contact/contact.component";
import { FormsModule } from "@angular/forms";
import { SillsDisplayComponent } from "./projects/sills-display/sills-display.component";
import { ProjectComponent } from "./projects/project/project.component";
import { FooterComponent } from "./footer/footer.component";
import { TimelineComponent } from "./story/timeline/timeline.component";
import { HeaderComponent } from "./header/header.component";
import { ButtonComponent } from "./button/button.component";
import { BlogComponent } from "./blog/blog.component";
import { SideNavComponent } from './side-nav/side-nav.component';

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "story", component: StoryComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "contact", component: ContactComponent },
  { path: "blog", component: BlogComponent },
  { path: "**", component: HomeComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StoryComponent,
    ProjectsComponent,
    ContactComponent,
    SillsDisplayComponent,
    ProjectComponent,
    FooterComponent,
    TimelineComponent,
    HeaderComponent,
    ButtonComponent,
    BlogComponent,
    SideNavComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
