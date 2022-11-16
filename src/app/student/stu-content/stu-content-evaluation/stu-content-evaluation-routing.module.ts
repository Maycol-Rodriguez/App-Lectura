import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StuContentEvaluationPage } from './stu-content-evaluation.page';

const routes: Routes = [
  {
    path: '',
    component: StuContentEvaluationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StuContentEvaluationPageRoutingModule {}
