import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MainService {

  apiKey: string = "300611d156df6bff13bad366acaf8245";
  constructor( private http: HttpClient) { }

  getTrendingMovies(mediaType : string) {
    return this.http.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=${this.apiKey}`)
  }
  getPopular(mediaType: string, p: any){
  return this.http.get(`https://api.themoviedb.org/3/${mediaType}/popular?api_key=${this.apiKey}&language=en-US&page=${p}`)
}

getDetails(type: string, id: number) {
  return this.http.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${this.apiKey}&language=en-US`)
}

getTrailer(type:string, id:number){
  return this.http.get(`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${this.apiKey}&language=en-US`);
}

getRecommended(mediaType: string,id:number, p: any){
return this.http.get(`https://api.themoviedb.org/3/${mediaType}/${id}/recommendations?api_key=${this.apiKey}&language=en-US&page=${p}`)
}
getMovieCredit(id:number){
return this.http.get(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${this.apiKey}&language=en-US`)
}


}
