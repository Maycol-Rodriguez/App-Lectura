import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeaStatisticsPageRoutingModule } from './tea-statistics-routing.module';

import { TeaStatisticsPage } from './tea-statistics.page';
import { TeaStatisticsForstudentLibroPage } from './tea-statistics-forstudent-libro/tea-statistics-forstudent-libro.page';
import { TeaStatisticsForstudentPage } from './tea-statistics-forstudent/tea-statistics-forstudent.page';
import { TeaStatisticsForstudentCuestionarioPage } from './tea-statistics-forstudent-cuestionario/tea-statistics-forstudent-cuestionario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeaStatisticsPageRoutingModule
  ],
  declarations: [
    TeaStatisticsPage,
    TeaStatisticsForstudentPage,
    TeaStatisticsForstudentLibroPage,
    TeaStatisticsForstudentCuestionarioPage
  ]
})
export class TeaStatisticsPageModule {}
