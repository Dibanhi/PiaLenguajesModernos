import { MascotaPage } from './mascota/mascota.page';
import { CardMascotaComponent } from './card-mascota/card-mascota.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage , CardMascotaComponent],
  entryComponents: [CardMascotaComponent]
})
export class HomePageModule {}
