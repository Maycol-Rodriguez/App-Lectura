import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FamilyPage } from './family.page';

const routes: Routes = [
  {
    path: '',
    component: FamilyPage,
    children: [
      {
        path: 'fam-home',
        loadChildren: () => import('./fam-home/fam-home.module').then( m => m.FamHomePageModule)
      },
      {
        path: 'fam-statistics',
        loadChildren: () => import('./fam-statistics/fam-statistics.module').then( m => m.FamStatisticsPageModule)
      },
      {
        path: 'fam-book',
        loadChildren: () => import('./fam-book/fam-book.module').then( m => m.FamBookPageModule)
      },
      {
        path: 'fam-profile',
        loadChildren: () => import('./fam-profile/fam-profile.module').then( m => m.FamProfilePageModule)
      },
      {
        path: '',
        redirectTo: 'fam-home',
        pathMatch: 'prefix'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FamilyPageRoutingModule {}
