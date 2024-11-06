import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

  router: Router = inject(Router);

  OnSearchClicked(value: string){
    this.router.navigate(['/courses'], {queryParams: {search: value}})
  }

}
