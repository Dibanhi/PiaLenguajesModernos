import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarPaso4PageRoutingModule } from './agregar-paso4-routing.module';

import { AgregarPaso4Page } from './agregar-paso4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarPaso4PageRoutingModule
  ],
  declarations: [AgregarPaso4Page]
})
export class AgregarPaso4PageModule {}
