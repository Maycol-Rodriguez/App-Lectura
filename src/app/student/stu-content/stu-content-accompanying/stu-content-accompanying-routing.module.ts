import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StuContentAccompanyingPage } from './stu-content-accompanying.page';

const routes: Routes = [
  {
    path: '',
    component: StuContentAccompanyingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StuContentAccompanyingPageRoutingModule {}
