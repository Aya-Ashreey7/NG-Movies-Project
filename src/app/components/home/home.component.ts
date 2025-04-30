import { Component, HostListener, OnInit } from '@angular/core';
import { Movies } from '../../interfaces/movie.interface';
import { MovieService } from '../../services/movies/movie.service';
import { CommonModule } from '@angular/common';
import { SwiperComponent } from '../swiper/swiper.component';
import { TvSwiperComponent } from '../tv-swiper/tv-swiper.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,SwiperComponent,TvSwiperComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})



export class HomeComponent implements OnInit {
  slidesPerView = 5;
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
