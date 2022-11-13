import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StuBookUpdatePage } from './stu-book-update.page';

const routes: Routes = [
  {
    path: '',
    component: StuBookUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StuBookUpdatePageRoutingModule {}
