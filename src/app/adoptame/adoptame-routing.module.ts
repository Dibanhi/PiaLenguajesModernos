import { NgModule } from '@angular/core';
import { Routes, RouterModule ,CanLoad } from '@angular/router';
import { AdoptamePage } from './adoptame.page';

const routes: Routes = [
  {
    path: 'app',
    component: AdoptamePage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
          },
          {
            path: ':mascotaId',
            loadChildren: () => import('./home/mascota/mascota.module').then(m => m.MascotaPageModule)
          }
        ]
      },
      {
        path: 'interesan',
        loadChildren: () => import('./interesan/interesan.module').then(m => m.InteresanPageModule)
      },
      {
        path: 'respuestas',
        loadChildren: () => import('./respuestas/respuestas.module').then(m => m.RespuestasPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilPageModule)
      },
      {
        path: '',
        redirectTo: '/adoptame/app/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/adoptame/app/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdoptamePageRoutingModule {}
