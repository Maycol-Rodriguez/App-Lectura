import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeaStatisticsForstudentDetailPageRoutingModule } from './tea-statistics-forstudent-detail-routing.module';

import { TeaStatisticsForstudentDetailPage } from './tea-statistics-forstudent-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeaStatisticsForstudentDetailPageRoutingModule
  ],
  declarations: [TeaStatisticsForstudentDetailPage]
})
export class TeaStatisticsForstudentDetailPageModule {}
