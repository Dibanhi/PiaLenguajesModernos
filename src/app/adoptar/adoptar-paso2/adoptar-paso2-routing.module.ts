import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdoptarPaso2Page } from './adoptar-paso2.page';

const routes: Routes = [
  {
    path: '',
    component: AdoptarPaso2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdoptarPaso2PageRoutingModule {}
