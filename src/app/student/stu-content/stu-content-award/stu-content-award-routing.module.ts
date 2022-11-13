import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StuContentAwardPage } from './stu-content-award.page';

const routes: Routes = [
  {
    path: '',
    component: StuContentAwardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StuContentAwardPageRoutingModule {}
