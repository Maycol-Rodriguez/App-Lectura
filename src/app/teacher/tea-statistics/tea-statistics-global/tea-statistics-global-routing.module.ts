import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeaStatisticsGlobalPage } from './tea-statistics-global.page';

const routes: Routes = [
  {
    path: '',
    component: TeaStatisticsGlobalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeaStatisticsGlobalPageRoutingModule {}
