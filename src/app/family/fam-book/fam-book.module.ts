import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FamBookPageRoutingModule } from './fam-book-routing.module';

import { FamBookPage } from './fam-book.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FamBookPageRoutingModule
  ],
  declarations: [FamBookPage]
})
export class FamBookPageModule {}
