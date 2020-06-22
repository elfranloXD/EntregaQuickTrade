import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MasDetallesPageRoutingModule } from './mas-detalles-routing.module';

import { MasDetallesPage } from './mas-detalles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MasDetallesPageRoutingModule
  ],
  declarations: [MasDetallesPage]
})
export class MasDetallesPageModule {}
