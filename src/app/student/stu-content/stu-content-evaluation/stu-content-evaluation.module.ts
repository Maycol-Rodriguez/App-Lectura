import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StuContentEvaluationPageRoutingModule } from './stu-content-evaluation-routing.module';

import { StuContentEvaluationPage } from './stu-content-evaluation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StuContentEvaluationPageRoutingModule
  ],
  declarations: [StuContentEvaluationPage]
})
export class StuContentEvaluationPageModule {}
