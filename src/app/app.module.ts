import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { LoginComponent } from './screens/auth/login/login.component';
import { RegisterComponent } from './screens/auth/register/register.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LayoutComponent } from './screens/layout/layout.component';

import { es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
import { AngularFireModule } from '@angular/fire';

import { environment } from 'src/environments/environment';

// import { StoreModule } from '@ngrx/store';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

registerLocaleData(es);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LayoutComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    DemoNgZorroAntdModule
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }, { provide: NZ_ICONS, useValue: icons }],
  bootstrap: [AppComponent]
})
export class AppModule { }