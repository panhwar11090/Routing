import { inject } from "@angular/core"
import { AutService } from "./Services/auth.service"
import { Router } from "@angular/router"
import { CourseService } from "./Services/course.service";

export const CanActivate = () =>{
    const router = inject(Router);
    const authService = inject(AutService);
    if(authService.IsAuthenticated()){
        return true;

    }else{
        router.navigate(['login'])
        return false;
    }
}

export const CanActivateChild = () =>{
    CanActivate();
}

export const resolve = () =>{
    const courseService = inject(CourseService);
    return courseService.getAllCourses();
}