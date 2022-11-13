import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FamProfileSonsPageRoutingModule } from './fam-profile-sons-routing.module';

import { FamProfileSonsPage } from './fam-profile-sons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FamProfileSonsPageRoutingModule
  ],
  declarations: [FamProfileSonsPage]
})
export class FamProfileSonsPageModule {}
