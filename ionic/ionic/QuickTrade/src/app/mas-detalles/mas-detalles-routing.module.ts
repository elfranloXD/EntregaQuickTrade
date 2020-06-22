import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasDetallesPage } from './mas-detalles.page';

const routes: Routes = [
  {
    path: '',
    component: MasDetallesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasDetallesPageRoutingModule {}
