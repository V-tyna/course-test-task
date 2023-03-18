import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { NgxStarsModule } from 'ngx-stars';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseComponent } from './components/lesson/course.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CourseCardComponent } from './components/courses/course-card/course-card.component';
import { LessonDetailsCardComponent } from './components/lesson/lesson-details-card/lesson-details-card.component';
import { LessonsListComponent } from './components/lesson/lessons-list/lessons-list.component';
import { VideoContainerComponent } from './components/lesson/video-container/video-container.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoursesComponent,
    CourseComponent,
    PageNotFoundComponent,
    CourseCardComponent,
    LessonDetailsCardComponent,
    LessonsListComponent,
    VideoContainerComponent,
    ErrorPageComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    NgxStarsModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
