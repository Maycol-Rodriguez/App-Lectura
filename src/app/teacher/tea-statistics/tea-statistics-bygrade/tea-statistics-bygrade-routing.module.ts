import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeaStatisticsBygradePage } from './tea-statistics-bygrade.page';

const routes: Routes = [
  {
    path: '',
    component: TeaStatisticsBygradePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeaStatisticsBygradePageRoutingModule {}
