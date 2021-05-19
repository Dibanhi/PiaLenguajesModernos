import { Component, OnInit, EventEmitter,ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LugarUbicacion } from "../../ubicacion/ubicacion.model";
import { LoginService } from "../../servicios/login.service";
import { Platform } from "@ionic/angular";
import { CameraResultType, CameraSource, Capacitor, Plugins } from "@capacitor/core";
import { AngularFireStorage } from "@angular/fire/storage";
import { Observable } from 'rxjs';
import { finalize } from "rxjs/operators";

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  registrar: FormGroup;
  url: string;
  @ViewChild('imageFile') filePickerRef: ElementRef<HTMLInputElement>;
  selectedImage: string;
  usarImagen = false;
  filePath: any;
  downloadURL: Observable<string>;
  seleccion = true;

  constructor(private router: Router, private loginService: LoginService,
    private platform: Platform, private storage: AngularFireStorage) { }

  ngOnInit() {

    if((this.platform.is('mobile') && !this.platform.is('hybrid')) || this.platform.is('desktop')){
      this.usarImagen = true;
    }
    this.registrar = new FormGroup({
      imagen: new FormControl(null, {
        validators: [Validators.required]
      }),
      username: new FormControl(null, {
        updateOn: 'blur', validators: [Validators.required]
      }),
      email: new FormControl(null, {
        updateOn: 'blur', validators: [Validators.required, Validators.email]
      }),
      contraseña: new FormControl(null, {
        updateOn: 'blur', validators: [Validators.required]
      }),
      tipoCuenta: new FormControl(null, {
        updateOn: 'blur', validators: [Validators.required]
      }),
      ubicacion: new FormControl(null, {
        validators: [Validators.required]
      }),
    });
  }

  addNewUser(){
    if(!this.registrar.valid){
      return;
    }
    this.loginService.registrar(this.registrar.value.imagen, this.registrar.value.username, this.registrar.value.email, 
      this.registrar.value.contraseña, this.registrar.value.tipoCuenta, this.registrar.value.ubicacion);
    this.loginService.userActual = this.registrar.value;
      this.registrar.reset();
    this.router.navigate(['/adoptame/app/home']);
  }

  onUbicacionSeleccionada(ubicacion: LugarUbicacion){
    this.registrar.patchValue({ubicacion: ubicacion});
  }

  validarContraseña(contraseña: string, confirmContraseña: string){
    if (contraseña != confirmContraseña) {
      return false;
    } else {
      return true; 
    }
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
      this.registrar.patchValue({imagen: httpImage});
      this.seleccion = false;
    }
  }

  upLoadImage(image: File){
  this.filePath = `users-images/${createGuid()}.jpeg`
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
  



