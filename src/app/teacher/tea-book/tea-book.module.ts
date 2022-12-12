import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeaBookPageRoutingModule } from './tea-book-routing.module';

import { TeaBookPage } from './tea-book.page';
import { TeaBookUpdatePage } from './tea-book-update/tea-book-update.page';
import { TeaBookCuestionarioPage } from './tea-book-cuestionario/tea-book-cuestionario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeaBookPageRoutingModule
  ],
  declarations: [
    TeaBookPage,
    TeaBookUpdatePage,
    TeaBookCuestionarioPage,
  ]
})
export class TeaBookPageModule {}
