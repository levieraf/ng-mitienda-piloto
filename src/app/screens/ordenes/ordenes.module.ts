import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdenesRoutingModule } from './ordenes-routing.module';
import { MisOrdenesComponent } from './mis-ordenes/mis-ordenes.component';
import { NuevaOrdenComponent } from './nueva-orden/nueva-orden.component';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';

@NgModule({
  declarations: [
    MisOrdenesComponent,
    NuevaOrdenComponent
  ],
  imports: [
    CommonModule,
    OrdenesRoutingModule,
    DemoNgZorroAntdModule
  ]
})
export class OrdenesModule { }
