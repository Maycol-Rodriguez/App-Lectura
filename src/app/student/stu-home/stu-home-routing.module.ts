import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StuHomePage } from './stu-home.page';

const routes: Routes = [
  {
    path: '',
    component: StuHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StuHomePageRoutingModule {}
