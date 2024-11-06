import { Component, inject, OnInit } from '@angular/core';
import { NavigationEnd, NavigationError, NavigationStart, Router, RouterModule, RouterOutlet, Routes, Event, NavigationCancel } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CoursesComponent } from './courses/courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';

// const routes : Routes = [
//   {path:'', component:HomeComponent},
//   {path:'Home', component:HomeComponent},
//   {path:'About', component:AboutComponent},
//   {path:'Contact', component:ContactComponent},
//   {path:'Courses', component:CoursesComponent},
//   {path:'Login', component:LoginComponent},
// ]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // RouterModule.forRoot(routes),
    // BrowserModule,
    CommonModule,
    FormsModule,
    RouterOutlet,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    // CoursesComponent,
    CoursesComponent,
    ContactComponent,
    LoginComponent,
    AboutComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'rouing-practice';

  showLoader : boolean = false;

  router: Router = inject(Router)

  ngOnInit(): void {
    this.router.events.subscribe((routerEvent: Event)=>{
      if(routerEvent instanceof NavigationStart){
        this.showLoader = true
      }
      if(routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationError){
        this.showLoader=false
      }
    })
  }
}
