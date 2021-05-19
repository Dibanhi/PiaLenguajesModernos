import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AgregarPaso3PageRoutingModule } from './agregar-paso3-routing.module';
import { AgregarPaso3Page } from './agregar-paso3.page';
import { ComponentesModule } from "../../componentes/componentes.module";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    AgregarPaso3PageRoutingModule,
    ComponentesModule
  ],
  declarations: [AgregarPaso3Page]
})
export class AgregarPaso3PageModule {}
