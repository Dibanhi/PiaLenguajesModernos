import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdoptarPaso3PageRoutingModule } from './adoptar-paso3-routing.module';

import { AdoptarPaso3Page } from './adoptar-paso3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdoptarPaso3PageRoutingModule
  ],
  declarations: [AdoptarPaso3Page]
})
export class AdoptarPaso3PageModule {}
