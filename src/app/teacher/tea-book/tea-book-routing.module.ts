import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeaBookPage } from './tea-book.page';

const routes: Routes = [
  {
    path: '',
    component: TeaBookPage,
    children: [
      {
        path: 'tea-book-list',
        loadChildren: () => import('./tea-book-list/tea-book-list.module').then( m => m.TeaBookListPageModule)
      },
      {
        path: 'tea-book-create',
        loadChildren: () => import('./tea-book-create/tea-book-create.module').then( m => m.TeaBookCreatePageModule)
      },
      {
        path: 'tea-book-update',
        loadChildren: () => import('./tea-book-update/tea-book-update.module').then( m => m.TeaBookUpdatePageModule)
      },
      {
        path: '',
        redirectTo: 'tea-book-list',
        pathMatch: 'prefix'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeaBookPageRoutingModule {}
