import { ModalController } from '@ionic/angular';
import { LugarUbicacion } from './../../ubicacion/ubicacion.model';
import { Router } from '@angular/router';
import { LoginService } from './../../servicios/login.service';
import { MascostasService } from './../../servicios/mascostas.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-paso4',
  templateUrl: './agregar-paso4.page.html',
  styleUrls: ['./agregar-paso4.page.scss'],
})
export class AgregarPaso4Page implements OnInit {

  @Input() mascotaUrl: string;
  @Input() nombreMascota: string;
  @Input() descripcion: string;
  @Input() tipoMascota: string;
  @Input() motivo: string;
  @Input() nombre: string;
  @Input() email: string;
  @Input() telefono: string;
  @Input() celular: string;
  @Input() web: string;
  @Input() ubicacion: LugarUbicacion;

  constructor(private mascotaService: MascostasService, private loginService: LoginService,
    private modalCtrl: ModalController, private router: Router) { }

  ngOnInit() {
  }

  publicarMascota(){
    this.mascotaService.addMascota(this.mascotaUrl, this.nombreMascota, this.descripcion, this.tipoMascota, this.motivo,
      this.nombre, this.email, this.telefono, this.celular,this.web, this.ubicacion, '');
      this.modalCtrl.dismiss();
  }

  regresarPaso3(){
    this.modalCtrl.dismiss();
  }

}
