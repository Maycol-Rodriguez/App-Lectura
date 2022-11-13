import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FamProfilePageRoutingModule } from './fam-profile-routing.module';

import { FamProfilePage } from './fam-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FamProfilePageRoutingModule
  ],
  declarations: [FamProfilePage]
})
export class FamProfilePageModule {}
