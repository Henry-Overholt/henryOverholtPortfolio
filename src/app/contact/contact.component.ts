import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import emailjs, { EmailJSResponseStatus } from "emailjs-com";
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from "@angular/animations";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
  animations: [
    trigger("fadeInRight", [
      state("void", style({ opacity: 0, left: "100vh" })),
      transition("void=>*", animate("1500ms ease-in")),
    ]),
    trigger("fadeInLeft", [
      state(
        "void",
        style({ opacity: 0, right: "100vh", position: "relative" })
      ),
      transition("void=>*", animate("1500ms ease-in")),
    ]),
  ],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  goToLink(number: number) {
    if (number === 1) {
      window.open("https://www.linkedin.com/in/henry-overholt/", "_blank");
    } else {
      window.open("https://github.com/Henry-Overholt", "_blank");
    }
  }
  submitForm(form: NgForm): void {
    let templateParams = {
      from_name: form.value.name,
      from_email: form.value.email,
      from_subject: form.value.subject,
      message_html: form.value.message,
    };
    emailjs.send("gmail", "", templateParams, " ").then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
    console.log(templateParams);
    document.querySelector("form").reset();
  }
}
