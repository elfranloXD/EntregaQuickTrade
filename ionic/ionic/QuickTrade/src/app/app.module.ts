import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { listaproductosservices } from "./services/listaproductos.services";  //Hay que importarlo para poder llamarlo más abajo.

//Es necesario para poder usar FireBase.
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database'; //Este para poder usar el modulo de bbdd.

import {environment} from '../environments/environment';  //Se importa porque aquí es donde hemos pegado la variable que FireBase nos proporciona al registrarnos,

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),  //Necesario para usar FireBase.
    AngularFireDatabaseModule //Necesario para usar FireBase.
  ],
  providers: [
    StatusBar,
    SplashScreen,
    listaproductosservices, //Lo llamamos aquí para poder usarlo y así poder inyectar sus datos en el home.page.ts
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
