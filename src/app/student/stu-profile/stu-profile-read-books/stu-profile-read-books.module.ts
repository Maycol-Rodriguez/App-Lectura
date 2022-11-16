import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StuProfileReadBooksPageRoutingModule } from './stu-profile-read-books-routing.module';

import { StuProfileReadBooksPage } from './stu-profile-read-books.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StuProfileReadBooksPageRoutingModule
  ],
  declarations: [StuProfileReadBooksPage]
})
export class StuProfileReadBooksPageModule {}
