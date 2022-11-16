import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StuProfilePage } from './stu-profile.page';

const routes: Routes = [
  {
    path: '',
    component: StuProfilePage,
    children: [
      {
        path: 'stu-profile-view',
        loadChildren: () => import('./stu-profile-view/stu-profile-view.module').then( m => m.StuProfileViewPageModule)
      },
      {
        path: 'stu-profile-edit',
        loadChildren: () => import('./stu-profile-edit/stu-profile-edit.module').then( m => m.StuProfileEditPageModule)
      },
      {
        path: 'stu-profile-read-books',
        loadChildren: () => import('./stu-profile-read-books/stu-profile-read-books.module').then( m => m.StuProfileReadBooksPageModule)
      },
      {
        path: 'stu-profile-awards',
        loadChildren: () => import('./stu-profile-awards/stu-profile-awards.module').then( m => m.StuProfileAwardsPageModule)
      },
      {
        path: '',
        redirectTo: 'stu-profile-view',
        pathMatch: 'prefix'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StuProfilePageRoutingModule {}
