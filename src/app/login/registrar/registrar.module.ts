import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegistrarPageRoutingModule } from './registrar-routing.module';
import { RegistrarPage } from './registrar.page';
import { ComponentesModule } from "../../componentes/componentes.module";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RegistrarPageRoutingModule,
    ComponentesModule
  ],
  declarations: [RegistrarPage]
})
export class RegistrarPageModule {}
