import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "KINGCOBRAcalculator";
  somPrem: string;
  sommeSeconde: string;
  sumResult: number;

  subFirst: string;
  subSecond: string;
  subResult: number;

  byFirst: string;
  bySecond: string;
  byResult: number;

  divFirst: string;
  divSecond: string;
  divResult: number;

  somme() {
    this.sumResult = parseFloat(this.somPrem) + parseFloat(this.sommeSeconde);
  }

  soustraction() {
    this.subResult = parseFloat(this.subFirst) - parseFloat(this.subSecond);
  }

  multiplication() {
    this.byResult = parseFloat(this.byFirst) * parseFloat(this.bySecond);
  }

  division() {
    this.divResult = parseFloat(this.divFirst) / parseFloat(this.divSecond);
  }

  clearAllTexts() {
    this.somPrem = "";
    this.sommeSeconde = "";
    this.subFirst = "";
    this.subSecond = "";
    this.byFirst = "";
    this.bySecond = "";
    this.divFirst = "";
    this.divSecond = "";
  }

  save() {
    
  
  }
}
