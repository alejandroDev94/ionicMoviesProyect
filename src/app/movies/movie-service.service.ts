import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  API_KEY='6cbd50d5bb13bfb6bf9dce42b69adc5f'
  API_BASE_URL='https://api.themoviedb.org/3/'
  API_BASE_URL_IMAGE='https://image.tmdb.org/t/p/w500'
  
  
  private movies:any[] =[]

  url=`${this.API_BASE_URL}discover/movie?sort_by=popularity.desc&api_key=${this.API_KEY}`
  
  constructor(private http:HttpClient) {

   }

  getMovie(id:number){
    return {
        ...this.movies.find(place => {
        return place.id==id
      })
    }
  }
  getImageMovie(relativeURL:string):string{
    return this.API_BASE_URL_IMAGE+relativeURL;
  }
  getMoviesByName(nameSearch:string):Observable<any>{
    return this.http.get(`${this.API_BASE_URL}search/movie?query=${nameSearch}&api_key=${this.API_KEY}`);
  }

  getMovies():Observable<any>{
    //devuelve una copia de places
    return this.http.get(this.url);
  }
  setMovies(moviesLoades:any){
      this.movies=moviesLoades;
      // console.log("movies desde el servicio");
      // console.log(this.movies);
  }
  


}
