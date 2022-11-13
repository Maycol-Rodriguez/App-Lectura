import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FamProfilePage } from './fam-profile.page';

const routes: Routes = [
  {
    path: '',
    component: FamProfilePage,
    children: [
      {
        path: 'fam-profile-view',
        loadChildren: () => import('./fam-profile-view/fam-profile-view.module').then( m => m.FamProfileViewPageModule)
      },
      {
        path: 'fam-profile-edit',
        loadChildren: () => import('./fam-profile-edit/fam-profile-edit.module').then( m => m.FamProfileEditPageModule)
      },
      {
        path: 'fam-profile-sons',
        loadChildren: () => import('./fam-profile-sons/fam-profile-sons.module').then( m => m.FamProfileSonsPageModule)
      },
      {
        path: '',
        redirectTo: 'fam-profile-view',
        pathMatch: 'prefix'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FamProfilePageRoutingModule {}
