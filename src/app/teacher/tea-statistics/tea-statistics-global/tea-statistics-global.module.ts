import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeaStatisticsGlobalPageRoutingModule } from './tea-statistics-global-routing.module';

import { TeaStatisticsGlobalPage } from './tea-statistics-global.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeaStatisticsGlobalPageRoutingModule
  ],
  declarations: [TeaStatisticsGlobalPage]
})
export class TeaStatisticsGlobalPageModule {}
