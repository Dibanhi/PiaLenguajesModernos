import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { LugarUbicacion } from 'src/app/ubicacion/ubicacion.model';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AgregarPaso4Page } from '../agregar-paso4/agregar-paso4.page';

@Component({
  selector: 'app-agregar-paso3',
  templateUrl: './agregar-paso3.page.html',
  styleUrls: ['./agregar-paso3.page.scss'],
})
export class AgregarPaso3Page implements OnInit {

  @Input() mascotaUrl: string;
  @Input() nombreMascota: string;
  @Input() descripcion: string;
  @Input() tipoMascota: string;
  @Input() motivo: string;
  @Input() nombre: string;
  @Input()  email: string;
  @Input()  telefono: string;
  @Input()  celular: string;
  @Input()  web: string;

  agregar3: FormGroup;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    this.agregar3 = new FormGroup({
      ubicacion: new FormControl(null, {
        validators: [Validators.required]
      }),
    });
  }

  onUbicacionSeleccionada(ubicacion: LugarUbicacion){
    this.agregar3.patchValue({ubicacion: ubicacion});
  }

  irAPaso4(){
    const modal = this.modalCtrl.create({
    component: AgregarPaso4Page,
    componentProps: {
      mascotaUrl: this.mascotaUrl,
      nombreMascota: this.nombreMascota,
      descripcion: this.descripcion,
      tipoMascota: this.tipoMascota,
      motivo: this.motivo,
      nombre: this.nombre,
      email: this.email,
      telefono: this.telefono,
      celular: this.celular,
      web: this.web,
      ubicacion: this.agregar3.value.ubicacion
    }})
    .then(modalEl => {
      modalEl.present();
    });
  }

  regresarPaso2(){
    this.modalCtrl.dismiss();
  }

}
