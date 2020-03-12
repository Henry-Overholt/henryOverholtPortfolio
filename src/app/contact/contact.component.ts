import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
  animations: [
    trigger("fadeInRight", [
      state("void", style({ opacity: 0, left: "100vh" })),
      transition("void=>*", animate("1500ms ease-in"))
    ]),
    trigger("fadeInLeft", [
      state(
        "void",
        style({ opacity: 0, right: "100vh", position: "relative" })
      ),
      transition("void=>*", animate("1500ms ease-in"))
    ])
  ]
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  submitForm(form: NgForm): void {
    let name: string = form.value.name;
    let email: string = form.value.email;
    let subject: string = form.value.subject;
    let message: string = form.value.message;
    console.log(`${name}, ${email}, ${subject}, ${message}`);
    document.querySelector("form").reset();
  }
}
