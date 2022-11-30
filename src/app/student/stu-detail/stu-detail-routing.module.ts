import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StuDetailPage } from './stu-detail.page';

const routes: Routes = [
  {
    path: '',
    component: StuDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StuDetailPageRoutingModule {}
