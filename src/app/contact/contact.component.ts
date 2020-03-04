import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
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
