import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarPaso2Page } from './agregar-paso2.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarPaso2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarPaso2PageRoutingModule {}
