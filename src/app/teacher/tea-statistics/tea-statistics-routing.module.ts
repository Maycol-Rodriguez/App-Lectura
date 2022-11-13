import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeaStatisticsPage } from './tea-statistics.page';

const routes: Routes = [
  {
    path: '',
    component: TeaStatisticsPage,
    children: [
      {
        path: 'tea-statistics-global',
        loadChildren: () => import('./tea-statistics-global/tea-statistics-global.module').then( m => m.TeaStatisticsGlobalPageModule)
      },
      {
        path: 'tea-statistics-bygrade',
        loadChildren: () => import('./tea-statistics-bygrade/tea-statistics-bygrade.module').then( m => m.TeaStatisticsBygradePageModule)
      },
      {
        path: 'tea-statistics-forstudent',
        // eslint-disable-next-line max-len
        loadChildren: () => import('./tea-statistics-forstudent/tea-statistics-forstudent.module').then( m => m.TeaStatisticsForstudentPageModule)
      },
      {
        path: 'tea-statistics-home',
        loadChildren: () => import('./tea-statistics-home/tea-statistics-home.module').then( m => m.TeaStatisticsHomePageModule)
      },
      {
        path: '',
        redirectTo: 'tea-statistics-home',
        pathMatch: 'prefix'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeaStatisticsPageRoutingModule {}
