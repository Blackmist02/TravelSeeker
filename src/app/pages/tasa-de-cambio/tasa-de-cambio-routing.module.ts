import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasaDeCambioPage } from './tasa-de-cambio.page';

const routes: Routes = [
  {
    path: '',
    component: TasaDeCambioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasaDeCambioPageRoutingModule {}
