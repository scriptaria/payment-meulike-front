import { Injectable } from "@angular/core";
import { Headers, Http, RequestOptions } from "@angular/http";
import { ConfigProject } from "./../../class/config-project";

@Injectable()
export class ServicesProvider {

  private options: RequestOptions;

  constructor(protected http: Http) {
    // se precisar pode colocar "Authorization" : "",
    const headers = new Headers({
      "Content-Type" : "application/json",
    });
    this.options = new RequestOptions({headers});
  }

  public post(route: string, body: any): Promise<any> {
    return new Promise((resolve) => {
      this.http.post(route, body, this.options)
      .subscribe((data) => {
          resolve(data);
        }, (error) => {
          resolve(error);
      });
    });
  }

}
