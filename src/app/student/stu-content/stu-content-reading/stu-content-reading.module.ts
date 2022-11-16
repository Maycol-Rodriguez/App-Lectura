import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StuContentReadingPageRoutingModule } from './stu-content-reading-routing.module';

import { StuContentReadingPage } from './stu-content-reading.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StuContentReadingPageRoutingModule
  ],
  declarations: [StuContentReadingPage]
})
export class StuContentReadingPageModule {}
