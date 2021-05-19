import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AgregarPageRoutingModule } from './agregar-routing.module';
import { AgregarPage } from './agregar.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    AgregarPageRoutingModule
  ],
  declarations: [AgregarPage]
})
export class AgregarPageModule {}
