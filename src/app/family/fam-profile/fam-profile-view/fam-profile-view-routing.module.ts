import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FamProfileViewPage } from './fam-profile-view.page';

const routes: Routes = [
  {
    path: '',
    component: FamProfileViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FamProfileViewPageRoutingModule {}
