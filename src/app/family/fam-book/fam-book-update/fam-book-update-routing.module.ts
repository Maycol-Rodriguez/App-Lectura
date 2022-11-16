import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FamBookUpdatePage } from './fam-book-update.page';

const routes: Routes = [
  {
    path: '',
    component: FamBookUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FamBookUpdatePageRoutingModule {}
