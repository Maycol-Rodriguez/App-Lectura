import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StuBookUpdatePageRoutingModule } from './stu-book-update-routing.module';

import { StuBookUpdatePage } from './stu-book-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StuBookUpdatePageRoutingModule
  ],
  declarations: [StuBookUpdatePage]
})
export class StuBookUpdatePageModule {}
