import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdoptarPage } from './adoptar.page';

const routes: Routes = [
  {
    path: '',
    component: AdoptarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdoptarPageRoutingModule {}
