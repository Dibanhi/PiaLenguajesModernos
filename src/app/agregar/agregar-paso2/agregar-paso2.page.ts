import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AgregarPaso3Page } from '../agregar-paso3/agregar-paso3.page';

@Component({
  selector: 'app-agregar-paso2',
  templateUrl: './agregar-paso2.page.html',
  styleUrls: ['./agregar-paso2.page.scss'],
})
export class AgregarPaso2Page implements OnInit {

  @Input() mascotaUrl: string;
  @Input() nombreMascota: string;
  @Input() descripcion: string;
  @Input() tipoMascota: string;
  @Input() motivo: string;
  
  agregar2: FormGroup;


  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    this.agregar2 = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required]
      }),
      email: new FormControl(null),
      telefono: new FormControl(null),
      celular: new FormControl(null),
      web: new FormControl(null),
    });
  }

  irAPaso3(){
    const modal = this.modalCtrl.create({
    component: AgregarPaso3Page,
    componentProps: {
      mascotaUrl: this.mascotaUrl,
      nombreMascota: this.nombreMascota,
      descripcion: this.descripcion,
      tipoMascota: this.tipoMascota,
      motivo: this.motivo,
      nombre: this.agregar2.value.name,
      email: this.agregar2.value.email,
      telefono: this.agregar2.value.telefono,
      celular: this.agregar2.value.celular,
      web: this.agregar2.value.web
    }})
    .then(modalEl => {
      modalEl.present();
    });
  }

  regresarPaso1(){
    this.modalCtrl.dismiss();
  }


}
