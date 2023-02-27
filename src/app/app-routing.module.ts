import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/component/login/login.component';
import { RegisterComponent } from './auth/component/register/register.component';
import { DetailsComponent } from './main/component/details/details.component';
import { HomeComponent } from './main/component/home/home.component';
import { MovieComponent } from './main/component/movie/movie.component';
import { PeopleComponent } from './main/component/people/people.component';
import { TvComponent } from './main/component/tv/tv.component';
import { AuthGuard } from "./auth/guards/auth.guard";

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:'full'},
  {path:"home", component: HomeComponent},
  {path:"mediatype/movie", component: MovieComponent},
  {path:"mediatype/tv", component: TvComponent},
  {path:"mediatype/person", component: PeopleComponent},
  {path:"mediatype/:movies/:id" ,component: DetailsComponent,canActivate:[AuthGuard]},
  {path:"Login", component: LoginComponent},
  {path:"Regiser", component: RegisterComponent}
  // {path:"about",canActivate:[AuthGuard],component:AboutComponent},
  // {path:"networks",canActivate:[AuthGuard],component:NetworksComponent},
  // {path:"details/:id/:media_type",canActivate:[AuthGuard],component:DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
