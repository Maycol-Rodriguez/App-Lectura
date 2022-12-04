import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherPage } from './teacher.page';

const routes: Routes = [
  {
    path: '',
    component: TeacherPage,
    children: [
      {
        path: 'tea-home',
        loadChildren: () => import('./tea-home/tea-home.module').then( m => m.TeaHomePageModule)
      },
      {
        path: 'tea-book',
        loadChildren: () => import('./tea-book/tea-book.module').then( m => m.TeaBookPageModule)
      },
      {
        path: 'tea-statistics',
        loadChildren: () => import('./tea-statistics/tea-statistics.module').then( m => m.TeaStatisticsPageModule)
      },
      {
        path: '',
        redirectTo: 'tea-home',
        pathMatch: 'prefix'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherPageRoutingModule {}
