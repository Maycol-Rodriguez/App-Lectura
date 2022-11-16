import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FamBookListPage } from './fam-book-list.page';

const routes: Routes = [
  {
    path: '',
    component: FamBookListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FamBookListPageRoutingModule {}
