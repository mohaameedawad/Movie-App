import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  apiKey: string = "300611d156df6bff13bad366acaf8245";
  constructor( private http: HttpClient) { }

// https://api.themoviedb.org/3/search/multi?api_key=${this.apiKey}&language=en-US&page=1&include_adult=false
  search(text: string) {
    return this.http.get(  `https://api.themoviedb.org/3/search/multi?api_key=${this.apiKey}&language=en-US&query=${text}&page=1&include_adult=false`)
  }

}
