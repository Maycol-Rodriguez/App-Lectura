import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeaBookPageRoutingModule } from './tea-book-routing.module';

import { TeaBookPage } from './tea-book.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeaBookPageRoutingModule
  ],
  declarations: [TeaBookPage]
})
export class TeaBookPageModule {}
