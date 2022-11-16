import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StuProfileViewPage } from './stu-profile-view.page';

const routes: Routes = [
  {
    path: '',
    component: StuProfileViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StuProfileViewPageRoutingModule {}
