import { inject, Injectable } from "@angular/core";
import { UserService } from "./user.service";
import { Observable } from "rxjs";


export interface IDeactiveComponent{
    canExit: () => boolean | Observable<boolean> | Promise<boolean>;
}


@Injectable({
    providedIn:'root'
})

export class AutService{
    isLogged : Boolean= false
    userService : UserService= inject(UserService);

    

    login(username: string, password: string){
        let user = this.userService.users.find((u)=>u.username === username && u.password === password);

        if(user === undefined){
            this.isLogged= false
        }else{
            this.isLogged= true
        }
        console.log('User found:', user, 'IsLogged:', this.isLogged); // <-- Debugging log
        return user;
        
    }

    logOut(){
        this.isLogged= false;
    }

    IsAuthenticated(){
        return this.isLogged;
    }
}