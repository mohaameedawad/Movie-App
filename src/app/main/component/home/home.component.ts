import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MainService } from "../../services/main.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  Loading = true;
  trendingmovies: any = [];
  constructor(private service: MainService) { }

  ngOnInit(): void {
     this.getTrendingMovies();
  }

  getTrendingMovies() {
    this.Loading = true;
    this.service.getTrendingMovies('movie').subscribe((res: any) =>{
      this.trendingmovies = res.results
      this.Loading = false;
    }
    );
  }



  customOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 1000,
    navText: ['<i class="fa-solid fa-arrow-left text-body"></i>', '<i class="fa-solid fa-arrow-right text-body"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 8
      }
    },
    nav: true
  }
}


