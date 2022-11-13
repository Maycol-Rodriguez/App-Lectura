import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FamHomePage } from './fam-home.page';

const routes: Routes = [
  {
    path: '',
    component: FamHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FamHomePageRoutingModule {}
