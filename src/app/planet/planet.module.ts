import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanetPageRoutingModule } from './planet-routing.module';

import { PlanetPage } from './planet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanetPageRoutingModule
  ],
  declarations: [PlanetPage]
})
export class PlanetPageModule {}
