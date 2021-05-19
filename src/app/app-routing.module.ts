import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanLoad } from '@angular/router';
import { LoginGuard } from "./login/login.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'adoptame',
    loadChildren: () => import('./adoptame/adoptame.module').then(m => m.AdoptamePageModule),
    canLoad: [LoginGuard]
  },
  {
    path: 'login', 
    children: [
      {
        path: '',
        loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'iniciar',
        loadChildren: () => import('./login/iniciar/iniciar.module').then(m => m.IniciarPageModule)
      },        
      {
        path: 'registrar',
        loadChildren: () => import('./login/registrar/registrar.module').then(m => m.RegistrarPageModule)
      },
    ],
  },
  {
    path: 'busqueda',
    loadChildren: () => import('./busqueda/busqueda.module').then(m => m.BusquedaPageModule),
    canLoad: [LoginGuard]
  },
  {
    path: 'ubicacion',
    loadChildren: () => import('./ubicacion/ubicacion.module').then(m => m.UbicacionPageModule),
    canLoad: [LoginGuard]
  },
  {
    path: 'agregar',
    canLoad: [LoginGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./agregar/agregar.module').then(m => m.AgregarPageModule)
      },
      {
        path: 'paso-1',
        loadChildren: () => import('./agregar/agregar-paso1/agregar-paso1.module').then(m => m.AgregarPaso1PageModule)
      },
      {
        path: 'paso-2',
        loadChildren: () => import('./agregar/agregar-paso2/agregar-paso2.module').then(m => m.AgregarPaso2PageModule)
      },
      {
        path: 'paso-3',
        loadChildren: () => import('./agregar/agregar-paso3/agregar-paso3.module').then(m => m.AgregarPaso3PageModule)
      },
      {
        path: 'paso-4',
        loadChildren: () => import('./agregar/agregar-paso4/agregar-paso4.module').then(m => m.AgregarPaso4PageModule)
      }
    ]
  },
  {
    path: 'adoptar',
    canLoad: [LoginGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./adoptar/adoptar.module').then(m => m.AdoptarPageModule)
      },
      {
        path: 'paso-1',
        loadChildren: () => import('./adoptar/adoptar-paso1/adoptar-paso1.module').then(m => m.AdoptarPaso1PageModule)
      },
      {
        path: 'paso-2',
        children: [
          {
            path: '',
            loadChildren: () => import('./adoptar/adoptar-paso2/adoptar-paso2.module').then(m => m.AdoptarPaso2PageModule)
          },
          {
            path: 'agendar',
            loadChildren: () => import('./adoptar/adoptar-paso2/agendar/agendar.module').then(m => m.AgendarPageModule)
          }
        ]
      },
      {
        path: 'paso-3',
        loadChildren: () => import('./adoptar/adoptar-paso3/adoptar-paso3.module').then(m => m.AdoptarPaso3PageModule)
      },
      {
        path: 'paso-4',
        loadChildren: () => import('./adoptar/adoptar-paso4/adoptar-paso4.module').then(m => m.AdoptarPaso4PageModule)
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
