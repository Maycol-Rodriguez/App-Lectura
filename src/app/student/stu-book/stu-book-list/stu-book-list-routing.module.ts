import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StuBookListPage } from './stu-book-list.page';

const routes: Routes = [
  {
    path: '',
    component: StuBookListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StuBookListPageRoutingModule {}
