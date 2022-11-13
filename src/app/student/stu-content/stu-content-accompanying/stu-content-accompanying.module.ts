import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StuContentAccompanyingPageRoutingModule } from './stu-content-accompanying-routing.module';

import { StuContentAccompanyingPage } from './stu-content-accompanying.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StuContentAccompanyingPageRoutingModule
  ],
  declarations: [StuContentAccompanyingPage]
})
export class StuContentAccompanyingPageModule {}
