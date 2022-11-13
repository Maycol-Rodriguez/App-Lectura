import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StuProfileAwardsPage } from './stu-profile-awards.page';

const routes: Routes = [
  {
    path: '',
    component: StuProfileAwardsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StuProfileAwardsPageRoutingModule {}
