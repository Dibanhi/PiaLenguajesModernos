import { Mascota } from './../mascota/mascota.model';
import { Component,OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { MascostasService } from 'src/app/servicios/mascostas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-card-mascota',
  templateUrl: './card-mascota.component.html',
  styleUrls: ['./card-mascota.component.scss'],
})
export class CardMascotaComponent implements OnInit, OnDestroy {
  
  @Input() mascota: string;
  mascotaActual: Mascota;
  mascotaSub: Subscription;
  isLoading = false;

  constructor(private mascotaService: MascostasService, private route: ActivatedRoute,
    private router: Router ,private navCtrl: NavController, private alertCtrl: AlertController) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has(this.mascota)){
        this.navCtrl.navigateBack('/adoptame/app/home');
        return;
      }
      this.isLoading = true;
      this.mascotaSub = this.mascotaService.getMascota(paramMap.get(this.mascota)).subscribe(mascota => {
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
