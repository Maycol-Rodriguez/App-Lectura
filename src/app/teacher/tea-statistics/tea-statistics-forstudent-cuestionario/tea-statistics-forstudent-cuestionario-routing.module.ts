import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeaStatisticsForstudentCuestionarioPage } from './tea-statistics-forstudent-cuestionario.page';

const routes: Routes = [
  {
    path: '',
    component: TeaStatisticsForstudentCuestionarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeaStatisticsForstudentCuestionarioPageRoutingModule {}
