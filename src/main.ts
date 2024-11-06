import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { ContactComponent } from './app/contact/contact.component';
import { CoursesComponent } from './app/courses/courses.component';
import { AboutComponent } from './app/about/about.component';
import { LoginComponent } from './app/login/login.component';


// const routes : Routes = [
//   {path:'', component:HomeComponent},
//   {path:'Home', component:HomeComponent},
//   {path:'About', component:AboutComponent},
//   {path:'Contact', component:ContactComponent},
//   {path:'Courses', component:CoursesComponent},
//   {path:'Login', component:LoginComponent},
// ]


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
