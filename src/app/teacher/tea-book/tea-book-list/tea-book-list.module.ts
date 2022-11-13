import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeaBookListPageRoutingModule } from './tea-book-list-routing.module';

import { TeaBookListPage } from './tea-book-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeaBookListPageRoutingModule
  ],
  declarations: [TeaBookListPage]
})
export class TeaBookListPageModule {}
