import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeaStatisticsHomePageRoutingModule } from './tea-statistics-home-routing.module';

import { TeaStatisticsHomePage } from './tea-statistics-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeaStatisticsHomePageRoutingModule
  ],
  declarations: [TeaStatisticsHomePage]
})
export class TeaStatisticsHomePageModule {}
