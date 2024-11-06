import { CommonModule } from '@angular/common';
import { Component, inject, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { Course } from '../../Models/course';
import { CourseService } from '../../Services/course.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports:[CommonModule,RouterModule],
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit, OnDestroy{
  
  selectedCourse : Course | undefined;
  courseId: number | undefined;

  courseService : CourseService = inject(CourseService);
  activeRoute : ActivatedRoute = inject(ActivatedRoute);
  private paramMapSubscription: Subscription | undefined;
  

  ngOnInit(): void {
    
    this.paramMapSubscription= this.activeRoute.paramMap.subscribe((data)=>{
      this.courseId = +(data.get('id')??0);
      this.selectedCourse = this.courseService.courses.find(course => course.id === this.courseId);
      this.loadCourse();
      console.log(this.courseId)
      console.log(this.courseService.courses)
      console.log(this.selectedCourse?.id);
    })
  }

  ngOnDestroy(): void {
    if (this.paramMapSubscription) {
      this.paramMapSubscription.unsubscribe();
    }
  }

  loadCourse() {
    this.selectedCourse = this.courseService.courses.find(course => course.id === this.courseId);
  }

  // Method to get previous course ID with bounds check
  getPreviousCourseId(): number | null {
    const previousId = (this.selectedCourse?.id ?? 1) - 1;
    return previousId >= 1 ? previousId : null;
  }

  // Method to get next course ID with bounds check
  getNextCourseId(): number | null {
    if(this.selectedCourse?.id == 8 ){
      return this.selectedCourse.id;
    }else{
      const nextId = (this.selectedCourse?.id ?? 1) + 1;
      // const maxId = Math.max(...this.courseService?.courses?.map(course => course.id ?? 0));
      // return nextId <= maxId ? nextId : null;
      return nextId;
    }
    
  }
  
  
  

}
