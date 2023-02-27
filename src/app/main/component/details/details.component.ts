import { Component, OnInit } from '@angular/core';
import { MainService } from "../../services/main.service";
import { ActivatedRoute, Params } from "@angular/router";
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  Loading = true;
  total!: any;
  p:number = 1;
  type!: string;
  id!:number;
  details!: any;
  genres: any =[];
  videopath!: string ;
  recommended:any = [];
  constructor(private service: MainService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.p = 1;
    this.router.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.type = params['movies']
        this.getDetails(this.type, this.id);
        if (this.type != 'person') {
          this.paginate(this.p);
          this.getTrailer(this.type, this.id);
        } else {
          this.getMovieCredit(this.id);
        }
      }
    )
  }

  getDetails(type: string, id: number) {
    this.Loading = true
    this.service.getDetails(type,id).subscribe((res:any)=> {
      this.details = res;
      this.genres = res.genres;
      this.Loading = false
    })
  }

  getTrailer(type: string, id: number) {
      this.Loading = true;
      this.service.getTrailer(type,id).subscribe((res:any)=> {
        let video = res.results.find((ele: any) => ele.type === "Trailer" || ele.type === "Clip");
        this.Loading = false;
        if (video) {
          this.videopath = `https://www.youtube.com/embed/${video.key}`;
        } else {
          this.videopath = `https://www.youtube.com/embed/`;
        }
})}

paginate(event:any){
  this.Loading = true;
  this.service.getRecommended(this.type, this.id, event).subscribe((res: any) =>{
    this.recommended = res.results;
    this.total = res.total_results
    this.Loading = false;
})}


getMovieCredit(id: number) {
  this.Loading = true;
  this.service.getMovieCredit(id).subscribe((res:any) => {
    this.recommended = res.cast;
    console.log(res);
    this.Loading = false;
  })
}


 customOptions: OwlOptions = {
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-angles-left text-dark"></i>', '<i class="fa-solid fa-angles-right text-dark"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
  }
}
