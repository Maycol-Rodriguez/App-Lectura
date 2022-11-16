import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StuContentSelectPageRoutingModule } from './stu-content-select-routing.module';

import { StuContentSelectPage } from './stu-content-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StuContentSelectPageRoutingModule
  ],
  declarations: [StuContentSelectPage]
})
export class StuContentSelectPageModule {}
