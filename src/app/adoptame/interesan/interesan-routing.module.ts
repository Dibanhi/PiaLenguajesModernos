import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InteresanPage } from './interesan.page';

const routes: Routes = [
  {
    path: '',
    component: InteresanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InteresanPageRoutingModule {}
