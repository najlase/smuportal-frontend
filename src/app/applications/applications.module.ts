import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import {InternshipsModule} from "@app/applications/internships/internships.module";
import {InternshipApplicationsModule} from "@app/applications/internship-applications/internship-applications.module";

const routes: Routes = [
  {
    path: "apps",
    loadChildren: () =>
      import("./logistics-reservation/logistics-reservation.module").then(
        m => m.LogisticsReservationModule
      )
  }
];
@NgModule({
  declarations: [],
  imports: [CommonModule,
    RouterModule.forChild(routes),
    InternshipsModule,
    InternshipApplicationsModule],
  exports: [RouterModule]
})
export class ApplicationsModule {}
