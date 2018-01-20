import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angul  getMoovie(arg0: any): any {
    throw new Error("Method not implemented.");
  }
ar DI.
*/
@Injectable()
export class MoovieProvider {

  private baseApiPath = "https://api.themoviedb.org/3/";
  private apiKey = "8095e688bcaa04c02aec49be491125df";

  constructor(public http: HttpClient) {
    console.log('Hello MoovieProvider Provider');
  }

  getLatestMovies(page = 1) {
    return this.http.get(this.baseApiPath + `movie/popular?page=${page}&api_key=` + this.apiKey);
  }

  getMoovie(filmeId) {
    return this.http.get(this.baseApiPath + `movie/${filmeId}?api_key=` + this.apiKey);
  }

}
