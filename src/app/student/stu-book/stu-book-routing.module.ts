import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StuBookUpdatePage } from './stu-book-update/stu-book-update.page';

import { StuBookPage } from './stu-book.page';

const routes: Routes = [
  {
    path: '',
    component: StuBookPage,
    children: [
      {
        path: 'stu-book-list',
        loadChildren: () => import('./stu-book-list/stu-book-list.module').then( m => m.StuBookListPageModule)
      },
      {
        path: 'stu-book-create',
        loadChildren: () => import('./stu-book-create/stu-book-create.module').then( m => m.StuBookCreatePageModule)
      },
      {
        path: 'stu-book-update/:libro',
        component: StuBookUpdatePage
        // loadChildren: () => import('./stu-book-update/stu-book-update.module').then( m => m.StuBookUpdatePageModule)
      },
      {
        path: '',
        redirectTo: 'stu-book-list',
        pathMatch: 'prefix'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StuBookPageRoutingModule {}
