import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StuContentAudioPageRoutingModule } from './stu-content-audio-routing.module';

import { StuContentAudioPage } from './stu-content-audio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StuContentAudioPageRoutingModule
  ],
  declarations: [StuContentAudioPage]
})
export class StuContentAudioPageModule {}
