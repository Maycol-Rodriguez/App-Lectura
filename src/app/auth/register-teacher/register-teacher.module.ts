import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterTeacherPageRoutingModule } from './register-teacher-routing.module';

import { RegisterTeacherPage } from './register-teacher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterTeacherPageRoutingModule
  ],
  declarations: [RegisterTeacherPage]
})
export class RegisterTeacherPageModule {}
