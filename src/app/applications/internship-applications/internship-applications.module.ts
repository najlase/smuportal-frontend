import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentApplicationsComponent } from './student-applications/student-applications.component';
import { CcApplicationsComponent } from './cc-applications/cc-applications.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: 'student/internship-applications',
    component: StudentApplicationsComponent,
    data: {
      breadcrumb: 'Internship Application'
    }
  },
  {
    path: 'cc/internship-applications',
    component: CcApplicationsComponent,
    data: {
      breadcrumb: 'Internship Application'
    },
  }
];

@NgModule({
  declarations: [StudentApplicationsComponent, CcApplicationsComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class InternshipApplicationsModule { }
