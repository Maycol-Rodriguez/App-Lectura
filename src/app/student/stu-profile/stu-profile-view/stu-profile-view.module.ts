import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StuProfileViewPageRoutingModule } from './stu-profile-view-routing.module';

import { StuProfileViewPage } from './stu-profile-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StuProfileViewPageRoutingModule
  ],
  declarations: [StuProfileViewPage]
})
export class StuProfileViewPageModule {}
