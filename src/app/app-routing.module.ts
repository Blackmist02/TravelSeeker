import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DbService } from './services/db.service';
import { TasaDeCambioPage } from './pages/tasa-de-cambio/tasa-de-cambio.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',  // Ruta inicial, redirige a la página de login
    pathMatch: 'full'
  },
  {
    path: 'login', 
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'recuperar-contrasenia',
    loadChildren: () => import('./pages/recuperar-contrasenia/recuperar-contrasenia.module').then(m => m.RecuperarContraseniaPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'e404',
    loadChildren: () => import('./pages/e404/e404.module').then(m => m.E404PageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tasa-de-cambio',
    loadChildren: () => import('./pages/tasa-de-cambio/tasa-de-cambio.module').then(m => m.TasaDeCambioPageModule)
  },
  {
    path: '**', // Ruta para cualquier URL desconocida
    redirectTo: 'e404',  // Redirige a la página 404 si no existe la ruta
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
