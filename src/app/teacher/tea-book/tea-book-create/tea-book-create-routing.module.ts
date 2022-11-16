import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeaBookCreatePage } from './tea-book-create.page';

const routes: Routes = [
  {
    path: '',
    component: TeaBookCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeaBookCreatePageRoutingModule {}
