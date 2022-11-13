import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentPage } from './student.page';

const routes: Routes = [
  {
    path: '',
    component: StudentPage,
    children: [
      {
        path: 'stu-home',
        loadChildren: () => import('./stu-home/stu-home.module').then( m => m.StuHomePageModule)
      },
      {
        path: 'stu-profile',
        loadChildren: () => import('./stu-profile/stu-profile.module').then( m => m.StuProfilePageModule)
      },
      {
        path: 'stu-content',
        loadChildren: () => import('./stu-content/stu-content.module').then( m => m.StuContentPageModule)
      },
      {
        path: 'stu-book',
        loadChildren: () => import('./stu-book/stu-book.module').then( m => m.StuBookPageModule)
      },
      {
        path: '',
        redirectTo: 'stu-home',
        pathMatch: 'prefix'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentPageRoutingModule {}
