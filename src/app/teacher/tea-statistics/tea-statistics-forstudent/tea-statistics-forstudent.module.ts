import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeaStatisticsForstudentPageRoutingModule } from './tea-statistics-forstudent-routing.module';

import { TeaStatisticsForstudentPage } from './tea-statistics-forstudent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeaStatisticsForstudentPageRoutingModule
  ],
  declarations: [TeaStatisticsForstudentPage]
})
export class TeaStatisticsForstudentPageModule {}
