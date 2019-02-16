import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { ServicesProvider } from "../../providers/services/services";

@IonicPage()
@Component({
  providers: [[ServicesProvider]],
  selector: "page-index",
  templateUrl: "index.html",
})
export class IndexPage {

  constructor(public navCtrl: NavController, public service: ServicesProvider) {
    // this.forPost();
    this.forGet();
  }

  public forPost(): void {
    this.service.post("https://swapi.co/api/people/1", {nome: "paulo"})
    .then((result) => {
      // tslint:disable-next-line:no-console
      console.log(result);
    });
  }

  public forGet(): void {
    this.service.get("https://swapi.co/api/people/2")
    .then((result) => {
      // tslint:disable-next-line:no-console
      console.log(result);
    });
  }

}
