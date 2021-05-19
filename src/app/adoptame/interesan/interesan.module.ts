import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InteresanPageRoutingModule } from './interesan-routing.module';

import { InteresanPage } from './interesan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InteresanPageRoutingModule
  ],
  declarations: [InteresanPage]
})
export class InteresanPageModule {}
