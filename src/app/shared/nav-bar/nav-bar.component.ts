import { Component, OnInit } from '@angular/core';
import { SharedService } from "../services/shared.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  text!: any;
  results: any = [];
  constructor(private service: SharedService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  // navigate() {
  //   this.route.snapshot
  // }


  search(event: any){
    console.log(event);
    this.service.search(event.query).subscribe((res: any) => {
      this.results = res.results;
      console.log(res.results);
    })
  }

console(event:any) {
  console.log(event);
}

}
