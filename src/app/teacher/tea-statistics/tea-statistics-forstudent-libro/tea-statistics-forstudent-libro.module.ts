import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeaStatisticsForstudentLibroPageRoutingModule } from './tea-statistics-forstudent-libro-routing.module';

import { TeaStatisticsForstudentLibroPage } from './tea-statistics-forstudent-libro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeaStatisticsForstudentLibroPageRoutingModule
  ],
  declarations: [TeaStatisticsForstudentLibroPage]
})
export class TeaStatisticsForstudentLibroPageModule {}
