import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { SafePipe } from './safe-pipe/safe.pipe';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [
    NavBarComponent,
    SafePipe,
    FooterComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    AutoCompleteModule
  ],
  exports: [
    NavBarComponent,
    SafePipe,
    FooterComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }
