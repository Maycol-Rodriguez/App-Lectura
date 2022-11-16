import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FamBookListPageRoutingModule } from './fam-book-list-routing.module';

import { FamBookListPage } from './fam-book-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FamBookListPageRoutingModule
  ],
  declarations: [FamBookListPage]
})
export class FamBookListPageModule {}
