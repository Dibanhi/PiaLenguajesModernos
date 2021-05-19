import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdoptarPaso2PageRoutingModule } from './adoptar-paso2-routing.module';

import { AdoptarPaso2Page } from './adoptar-paso2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdoptarPaso2PageRoutingModule
  ],
  declarations: [AdoptarPaso2Page]
})
export class AdoptarPaso2PageModule {}
