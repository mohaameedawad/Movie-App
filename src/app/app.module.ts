import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { SharedModule } from './shared/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {NgxPaginationModule} from 'ngx-pagination';
import { AuthModule } from './auth/auth.module';
import {AutoCompleteModule} from 'primeng/autocomplete';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MainModule,
    CarouselModule,
    NgxPaginationModule,
    AuthModule,
    AutoCompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
