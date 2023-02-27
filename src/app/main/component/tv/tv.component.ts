import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {

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
      this.service.getPopular('tv', page).subscribe((res : any) => {
        this.mediaType = res.results;
        this.total = 10000;
        this.Loading = false;
    }, (error:any) => {
      console.log(error.message)
    }
    )
  }


}
