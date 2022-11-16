import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StuBookListPageRoutingModule } from './stu-book-list-routing.module';

import { StuBookListPage } from './stu-book-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StuBookListPageRoutingModule
  ],
  declarations: [StuBookListPage]
})
export class StuBookListPageModule {}
