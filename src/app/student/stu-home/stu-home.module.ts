import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StuHomePageRoutingModule } from './stu-home-routing.module';

import { StuHomePage } from './stu-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StuHomePageRoutingModule
  ],
  declarations: [StuHomePage]
})
export class StuHomePageModule {}
