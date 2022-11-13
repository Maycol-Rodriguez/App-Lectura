import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FamProfileEditPageRoutingModule } from './fam-profile-edit-routing.module';

import { FamProfileEditPage } from './fam-profile-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FamProfileEditPageRoutingModule
  ],
  declarations: [FamProfileEditPage]
})
export class FamProfileEditPageModule {}
