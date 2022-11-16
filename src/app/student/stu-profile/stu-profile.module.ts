import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StuProfilePageRoutingModule } from './stu-profile-routing.module';

import { StuProfilePage } from './stu-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StuProfilePageRoutingModule
  ],
  declarations: [StuProfilePage]
})
export class StuProfilePageModule {}
