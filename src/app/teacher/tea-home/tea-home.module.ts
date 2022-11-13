import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeaHomePageRoutingModule } from './tea-home-routing.module';

import { TeaHomePage } from './tea-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeaHomePageRoutingModule
  ],
  declarations: [TeaHomePage]
})
export class TeaHomePageModule {}
