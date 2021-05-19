import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MapaComponent } from "../mapa/mapa.component";
import { ModalController, AlertController, ActionSheetController } from "@ionic/angular";
import { map , switchMap} from "rxjs/operators";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { LugarUbicacion, Coordenadas } from "../../ubicacion/ubicacion.model";
import { of } from "rxjs";
import { Capacitor, Plugins } from "@capacitor/core";

@Component({
  selector: 'app-seleccionar-ubicacion',
  templateUrl: './seleccionar-ubicacion.component.html',
  styleUrls: ['./seleccionar-ubicacion.component.scss'],
})
export class SeleccionaUbicacionComponent implements OnInit {
  @Output() ubicacionSelected = new EventEmitter<LugarUbicacion>();
  selectedLocationImage: string;

  constructor(private modalCtrl: ModalController, private http: HttpClient, private actionSheet: ActionSheetController, private alertCtrl: AlertController) { }

  ngOnInit() {}

  onPickLocation() {
    this.actionSheet.create({
      header: 'Selecciona',
      buttons: [
        {text: 'Ubicacion Actual', handler: () => {
          this.ubicacionUsuario();
        }},
        {text: 'Ubicar en el Mapa', handler: () => {
          this.openMap();
        }},
        {text: 'Cancelar' , role: 'cancel'}
      ]
    })
    .then(actionEl => {
      actionEl.present();
    });
  }

  showAlertLocationError(){
    this.alertCtrl.create({
      header: 'No se pudo acceder a la ubicacion',
      message: 'Intentelo nuevamente',
      buttons: ['Ok']
    });
  }

  ubicacionUsuario(){
    if(!Capacitor.isPluginAvailable('Geolocation')){
      this.showAlertLocationError();
      return;
    }

    Plugins.Geolocation.getCurrentPosition()
    .then(geoLocation => {
      const coords: Coordenadas = {
        lat: geoLocation.coords.latitude, 
        lng: geoLocation.coords.longitude
      };
      this.crearPunto(coords.lat, coords.lng);
    })
    .catch(err => {
      this.showAlertLocationError();
    })
  }

  openMap(){
    this.modalCtrl.create({
      component: MapaComponent
    }).then(modalEl => {
      modalEl.onDidDismiss().then(modalData => {
        console.log(modalData);
        if(!modalData.data)
        {
          return;
        }
        else
        {
          this.crearPunto(modalData.data.lat, modalData.data.lng);
        }
      });
      modalEl.present();
    });
  }

  crearPunto(lat: number, lng: number){
    const pickedLocation: LugarUbicacion = {
      lat: lat,
      lng: lng,
      address: null,
      staticMapImageUrl: null
    }

    this.getAddress(lat, lng).pipe(switchMap(address => {
      pickedLocation.address = address;
      return of(this.getMapImage(pickedLocation.lat, pickedLocation.lng, 16));
    }))
    .subscribe(staticMap => {
      pickedLocation.staticMapImageUrl = staticMap;
      this.selectedLocationImage = staticMap;
      this.ubicacionSelected.emit(pickedLocation);
    })
  }

  private getMapImage(lat: number, lng: number, zoom: number){
    return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=500x300&maptype=roadmap&markers=color:red%7Clabel:Lugar%7C${lat},${lng}&key=${environment.googleMapsAPIKey}`;
  }

  private getAddress(lat: number, lng: number){
    return this.http.get<any>(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${environment.googleMapsAPIKey}`)
    .pipe(map(geoData => {
      console.log(geoData);
      if(!geoData || !geoData.results || geoData.results.legth === 0){
        return null;
      }
      else
      {
        return geoData.results[0].formatted_address;
      }
    }));
  }

}
