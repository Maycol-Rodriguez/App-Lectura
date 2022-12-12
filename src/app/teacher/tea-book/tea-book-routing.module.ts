import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeaBookCuestionarioPage } from './tea-book-cuestionario/tea-book-cuestionario.page';
import { TeaBookUpdatePage } from './tea-book-update/tea-book-update.page';

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
        path: 'tea-book-update/:libro',
        component: TeaBookUpdatePage
        // loadChildren: () => import('./tea-book-update/tea-book-update.module').then( m => m.TeaBookUpdatePageModule)
      },
      {
        path: 'tea-book-cuestionario/:libro',
        component: TeaBookCuestionarioPage
        // loadChildren: () => import('./tea-book-cuestionario/tea-book-cuestionario.module').then( m => m.TeaBookCuestionarioPageModule)
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
