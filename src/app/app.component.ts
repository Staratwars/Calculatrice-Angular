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

  soustractionPremier: string;
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
    this.subResult =
      parseFloat(this.soustractionPremier) - parseFloat(this.subSecond);
  }

  multiplication() {
    this.byResult = parseFloat(this.byFirst) * parseFloat(this.bySecond);
  }

  division() {
    this.divResult = parseFloat(this.divFirst) / parseFloat(this.divSecond);
    this.save();
  }

  clearAllTexts() {
    this.somPrem = "";
    this.sommeSeconde = "";
    this.soustractionPremier = "";
    this.subSecond = "";
    this.byFirst = "";
    this.bySecond = "";
    this.divFirst = "";
    this.divSecond = "";
  }

  save() {}
}
