import { environment } from './../../environments/environment';
import { BehaviorSubject, of} from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Injectable} from '@angular/core';
import { take, map, tap } from "rxjs/operators";
import { LugarUbicacion } from "./../ubicacion/ubicacion.model";
import { Mascota} from "../adoptame/home/mascota/mascota.model";

@Injectable({
  providedIn: 'root'
})
export class MascostasService {

  private _mascotas = new BehaviorSubject<Mascota[]>([]);

  get mascotas(){
    return this._mascotas.asObservable();
  }

  fetchMascotas(){
    return this.http.get<{[key: string]: Mascota}>(environment.firebaseConfig.databaseURL + '/mascotas.json')
    .pipe(map(dta => {
      const mascotas = [];
      for(const key in dta){
        if(dta.hasOwnProperty(key)){
          mascotas.push(
            //dta
            new Mascota(dta[key].mascotaUrl, dta[key].nombreMascota, dta[key].descripcion, dta[key].tipoMascota, dta[key].motivo,
              dta[key].nombre, dta[key].email, dta[key].telefono, dta[key].celular, dta[key].web,
              dta[key].ubicacion, key, dta[key].publicador)
          )
        }
      }
      return mascotas;
    }),
    tap(mascotas => {
      this._mascotas.next(mascotas)
    }))
  }

  constructor(private http: HttpClient) { }

  getMascota(firebaseId: string){
    const url = environment.firebaseConfig.databaseURL + `/mascotas/${firebaseId}.json`;
    console.log(url);
    return this.http.get<Mascota>(environment.firebaseConfig.databaseURL + `/mascotas/${firebaseId}.json`)
    .pipe(map(dta => {
      return new Mascota(dta.mascotaUrl, dta.nombreMascota, dta.descripcion, dta.tipoMascota, dta.motivo,
        dta.nombre, dta.email, dta.telefono, dta.celular, dta.web,
        dta.ubicacion, firebaseId, dta.publicador);
    }));
  }

  addMascota( mascotaUrl: string,  nombreMascota: string,  descripcion: string,  tipoMascota: string,  motivo: string,
     nombre: string,  email: string,  telefono: string,  celular: string,  web: string,
     ubicacion: LugarUbicacion, publicador: string){
    const newMascota = new Mascota(mascotaUrl,  nombreMascota,  descripcion,  tipoMascota,  motivo,
      nombre,  email,  telefono,  celular,  web, ubicacion,  '', publicador);
    this.http.post<any>(environment.firebaseConfig.databaseURL + '/mascotas.json', {...newMascota}).subscribe(data => {
      console.log(data);
      return this._mascotas.pipe(take(1)).subscribe(mascota => {
        this._mascotas.next(mascota.concat(newMascota));
      });
    });
  }
}
