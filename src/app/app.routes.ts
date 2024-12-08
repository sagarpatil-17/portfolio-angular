import { Routes } from '@angular/router';
import { ContentLayoutComponent } from './components/content-layout/content-layout.component';
import { AllProjectsComponent } from './components/all-projects/all-projects.component';

export const routes: Routes = [
    { path: '', component: ContentLayoutComponent },
    { path: 'all-projects', component: AllProjectsComponent },
];
