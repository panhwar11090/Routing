import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ServicesService } from '../../Services/services.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  servicesService = inject(ServicesService);
    services: {title: string, image: string, description: string}[] = [];

    ngOnInit(){
        this.services = this.servicesService.services;
  }

}
