import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FamProfileSonsPage } from './fam-profile-sons.page';

const routes: Routes = [
  {
    path: '',
    component: FamProfileSonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FamProfileSonsPageRoutingModule {}
