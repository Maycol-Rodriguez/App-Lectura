import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StuContentPageRoutingModule } from './stu-content-routing.module';

import { StuContentPage } from './stu-content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StuContentPageRoutingModule
  ],
  declarations: [StuContentPage]
})
export class StuContentPageModule {}
