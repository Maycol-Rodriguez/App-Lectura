import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeaStatisticsForstudentCuestionarioPageRoutingModule } from './tea-statistics-forstudent-cuestionario-routing.module';

import { TeaStatisticsForstudentCuestionarioPage } from './tea-statistics-forstudent-cuestionario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeaStatisticsForstudentCuestionarioPageRoutingModule
  ],
  declarations: [TeaStatisticsForstudentCuestionarioPage]
})
export class TeaStatisticsForstudentCuestionarioPageModule {}
