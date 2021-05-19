import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarPaso1Page } from './agregar-paso1.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarPaso1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarPaso1PageRoutingModule {}
