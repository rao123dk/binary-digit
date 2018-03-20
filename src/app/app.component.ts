import { Component, Input, OnChanges, SimpleChange } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Base converter";
  form;
  ngOnInit() {
    this.form = new FormGroup({
      decimal: new FormControl(""),
      binary: new FormControl(""),
      octal: new FormControl(""),
      hexa: new FormControl("")
    });
  }

  decimalChange = function(oldvalue, newValue) {
    this.form.patchValue({binary : parseInt(newValue, 10).toString(2)});
  };
}
