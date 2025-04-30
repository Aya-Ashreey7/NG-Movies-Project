import { Component } from '@angular/core';
import { MovieService } from '../../services/movies/movie.service';
import { Series } from '../../interfaces/serise.interface';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent {
  constructor(private series:MovieService){}
  allSeries!: Series[]
  imgUrl ='https://image.tmdb.org/t/p/w500/'
  
  displaySeries(){
    this.series.getMovies('tv').subscribe({
      next:(res)=>{
        this.allSeries=res.results
        console.log(res.results);
        
      }
    })
  }
  ngOnInit(): void {
    this.displaySeries()
  }
}
