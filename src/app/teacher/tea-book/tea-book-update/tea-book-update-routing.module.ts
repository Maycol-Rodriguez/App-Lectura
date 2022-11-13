import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeaBookUpdatePage } from './tea-book-update.page';

const routes: Routes = [
  {
    path: '',
    component: TeaBookUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeaBookUpdatePageRoutingModule {}
