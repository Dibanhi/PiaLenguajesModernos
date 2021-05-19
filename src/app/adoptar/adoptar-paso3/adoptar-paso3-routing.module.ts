import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdoptarPaso3Page } from './adoptar-paso3.page';

const routes: Routes = [
  {
    path: '',
    component: AdoptarPaso3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdoptarPaso3PageRoutingModule {}
