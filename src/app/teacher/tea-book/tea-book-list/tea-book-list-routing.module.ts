import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeaBookListPage } from './tea-book-list.page';

const routes: Routes = [
  {
    path: '',
    component: TeaBookListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeaBookListPageRoutingModule {}
