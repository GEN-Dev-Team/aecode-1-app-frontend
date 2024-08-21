import { Routes } from '@angular/router';
import { MainViewComponent } from './pages/main-view/main-view.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { CourseViewComponent } from './pages/course-view/course-view.component';

export const routes: Routes = [
  {
    path: '',
    component: MainViewComponent,
    title: 'AECODE',
  },
  {
    path: 'aecode-programas',
    component: LandingPageComponent,
    title: 'AECODE - Programas',
  },
  {
    path: '',
    component: CourseViewComponent,
    title: 'Course View',
  },
];
