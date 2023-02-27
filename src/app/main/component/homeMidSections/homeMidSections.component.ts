import { Component, Input, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-homeMidSections',
  templateUrl: './homeMidSections.component.html',
  styleUrls: ['./homeMidSections.component.scss']
})
export class homeMidSectionsComponent implements OnInit {
  @Input() trending!: string;
  @Input() homeHeader!: boolean;
  Loading = true;
  type!: string;
  title!: string;
  movies: any = [];

  constructor( private service: MainService) { }

  ngOnInit(): void {
    this.getTrendingMovies(this.trending);
  }


 getTrendingMovies (mediaType: string) {
  this.Loading = true;
  this.service.getTrendingMovies(mediaType).subscribe( (res: any) =>{
    if (this.trending == 'tv') {
      this.type = 'Tv';
      this.title = 'name';
    }else if (this.trending == 'movie') {
      this.type = 'Movies'
      this.title = 'title';
    } else {
      this.type = 'People'
      this.title = 'name';
    }
    this.movies = res.results;
    this.Loading = false;
  });
 }
}
