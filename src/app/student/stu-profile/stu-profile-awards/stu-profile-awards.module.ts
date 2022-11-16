import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StuProfileAwardsPageRoutingModule } from './stu-profile-awards-routing.module';

import { StuProfileAwardsPage } from './stu-profile-awards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StuProfileAwardsPageRoutingModule
  ],
  declarations: [StuProfileAwardsPage]
})
export class StuProfileAwardsPageModule {}
