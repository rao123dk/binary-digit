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
  bin = 0;
  octa = 0;
  hxa = 0;
  decimalChange = function(oldvalue, newValue) {
    if(newValue !== ''){
      this.form.patchValue({binary : parseInt(newValue, 10).toString(2)});
      this.form.patchValue({octal : parseInt(newValue, 10).toString(8)});
      this.form.patchValue({hexa : parseInt(newValue, 10).toString(16).toUpperCase()});

    }else{
      this.form.patchValue({binary :'' });
      this.form.patchValue({octal : ''});
      this.form.patchValue({hexa : ''});
    }
  };
  binaryChange = function(oldvalue, newValue){
    this.bin = this.bin +1;
    if(this.bin === 1){
      if(newValue !== ''){
        this.form.patchValue({decimal : parseInt(newValue, 2).toString(10)});
      }else{
        this.form.patchValue({decimal : ''});
      }
      this.bin = 0;
    }


  }

  //@@ octal chnage
  octalChange = function(oldvalue, newValue){
    this.octa = this.octa +1;
    if(this.octa === 1){
      if(newValue !== ''){
        this.form.patchValue({decimal : parseInt(newValue, 8).toString(10)});
      }else{
        this.form.patchValue({decimal : ''});
      }
      this.octa = 0;
    }


  }

  //@@ hexa chnage
  hexaChange = function(oldvalue, newValue){
    this.octa = this.hxa +1;
    if(this.hxa === 1){
      if(newValue !== ''){
        this.form.patchValue({decimal : parseInt(newValue, 16).toString(10)});
      }else{
        this.form.patchValue({decimal : ''});
      }
      this.hxa = 0;
    }


  }




}
