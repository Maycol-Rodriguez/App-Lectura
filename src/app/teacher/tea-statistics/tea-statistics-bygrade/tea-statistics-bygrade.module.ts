import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeaStatisticsBygradePageRoutingModule } from './tea-statistics-bygrade-routing.module';

import { TeaStatisticsBygradePage } from './tea-statistics-bygrade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeaStatisticsBygradePageRoutingModule
  ],
  declarations: [TeaStatisticsBygradePage]
})
export class TeaStatisticsBygradePageModule {}
