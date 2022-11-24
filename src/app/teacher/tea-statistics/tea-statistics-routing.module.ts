import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeaStatisticsPage } from './tea-statistics.page';

const routes: Routes = [
  {
    path: '',
    component: TeaStatisticsPage,
    children: [
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
        path: 'tea-statistics-forstudent-detail',
        // eslint-disable-next-line max-len
        loadChildren: () => import('./tea-statistics-forstudent-detail/tea-statistics-forstudent-detail.module').then( m => m.TeaStatisticsForstudentDetailPageModule)
      },
      {
        path: 'tea-statistics-forstudent-libro',
        // eslint-disable-next-line max-len
        loadChildren: () => import('./tea-statistics-forstudent-libro/tea-statistics-forstudent-libro.module').then( m => m.TeaStatisticsForstudentLibroPageModule)
      },
      {
        path: 'tea-statistics-forstudent-cuestionario',
        // eslint-disable-next-line max-len
        loadChildren: () => import('./tea-statistics-forstudent-cuestionario/tea-statistics-forstudent-cuestionario.module').then( m => m.TeaStatisticsForstudentCuestionarioPageModule)
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
