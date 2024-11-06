import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { AutService } from "./auth.service";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
    
    authService : AutService= inject(AutService);
    router: Router = inject(Router);
    
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if(this.authService.IsAuthenticated()){
            return true;
        }else{
            console.log('hello')
            this.router.navigate(['login'])
            return false;
        }
    }

    
    
}