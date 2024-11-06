import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CourseService } from '../../Services/course.service';
import { Course } from '../../Models/course';
import { Router } from '@angular/router';
import { relative } from 'path';

@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [ CommonModule, RouterModule],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.css'
})
export class PopularComponent implements OnInit {
  courseService= inject(CourseService);
  popularCourses : Course[] = [];
  router = inject(Router); // inject the Router here
  activeRoute : ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.popularCourses = this.courseService?.courses?.filter(c => c.rating !== undefined && c.rating >= 4.5);
  }
  

  navigateToCourses() {
    //  this.router.navigate(['courses'],{relativeTo: this.activeRoute})
    this.router.navigateByUrl('courses');
  }
}
