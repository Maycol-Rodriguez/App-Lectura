import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FamProfileViewPageRoutingModule } from './fam-profile-view-routing.module';

import { FamProfileViewPage } from './fam-profile-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FamProfileViewPageRoutingModule
  ],
  declarations: [FamProfileViewPage]
})
export class FamProfileViewPageModule {}
