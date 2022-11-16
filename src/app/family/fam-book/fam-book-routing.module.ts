import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FamBookPage } from './fam-book.page';

const routes: Routes = [
  {
    path: '',
    component: FamBookPage,
    children: [
      {
        path: 'fam-book-list',
        loadChildren: () => import('./fam-book-list/fam-book-list.module').then( m => m.FamBookListPageModule)
      },
      {
        path: 'fam-book-create',
        loadChildren: () => import('./fam-book-create/fam-book-create.module').then( m => m.FamBookCreatePageModule)
      },
      {
        path: 'fam-book-update',
        loadChildren: () => import('./fam-book-update/fam-book-update.module').then( m => m.FamBookUpdatePageModule)
      },
      {
        path: '',
        redirectTo: 'fam-book-list',
        pathMatch: 'prefix'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FamBookPageRoutingModule {}
