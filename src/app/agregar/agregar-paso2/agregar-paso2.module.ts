import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AgregarPaso2PageRoutingModule } from './agregar-paso2-routing.module';
import { AgregarPaso2Page } from './agregar-paso2.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    AgregarPaso2PageRoutingModule
  ],
  declarations: [AgregarPaso2Page]
})
export class AgregarPaso2PageModule {}
