import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FamBookUpdatePageRoutingModule } from './fam-book-update-routing.module';

import { FamBookUpdatePage } from './fam-book-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FamBookUpdatePageRoutingModule
  ],
  declarations: [FamBookUpdatePage]
})
export class FamBookUpdatePageModule {}
