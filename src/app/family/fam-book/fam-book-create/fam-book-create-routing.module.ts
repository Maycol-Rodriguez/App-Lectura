import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FamBookCreatePage } from './fam-book-create.page';

const routes: Routes = [
  {
    path: '',
    component: FamBookCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FamBookCreatePageRoutingModule {}
