import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AgregarPaso1PageRoutingModule } from './agregar-paso1-routing.module';
import { AgregarPaso1Page } from './agregar-paso1.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    AgregarPaso1PageRoutingModule
  ],
  declarations: [AgregarPaso1Page]
})
export class AgregarPaso1PageModule {}
