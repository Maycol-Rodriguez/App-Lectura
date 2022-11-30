import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StuDetailPageRoutingModule } from './stu-detail-routing.module';

import { StuDetailPage } from './stu-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StuDetailPageRoutingModule
  ],
  declarations: [StuDetailPage]
})
export class StuDetailPageModule {}
