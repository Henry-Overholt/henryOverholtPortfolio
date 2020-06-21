import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
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
  submitForm(form: NgForm): void {
    let email = {
      name: form.value.name,
      email: form.value.email,
      subject: form.value.subject,
      message: form.value.message,
    };
    console.log(email);
    document.querySelector("form").reset();
  }
}
