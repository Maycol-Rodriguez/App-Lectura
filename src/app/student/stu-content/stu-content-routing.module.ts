import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StuContentPage } from './stu-content.page';

const routes: Routes = [
  {
    path: '',
    component: StuContentPage,
    children: [
      {
        path: 'stu-content-list',
        loadChildren: () => import('./stu-content-list/stu-content-list.module').then( m => m.StuContentListPageModule)
      },
      {
        path: 'stu-content-select',
        loadChildren: () => import('./stu-content-select/stu-content-select.module').then( m => m.StuContentSelectPageModule)
      },
      {
        path: 'stu-content-reading',
        loadChildren: () => import('./stu-content-reading/stu-content-reading.module').then( m => m.StuContentReadingPageModule)
      },
      {
        path: 'stu-content-video',
        loadChildren: () => import('./stu-content-video/stu-content-video.module').then( m => m.StuContentVideoPageModule)
      },
      {
        path: 'stu-content-audio',
        loadChildren: () => import('./stu-content-audio/stu-content-audio.module').then( m => m.StuContentAudioPageModule)
      },
      {
        path: 'stu-content-evaluation',
        loadChildren: () => import('./stu-content-evaluation/stu-content-evaluation.module').then( m => m.StuContentEvaluationPageModule)
      },
      {
        path: 'stu-content-accompanying',
        // eslint-disable-next-line max-len
        loadChildren: () => import('./stu-content-accompanying/stu-content-accompanying.module').then( m => m.StuContentAccompanyingPageModule)
      },
      {
        path: 'stu-content-award',
        loadChildren: () => import('./stu-content-award/stu-content-award.module').then( m => m.StuContentAwardPageModule)
      },
      {
        path: '',
        redirectTo: 'stu-content-list',
        pathMatch: 'prefix'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StuContentPageRoutingModule {}
