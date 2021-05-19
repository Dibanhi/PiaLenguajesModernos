import { Registrar } from 'src/app/login/registrar/registrar.model';
import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../servicios/login.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from 'rxjs';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
 
  usuarioActual: Registrar;
  usuarioSub: Subscription;
  isLoading = false;
  usuariosCargados: Registrar[];
  private usuariosSub: Subscription;

  constructor(private loginService: LoginService, private route: ActivatedRoute,
    private router: Router ,private navCtrl: NavController, private alertCtrl: AlertController) {}
  
    ngOnInit() {
      this.usuariosSub = this.loginService.usuarios.subscribe(users => {
        this.usuariosCargados = users;
      });
      for (let i in this.usuariosCargados) {
        console.log(i);
        if(this.usuariosCargados[i].firebaseId == this.loginService.userActual){
          this.usuarioActual = this.usuariosCargados[i];
        }
      }
    }
  
    ionViewWillEnter(){
      this.isLoading = true;
      this.loginService.fetchUsers().subscribe(() => {
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
  

  onLogout(){
    this.loginService.logout();
  }

}
