import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeaHomePage } from './tea-home.page';

const routes: Routes = [
  {
    path: '',
    component: TeaHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeaHomePageRoutingModule {}
