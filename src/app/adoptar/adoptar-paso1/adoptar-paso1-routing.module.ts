import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdoptarPaso1Page } from './adoptar-paso1.page';

const routes: Routes = [
  {
    path: '',
    component: AdoptarPaso1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdoptarPaso1PageRoutingModule {}
