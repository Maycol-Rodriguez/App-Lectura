import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StuContentVideoPageRoutingModule } from './stu-content-video-routing.module';

import { StuContentVideoPage } from './stu-content-video.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StuContentVideoPageRoutingModule
  ],
  declarations: [StuContentVideoPage]
})
export class StuContentVideoPageModule {}
