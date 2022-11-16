import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StuContentListPage } from './stu-content-list.page';

const routes: Routes = [
  {
    path: '',
    component: StuContentListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StuContentListPageRoutingModule {}
