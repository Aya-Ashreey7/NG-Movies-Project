import { Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { HomeComponent } from './components/home/home.component';
import { SeriesComponent } from './components/series/series.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {path:"", component: HomeComponent , title:"Home Page"},
    {path:"home", redirectTo:"" , pathMatch:"full"},
    {path:"movie", component: MoviesComponent , title:"Movies Page"},
    {path:"series", component: SeriesComponent , title:"Series Page"},
    {path:"signin", component: SignInComponent , title:"signin Page"},
    {path:"signup", component: SignUpComponent , title:"Signup Page"},

    {path:"**", component: NotFoundComponent, title: '404 Page'}

];
