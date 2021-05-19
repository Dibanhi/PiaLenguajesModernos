import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarPaso3Page } from './agregar-paso3.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarPaso3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarPaso3PageRoutingModule {}
