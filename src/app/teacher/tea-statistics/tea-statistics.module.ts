import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeaStatisticsPageRoutingModule } from './tea-statistics-routing.module';

import { TeaStatisticsPage } from './tea-statistics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeaStatisticsPageRoutingModule
  ],
  declarations: [TeaStatisticsPage]
})
export class TeaStatisticsPageModule {}
