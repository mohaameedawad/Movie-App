import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { homeMidSectionsComponent } from './component/homeMidSections/homeMidSections.component';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { DetailsComponent } from './component/details/details.component';
import {PaginatorModule} from 'primeng/paginator';
import { MovieComponent } from './component/movie/movie.component';
import { PeopleComponent } from './component/people/people.component';
import { TvComponent } from './component/tv/tv.component';





@NgModule({
  declarations: [
    HomeComponent,
    homeMidSectionsComponent,
    DetailsComponent,
    MovieComponent,
    PeopleComponent,
    TvComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CarouselModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    NgxPaginationModule,
    PaginatorModule

  ],
  exports: [
    HomeComponent,
    homeMidSectionsComponent,
    DetailsComponent,
      MovieComponent,
    PeopleComponent,
    TvComponent,
  ]

})
export class MainModule { }
