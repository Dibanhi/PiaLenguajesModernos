import { AttributeMarker } from '@angular/compiler/src/core';
import { AfterViewInit, ElementRef, Component, OnDestroy, OnInit, Renderer2, ViewChild, Input } from '@angular/core';
import { ModalController } from "@ionic/angular";
import { map } from "rxjs/operators";
import { environment } from "./../../../environments/environment";

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('map') mapElement: ElementRef;
  @Input() center = {lat: 25.7226326, lng: -100.3120671};
  @Input() selectable = true;
  @Input() closeButtonText = 'Cancel';
  @Input() title = 'Selecciona ubicacion';
  googleMaps: any;
  clickListener: any;

  constructor(private modalCtrl: ModalController, private renderer: Renderer2) { }

  ngOnInit() {}

  ngOnDestroy(){
    if(this.clickListener){
      this.googleMaps.event.removeListener(this.clickListener);
    }
  }

  onCancel(){
    this.modalCtrl.dismiss();
  }

  ngAfterViewInit(){
    this.getGoogleMaps()
    .then(googleMaps => {
      this.googleMaps = googleMaps;
      const mapEl = this.mapElement.nativeElement;
      const map = new googleMaps.Map(mapEl, {
        center: this.center,
        zoom: 16
      });
      this.googleMaps.event.addListenerOnce(map, 'idle', () => {
        this.renderer.addClass(mapEl, 'visible');
      });
      if(this.selectable){
        this.clickListener = map.addListener('click', event => {
          const coords = {lat: event.latLng.lat(), lng: event.latLng.lng()};
          this.modalCtrl.dismiss(coords);
        });
      }
      else
      {
        const marker = new googleMaps.Marker({
          position: this.center, map: map
        });
        marker.setMap(map);
      }
    })
    .catch(err => {
      console.log(err);
    });
  }

  private getGoogleMaps(){
    const win = window as any;
    const googleModule = win.google;
    if(googleModule && googleModule.maps){
      return Promise.resolve(googleModule.maps);
    }
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://maps.googleapis.com/maps/api/js?key='+ environment.googleMapsAPIKey;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      script.onload = () => {
        const loadedGoogleModule = win.google;
        if(loadedGoogleModule && loadedGoogleModule.maps){
          resolve(loadedGoogleModule.maps);
        }
        else
        {
          reject('Google Maps SDK no permitido :(');
        }
      }
    });
  }

}
