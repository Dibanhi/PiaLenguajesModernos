import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RespuestasPage } from './respuestas.page';

const routes: Routes = [
  {
    path: '',
    component: RespuestasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RespuestasPageRoutingModule {}
