import { Component, Input, AfterViewInit, ElementRef, ViewChild, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { MovieService } from '../../services/movies/movie.service';
import { Movies } from '../../interfaces/movie.interface';
import { Series } from '../../interfaces/serise.interface';

@Component({
  selector: 'app-tv-swiper',
  standalone: true,
  imports: [],
  templateUrl: './tv-swiper.component.html',
  styleUrl: './tv-swiper.component.css'
})
export class TvSwiperComponent implements AfterViewInit, OnInit{
  @ViewChild('swiperContainer', { static: false }) swiperContainer!: ElementRef;
  @Input() slidesPerView: number = 5; // Default value, can be overridden

  private swiper!: Swiper;

  ngAfterViewInit(): void {
    const config: SwiperOptions = {
      slidesPerView: this.slidesPerView,
      spaceBetween: 20,
      setWrapperSize: true,
      roundLengths: true,
      autoHeight: false,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      loop: true,
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3, // Medium screens
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: this.slidesPerView,
          spaceBetween: 20,
        },
      }
    };

    this.swiper = new Swiper(this.swiperContainer.nativeElement, config);
  }
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
