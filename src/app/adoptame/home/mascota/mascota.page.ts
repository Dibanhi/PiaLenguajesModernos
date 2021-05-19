import { AlertController, NavController } from '@ionic/angular';
import { Mascota } from './mascota.model';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MascostasService } from 'src/app/servicios/mascostas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.page.html',
  styleUrls: ['./mascota.page.scss'],
})
export class MascotaPage implements OnInit, OnDestroy{
  
  mascotaActual: Mascota;
  mascotaSub: Subscription;
  isLoading = false;

  constructor(private mascotaService: MascostasService, private route: ActivatedRoute,
    private router: Router ,private navCtrl: NavController, private alertCtrl: AlertController) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('mascotaId')){
        this.navCtrl.navigateBack('/adoptame/app/home');
        return;
      }
      this.isLoading = true;
      this.mascotaSub = this.mascotaService.getMascota(paramMap.get('mascotaId')).subscribe(mascota => {
        this.mascotaActual = mascota;
        console.log('Mascota', this.mascotaActual);
        this.isLoading = false;
      }, 
      error => {
        this.alertCtrl.create({
          header:'Error',
          message:'Error al obtener la mascota !',
          buttons: [
            {text: 'Ok', handler: () => {
              this.router.navigate(['adoptame/app/home']);
            }}
          ]}).then(alertEl => {
            alertEl.present();
          });
      });
    });
  }

  ngOnDestroy(){
    if(this.mascotaSub){
      this.mascotaSub.unsubscribe();
    }
  }

}
