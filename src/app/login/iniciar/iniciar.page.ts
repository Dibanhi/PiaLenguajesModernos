import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "../../servicios/login.service";
import { Subscription } from 'rxjs';
import { Registrar } from 'src/app/login/registrar/registrar.model';

@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.page.html',
  styleUrls: ['./iniciar.page.scss'],
})
export class IniciarPage implements OnInit, OnDestroy {
  iniciar: FormGroup;
  url: string;
  usuariosCargados: Registrar[];
  private usuariosSub: Subscription;
  isLoading = false;

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    this.usuariosSub = this.loginService.usuarios.subscribe(users => {
      this.usuariosCargados = users;
    });
    this.iniciar = new FormGroup({
      email: new FormControl(null, {
        updateOn: 'blur', validators: [Validators.required, Validators.email]
      }),
      contraseña: new FormControl(null, {
        updateOn: 'blur', validators: [Validators.required]
      })
    });
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

  login(){
    console.log('LOGIN',this.iniciar);
    for (let i in this.usuariosCargados) {
      console.log(i);
      if(this.usuariosCargados[i].email === this.iniciar.value.email){
        if(this.usuariosCargados[i].contraseña === this.iniciar.value.contraseña){
          this.loginService.login();
          this.loginService.userActual = this.usuariosCargados[i].firebaseId;
        }
      }
    }
  }

}
