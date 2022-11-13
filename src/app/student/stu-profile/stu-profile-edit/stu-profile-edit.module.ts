import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StuProfileEditPageRoutingModule } from './stu-profile-edit-routing.module';

import { StuProfileEditPage } from './stu-profile-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StuProfileEditPageRoutingModule
  ],
  declarations: [StuProfileEditPage]
})
export class StuProfileEditPageModule {}
