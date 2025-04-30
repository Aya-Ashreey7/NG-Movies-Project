import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from '../../services/movies/movie.service';
import { Movies } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit {
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
