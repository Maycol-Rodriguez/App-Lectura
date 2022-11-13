import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StuContentAwardPageRoutingModule } from './stu-content-award-routing.module';

import { StuContentAwardPage } from './stu-content-award.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StuContentAwardPageRoutingModule
  ],
  declarations: [StuContentAwardPage]
})
export class StuContentAwardPageModule {}
