import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeaStatisticsHomePage } from './tea-statistics-home.page';

const routes: Routes = [
  {
    path: '',
    component: TeaStatisticsHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeaStatisticsHomePageRoutingModule {}
