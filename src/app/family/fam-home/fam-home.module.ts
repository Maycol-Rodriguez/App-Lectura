import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FamHomePageRoutingModule } from './fam-home-routing.module';

import { FamHomePage } from './fam-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FamHomePageRoutingModule
  ],
  declarations: [FamHomePage]
})
export class FamHomePageModule {}
