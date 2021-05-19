import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule , BUCKET} from "@angular/fire/storage";
import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";
import { HttpClientModule } from "@angular/common/http";
import { AngularFireAuthModule } from "@angular/fire/auth";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFirestoreModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    AngularFireAuthModule
  ],
  providers: [
    {provide: BUCKET, useValue: 'gs://pia-am.appspot.com'},
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
