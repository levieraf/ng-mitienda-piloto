import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdenesRoutingModule } from './ordenes-routing.module';
import { MisOrdenesComponent } from './mis-ordenes/mis-ordenes.component';
import { NuevaOrdenComponent } from './nueva-orden/nueva-orden.component';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { StoreModule } from '@ngrx/store';
import { AppReducers } from 'src/app/ngrx/app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    MisOrdenesComponent,
    NuevaOrdenComponent
  ],
  imports: [
    CommonModule,
    OrdenesRoutingModule,
    DemoNgZorroAntdModule,
    StoreModule.forRoot(AppReducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ]
})
export class OrdenesModule { }
