import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { ServicesProvider } from "../../providers/services/services";

@Component({
  providers: [[ServicesProvider]],
  selector: "page-home",
  templateUrl: "home.html",
})
export class HomePage {

  constructor(public navCtrl: NavController, public service: ServicesProvider) {
    this.list();
  }

  public list(): void {
    this.service.post("http://api.meulike.com.br/test.php", {nome: "paulo"})
    .then((result) => {
      // tslint:disable-next-line:no-console
      console.log(result);
    });
  }
}
