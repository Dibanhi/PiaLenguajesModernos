import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdoptarPaso4Page } from './adoptar-paso4.page';

const routes: Routes = [
  {
    path: '',
    component: AdoptarPaso4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdoptarPaso4PageRoutingModule {}
