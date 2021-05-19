import { Iniciar } from './../login/iniciar/iniciar.model';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { BehaviorSubject, of, Subscription } from "rxjs";
import { Registrar } from '../login/registrar/registrar.model';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { LugarUbicacion } from '../ubicacion/ubicacion.model';
import { HttpClient } from "@angular/common/http";
import { environment } from "./../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _usuarios = new BehaviorSubject<Registrar[]>([]);
  usuario_resgistrado: any = false; 
  userActual: string;
  userSub: Subscription;
  usuarioActual: Registrar;

  constructor( private AFauth: AngularFireAuth, private router: Router, private http: HttpClient) {  } 
  
  get usuarios(){
    return this._usuarios.asObservable();
}

  login(){
    this.usuario_resgistrado = true;
    this.router.navigate(['/adoptame/app/home']);
  }

  logout(){
    this.AFauth.signOut();
    this.usuario_resgistrado = false;
    this.router.navigate(['/login']);
  }

  registrar(userimage: string,username: string, email: string, password: string,  tipo: string, ubicacion: LugarUbicacion){
    const newUser = new Registrar(userimage,username, email, password, tipo, ubicacion, '')
    this.http.post<any>(environment.firebaseConfig.databaseURL + '/usuarios.json', {...newUser}).subscribe(data => {
      console.log(data);
      return this._usuarios.pipe(take(1)).subscribe(users => {
        this._usuarios.next(users.concat(newUser));
      });
    });
    this.usuario_resgistrado = true;
  }

  fetchUsers(){
    return this.http.get<{[key: string]: Registrar}>(environment.firebaseConfig.databaseURL+'/usuarios.json')
    .pipe(map(dta => {
      const users = [];
      for(const key in dta){
        if(dta.hasOwnProperty(key)){
          users.push(
            //dta
            new Registrar(dta[key].imageUrl, dta[key].username, dta[key].email, dta[key].contraseña, dta[key].tipo, dta[key].ubicacion, key)
          )
        }
      }
      return users;
    }),
    tap(users => {
      this._usuarios.next(users)
    }))
  }

  getUser(firebaseId: string){
    return  this.http.get<Registrar>(environment.firebaseConfig.databaseURL+`/${firebaseId}.json`)
    .pipe(map(data => {
     return new Registrar(data.imageUrl, data.username, data.email, data.contraseña,data.tipo, data.ubicacion, firebaseId);
   }));
  }

  updateLugar(lugarId: string, ubicacion: LugarUbicacion){
    let nuevosUsuarios: Registrar[];
    return this.usuarios.pipe(take(1), 
    switchMap(users => {
      if(users || users.length <= 0){
        return this.fetchUsers();
      }
      else{
        return of(users);
      }
    }),
    switchMap(users => {
      const index = users.findIndex(lu => lu.firebaseId === lugarId);
      nuevosUsuarios = [...users];
      const old = nuevosUsuarios[index];
      nuevosUsuarios[index] = new Registrar(old.imageUrl, old.username, old.email, old.contraseña, old.tipo, ubicacion, '');
      return this.http.put(environment.firebaseConfig.databaseURL + `/usuarios/${lugarId}.json`, {...nuevosUsuarios[index]});
    }), tap(() => {
      this._usuarios.next(nuevosUsuarios);
    })
    );
  }  
}
