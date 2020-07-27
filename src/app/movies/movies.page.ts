import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from './movie-service.service';
import { ShortNamePipe } from '../short-name.pipe';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  movies:any=[]
  

  constructor(private movieService:MovieServiceService) {
   

    
  }

  ngOnInit() {
    this.movieService.getMovies().subscribe(({results}) => {
      this.movies=results;
      console.log(this.movies);
      this.movieService.setMovies(this.movies);
    });
    
  }
  getImage(imageUrl:string){
    return this.movieService.getImageMovie(imageUrl);
  }

  filterSearch(search:any){
    console.log(search.target.value);
    this.movieService.getMoviesByName(search.target.value).subscribe(({results}) => {
      this.movies=results;
      console.log(this.movies);
    })
  }
}
