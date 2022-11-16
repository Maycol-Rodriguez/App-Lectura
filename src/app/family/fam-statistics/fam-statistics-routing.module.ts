import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FamStatisticsPage } from './fam-statistics.page';

const routes: Routes = [
  {
    path: '',
    component: FamStatisticsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FamStatisticsPageRoutingModule {}
