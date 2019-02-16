import { IRoute } from "./../interfaces/route";

export class ConfigProject {

    public static getURL(route: string, code?: string): string {
        return this.URL + route + ((code) ? code : "");
    }

    public static getHeader(): HeadersInit {
        // this.header.Authorization = "Bearer " + AuthClass.getTokenData().access;
        return this.header;
    }

    public static getRoutes(): IRoute {
        return this.routes;
    }

    private static header: {"Authorization": string, "Content-Type": string} = {
        "Authorization" : "",
        "Content-Type" : "application/json",
    };
    private static routes: IRoute = {
        test: "/test/",
    };
    private static URL: string = "http";
}
