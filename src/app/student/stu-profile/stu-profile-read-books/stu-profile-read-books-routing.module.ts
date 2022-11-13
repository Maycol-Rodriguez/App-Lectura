import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StuProfileReadBooksPage } from './stu-profile-read-books.page';

const routes: Routes = [
  {
    path: '',
    component: StuProfileReadBooksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StuProfileReadBooksPageRoutingModule {}
