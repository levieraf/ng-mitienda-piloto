import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MisOrdenesComponent } from './mis-ordenes/mis-ordenes.component';
import { NuevaOrdenComponent } from './nueva-orden/nueva-orden.component';

const routes: Routes = [
  {
    path: '', component: MisOrdenesComponent
  },
  {
    path: 'nueva-orden', component: NuevaOrdenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdenesRoutingModule { }
