import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdoptarPaso1PageRoutingModule } from './adoptar-paso1-routing.module';

import { AdoptarPaso1Page } from './adoptar-paso1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdoptarPaso1PageRoutingModule
  ],
  declarations: [AdoptarPaso1Page]
})
export class AdoptarPaso1PageModule {}
