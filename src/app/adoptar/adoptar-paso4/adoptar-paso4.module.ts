import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdoptarPaso4PageRoutingModule } from './adoptar-paso4-routing.module';

import { AdoptarPaso4Page } from './adoptar-paso4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdoptarPaso4PageRoutingModule
  ],
  declarations: [AdoptarPaso4Page]
})
export class AdoptarPaso4PageModule {}
