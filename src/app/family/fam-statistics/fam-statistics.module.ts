import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FamStatisticsPageRoutingModule } from './fam-statistics-routing.module';

import { FamStatisticsPage } from './fam-statistics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FamStatisticsPageRoutingModule
  ],
  declarations: [FamStatisticsPage]
})
export class FamStatisticsPageModule {}
