import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeaStatisticsForstudentDetailPage } from './tea-statistics-forstudent-detail.page';

const routes: Routes = [
  {
    path: '',
    component: TeaStatisticsForstudentDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeaStatisticsForstudentDetailPageRoutingModule {}
