import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeaBookCreatePageRoutingModule } from './tea-book-create-routing.module';

import { TeaBookCreatePage } from './tea-book-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeaBookCreatePageRoutingModule
  ],
  declarations: [TeaBookCreatePage]
})
export class TeaBookCreatePageModule {}
