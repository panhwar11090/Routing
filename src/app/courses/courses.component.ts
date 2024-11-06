import { Component, inject, NgModule, OnInit } from '@angular/core';
import { Course } from '../Models/course';
import { CourseService } from '../Services/course.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModel } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports:[CommonModule, RouterModule],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  //  AllCourses: any;
  coursesService = inject(CourseService);
  AllCourses: Course[] | undefined;
  searchString : string | null | undefined;

  activateRoute : ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    // this.searchString = this.activateRoute.snapshot.queryParamMap.get('search');
    // console.log(this.searchString)
    this.activateRoute.queryParamMap.subscribe((data)=>{
      this.searchString = data.get('search')
      if(this.searchString === undefined || this.searchString=== null || this.searchString === ''){
        this.AllCourses = this.activateRoute.snapshot.data['courses'];
      }else{
        this.AllCourses = this.coursesService.courses
        .filter(x => x.title?.toLowerCase()
        .includes((this.searchString?? '').toLowerCase()));
        
      }
    })
   
  }


}
