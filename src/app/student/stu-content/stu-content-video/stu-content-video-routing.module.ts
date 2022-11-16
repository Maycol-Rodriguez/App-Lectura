import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StuContentVideoPage } from './stu-content-video.page';

const routes: Routes = [
  {
    path: '',
    component: StuContentVideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StuContentVideoPageRoutingModule {}
