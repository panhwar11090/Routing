import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { ServicesComponent } from './services/services.component';
import { PopularComponent } from './popular/popular.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BannerComponent,ContactUsComponent,TestimonyComponent,ServicesComponent, PopularComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  activateRoute : ActivatedRoute = inject(ActivatedRoute)

  // using a fragmet logic to jump on different sections
  ngOnInit(): void {

    this.activateRoute.fragment.subscribe((data)=>{
        return this.JumpToSection(data);
    })
  }

  JumpToSection(section:any){ 
    if (typeof document !== 'undefined') {
      // Your code that interacts with the document object
      const element = document.getElementById('section-id');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Handle the case where `document` is not available
      console.warn('document is not defined');
    }
  }

}
