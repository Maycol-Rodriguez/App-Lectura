import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FamProfileEditPage } from './fam-profile-edit.page';

const routes: Routes = [
  {
    path: '',
    component: FamProfileEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FamProfileEditPageRoutingModule {}
