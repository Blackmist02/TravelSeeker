import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TasaDeCambioPageRoutingModule } from './tasa-de-cambio-routing.module';

import { TasaDeCambioPage } from './tasa-de-cambio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TasaDeCambioPageRoutingModule
  ],
  declarations: [TasaDeCambioPage]
})
export class TasaDeCambioPageModule {}
