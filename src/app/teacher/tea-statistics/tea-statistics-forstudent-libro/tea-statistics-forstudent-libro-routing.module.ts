import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeaStatisticsForstudentLibroPage } from './tea-statistics-forstudent-libro.page';

const routes: Routes = [
  {
    path: '',
    component: TeaStatisticsForstudentLibroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeaStatisticsForstudentLibroPageRoutingModule {}
