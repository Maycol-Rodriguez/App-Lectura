import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StuBookCreatePageRoutingModule } from './stu-book-create-routing.module';

import { StuBookCreatePage } from './stu-book-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StuBookCreatePageRoutingModule
  ],
  declarations: [StuBookCreatePage]
})
export class StuBookCreatePageModule {}
