import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeaBookUpdatePageRoutingModule } from './tea-book-update-routing.module';

import { TeaBookUpdatePage } from './tea-book-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeaBookUpdatePageRoutingModule
  ],
  declarations: [TeaBookUpdatePage]
})
export class TeaBookUpdatePageModule {}
