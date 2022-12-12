import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StuBookPageRoutingModule } from './stu-book-routing.module';

import { StuBookPage } from './stu-book.page';
import { StuBookUpdatePage } from './stu-book-update/stu-book-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StuBookPageRoutingModule
  ],
  declarations: [
    StuBookPage,
    StuBookUpdatePage
  ]
})
export class StuBookPageModule {}
