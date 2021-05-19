import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MascotaPage } from './mascota.page';

const routes: Routes = [
  {
    path: '',
    component: MascotaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MascotaPageRoutingModule {}
