import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// eslint-disable-next-line max-len
import { TeaStatisticsForstudentCuestionarioPage } from './tea-statistics-forstudent-cuestionario/tea-statistics-forstudent-cuestionario.page';
import { TeaStatisticsForstudentLibroPage } from './tea-statistics-forstudent-libro/tea-statistics-forstudent-libro.page';
import { TeaStatisticsForstudentPage } from './tea-statistics-forstudent/tea-statistics-forstudent.page';
import { TeaStatisticsPage } from './tea-statistics.page';

const routes: Routes = [
  {
    path: '',
    component: TeaStatisticsPage,
    children: [
      {
        path: 'tea-statistics-forstudent/:inicio/:fin/:estudiante',
        component: TeaStatisticsForstudentPage
        // eslint-disable-next-line max-len
        // loadChildren: () => import('./tea-statistics-forstudent/tea-statistics-forstudent.module').then( m => m.TeaStatisticsForstudentPageModule)
      },
      {
        path: 'tea-statistics-home',
        loadChildren: () => import('./tea-statistics-home/tea-statistics-home.module').then( m => m.TeaStatisticsHomePageModule)
      },
      {
        path: 'tea-statistics-forstudent-libro/:libro/:estudiante',
        component: TeaStatisticsForstudentLibroPage
        // eslint-disable-next-line max-len
        // loadChildren: () => import('./tea-statistics-forstudent-libro/tea-statistics-forstudent-libro.module').then( m => m.TeaStatisticsForstudentLibroPageModule)
      },
      {
        path: 'tea-statistics-forstudent-cuestionario/:codigo',
        component: TeaStatisticsForstudentCuestionarioPage
        // eslint-disable-next-line max-len
        // loadChildren: () => import('./tea-statistics-forstudent-cuestionario/tea-statistics-forstudent-cuestionario.module').then( m => m.TeaStatisticsForstudentCuestionarioPageModule)
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
