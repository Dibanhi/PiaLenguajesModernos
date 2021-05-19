import { AgregarPaso2Page } from './../agregar-paso2/agregar-paso2.page';
import { Component, OnInit, EventEmitter,ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LugarUbicacion } from "../../ubicacion/ubicacion.model";
import { LoginService } from "../../servicios/login.service";
import { ModalController, Platform } from "@ionic/angular";
import { CameraResultType, CameraSource, Capacitor, Plugins } from "@capacitor/core";
import { AngularFireStorage } from "@angular/fire/storage";
import { Observable } from 'rxjs';
import { finalize } from "rxjs/operators";

@Component({
  selector: 'app-agregar-paso1',
  templateUrl: './agregar-paso1.page.html',
  styleUrls: ['./agregar-paso1.page.scss'],
})
export class AgregarPaso1Page implements OnInit {
  agregar: FormGroup;
  url: string;
  @ViewChild('imageFile') filePickerRef: ElementRef<HTMLInputElement>;
  selectedImage: string;
  usarImagen = false;
  filePath: any;
  downloadURL: Observable<string>;
  seleccion = true;

  constructor(private platform: Platform, private storage: AngularFireStorage, private modalCtrl: ModalController) { }

  ngOnInit() {

    if((this.platform.is('mobile') && !this.platform.is('hybrid')) || this.platform.is('desktop')){
      this.usarImagen = true;
    }
    this.agregar = new FormGroup({
      imagen: new FormControl(null, {
        validators: [Validators.required]
      }),
      mascotaname: new FormControl(null, {
        updateOn: 'blur', validators: [Validators.required]
      }),
      descripcion: new FormControl(null, {
        updateOn: 'blur', validators: [Validators.required, Validators.maxLength(180)]
      }),
      tipoMascota: new FormControl(null, {
        updateOn: 'blur', validators: [Validators.required]
      }),
      motivo: new FormControl(null, {
        updateOn: 'blur', validators: [Validators.required]
      })
    });
  }

  irPaso2(){
    const modal = this.modalCtrl.create({
      component: AgregarPaso2Page,
      componentProps: {
          mascotaUrl: this.agregar.value.imagen,
          nombreMascota: this.agregar.value.mascotaname,
          descripcion: this.agregar.value.descripcion,
          tipoMascota: this.agregar.value.tipoMascota,
          motivo: this.agregar.value.motivo
      }})
      .then(modalEl => {
        modalEl.present();
      });
  }

  //Funciones para obtener imagenes

  ImageUser(event: Event) {
    this.seleccion = true;
    const image = (event.target as HTMLInputElement).files[0];
   if(!image){
     return;
   }
   const fr = new FileReader();
   fr.onload = () => {
     const dataUrl = fr.result.toString();
     this.selectedImage = dataUrl;
     this.upLoadImage(image);
     this.seleccion = true;
   }
   fr.readAsDataURL(image);
 }

  UrlImage(){
    if(this.selectedImage){
      const httpImage =`${this.downloadURL}`
      console.log('HTTP',httpImage);
      this.agregar.patchValue({imagen: httpImage});
      this.seleccion = false;
    }
  }

  upLoadImage(image: File){
  this.filePath = `mascotas-images/${createGuid()}.jpeg`
  const fileRef = this.storage.ref(this.filePath);

  const task = this.storage.upload(this.filePath, image);
  task.snapshotChanges()
  .pipe(
    finalize(() => {
      fileRef.getDownloadURL().subscribe(urlImage => {
        this.downloadURL= urlImage;
      })
    })
  ).subscribe();
  }

  getUrlFileImage() {
   if(!Capacitor.isPluginAvailable('Camera') || this.usarImagen){
     this.filePickerRef.nativeElement.click();
     return;
   }
   Plugins.Camera.getPhoto({
     quality: 100,
     source: CameraSource.Prompt,
     correctOrientation: true,
     height: 320,
     width: 200,
     resultType: CameraResultType.DataUrl
   })
   .then(image => {
     this.selectedImage = image.dataUrl;
   })
   .catch(error => {
     console.log(error);
     return false;
   });
  }

}

function createGuid(){
  function S4() {
     return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  }
  return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
}
