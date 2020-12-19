import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentInternshipsComponent } from './student-internships/student-internships.component';
import { CcInternshipsComponent } from './cc-internships/cc-internships.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "@app/shared/shared.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


const routes: Routes = [
  {
    path: 'student/internships',
    component: StudentInternshipsComponent,
    data: {
      breadcrumb: 'Internship Application'
    }
  },
  {
    path: 'cc/internships',
    component: CcInternshipsComponent,
    data: {
      breadcrumb: 'Internship Application'
    },
  }
];


@NgModule({
  declarations: [StudentInternshipsComponent, CcInternshipsComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
    FontAwesomeModule
  ]
})
export class InternshipsModule { }
