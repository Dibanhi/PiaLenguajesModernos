import { Mascota } from './mascota/mascota.model';
import { MascostasService } from './../../servicios/mascostas.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy{

  isLoading = false;
  mascotasCargadas: Mascota[];
  private usuariosSub: Subscription;
  interes = false;

  constructor( private mascotaService: MascostasService) {}

  ngOnInit() {
    this.usuariosSub = this.mascotaService.mascotas.subscribe(mascotas => {
      this.mascotasCargadas = mascotas;
    });
  }

  ionViewWillEnter(){
    this.isLoading = true;
    this.mascotaService.fetchMascotas().subscribe(() => {
      this.isLoading = false;
    })
  }

  ngOnDestroy(){
    if(this.usuariosSub){
      if(this.usuariosSub){
        this.usuariosSub.unsubscribe();
      }
    }
  }

  interesan(){
    if(this.interes){
      this.interes = false;
    }
    else{
      this.interes = true;
    }
  }

}
