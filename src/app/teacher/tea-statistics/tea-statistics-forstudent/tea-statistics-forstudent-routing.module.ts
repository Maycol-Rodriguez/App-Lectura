import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeaStatisticsForstudentPage } from './tea-statistics-forstudent.page';

const routes: Routes = [
  {
    path: '',
    component: TeaStatisticsForstudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeaStatisticsForstudentPageRoutingModule {}
