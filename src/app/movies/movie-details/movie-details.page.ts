import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { MovieServiceService } from '../movie-service.service';



@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  movie:any;

  constructor(private activateRouter:ActivatedRoute,private movieService:MovieServiceService) {
    
   }

  ngOnInit() {
    this.activateRouter.paramMap.subscribe(paramMap => {
        const id=Number(paramMap.get('movieId'))
        console.log("id donde enrutamos "+id)
        //lo sacamos del servicio creado
        this.movie=this.movieService.getMovie(id);
        console.log(this.movie);
    })

  }
  getImage(imageUrl:string){
    return this.movieService.getImageMovie(imageUrl);
  }

}
