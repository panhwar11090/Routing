import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { PopularComponent } from './home/popular/popular.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AuthGuardService } from './Services/authguard.service';
import { CanActivate, CanActivateChild, resolve } from './auth.guard';


export const routes : Routes = [
    {path:'', component:HomeComponent},
    {path:'home', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'contact', component:ContactComponent, canDeactivate:[(comp: ContactComponent)=>{return comp.canExit();}]},
    {path:'courses', component:CoursesComponent, resolve:{courses:resolve}},
    // {path:'courses/:search', component:CoursesComponent},
    // {path:'courses/course/:id', component: CourseDetailComponent},
    {path:'courses',canActivateChild:[CanActivateChild] ,children:[
        {path:'course/:id', component:CourseDetailComponent},
        {path:'popular', component:PopularComponent},
        // in older version of angular auth guards working like this 
        // {path:'checkout', component:CheckoutComponent, canActivate: [AuthGuardService]},
        {path:'checkout', component:CheckoutComponent, }
    ]},
    {path:'login', component:LoginComponent},
    // {path:'Login', component:LoginComponent},


    //wild card routes and we have to define in the end
    {path:'**', component:NotFoundComponent}
]
  