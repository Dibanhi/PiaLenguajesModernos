import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MascotaPageRoutingModule } from './mascota-routing.module';
import { MascotaPage } from './mascota.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MascotaPageRoutingModule
  ],
  declarations: [MascotaPage]
})
export class MascotaPageModule {}
