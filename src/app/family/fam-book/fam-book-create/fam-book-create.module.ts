import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FamBookCreatePageRoutingModule } from './fam-book-create-routing.module';

import { FamBookCreatePage } from './fam-book-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FamBookCreatePageRoutingModule
  ],
  declarations: [FamBookCreatePage]
})
export class FamBookCreatePageModule {}
