import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  Loading = true;
  p!:number;
  total!:any;
  mediaType:any = [];
  type!: any ;

  constructor(private service: MainService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.paginate();
  }

  paginate(page?: any){
      this.Loading = true;
      this.p = (page + 1);
      console.log(page)
      this.service.getPopular('movie', page).subscribe((res : any) => {
        this.mediaType = res.results;
        this.total = 10000;
        this.Loading = false;
    }, (error:any) => {
      console.log(error.message)
    }
    )
  }

}
