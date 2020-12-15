import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.css"],
})
export class ButtonComponent implements OnInit {
  @Input() buttonTxt: string;
  @Input() path: string;
  @Output() eventEmit = new EventEmitter<void>();
  constructor(private router: Router) {}

  ngOnInit(): void {}
  emitClick(): void {
    this.router.navigate([`/${this.path}`]);
  }
}
