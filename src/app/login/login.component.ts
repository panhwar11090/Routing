import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, OnInit, ViewChild, viewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AutService } from '../Services/auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  @ViewChild('username') username : ElementRef | undefined;
  @ViewChild('password') password : ElementRef | undefined;

  authService : AutService = inject(AutService);

  router : Router = inject(Router);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.activeRoute.queryParamMap.subscribe((queries)=>{
      const logout = Boolean(queries.get('logout'));
      if(logout){
        this.authService.logOut();
        alert('You are now logged out. IsLogged =' + this.authService.isLogged)
      }
    })
  }

  OnLogin(){
    const username = this.username?.nativeElement.value;
    const password = this.password?.nativeElement.value;
    const user = this.authService.login(username,password);
    if(user === undefined){
      console.log(user)
      alert('the login credenetials are not correct')
    }else{
      alert('Logged In succesFully')
      this.router.navigate(['/courses'])
    }
  }

  



}
