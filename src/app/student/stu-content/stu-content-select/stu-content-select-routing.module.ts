import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StuContentSelectPage } from './stu-content-select.page';

const routes: Routes = [
  {
    path: '',
    component: StuContentSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StuContentSelectPageRoutingModule {}
