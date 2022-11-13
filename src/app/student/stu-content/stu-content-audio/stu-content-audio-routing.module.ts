import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StuContentAudioPage } from './stu-content-audio.page';

const routes: Routes = [
  {
    path: '',
    component: StuContentAudioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StuContentAudioPageRoutingModule {}
