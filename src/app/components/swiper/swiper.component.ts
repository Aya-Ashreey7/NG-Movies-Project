import { Component, OnInit } from '@angular/core';
import { Movies } from '../../interfaces/movie.interface';
import { MovieService } from '../../services/movies/movie.service';

@Component({
  selector: 'app-swiper',
  standalone: true,
  imports: [],
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.css'
})
export class SwiperComponent implements OnInit {
 imgUrl ='https://image.tmdb.org/t/p/w500/'
    movies!:Movies[]
    constructor(private movieService:MovieService){}
  
  
  displayMovies(){
      this.movieService.getMovies('movie').subscribe({
        next:(res)=>{
          console.log(res.results)
          this.movies=res.results ;
        }
      })
  }
  
  ngOnInit(): void {
    this.displayMovies()
  }

}
