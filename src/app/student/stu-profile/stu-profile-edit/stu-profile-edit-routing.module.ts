import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StuProfileEditPage } from './stu-profile-edit.page';

const routes: Routes = [
  {
    path: '',
    component: StuProfileEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StuProfileEditPageRoutingModule {}
