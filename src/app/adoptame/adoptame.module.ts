import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AdoptamePageRoutingModule } from './adoptame-routing.module';
import { AdoptamePage } from './adoptame.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdoptamePageRoutingModule,
  ],
  declarations: [AdoptamePage]
})
export class AdoptamePageModule {}
