import { Injectable } from '@angular/core';
import {  Router, Route, UrlSegment, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from "../servicios/login.service";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanLoad {
  
  constructor(private loginService: LoginService, private router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean  {
    if(this.loginService.usuario_resgistrado){
      return true;
    }
    console.log('accesso denegado a adoptame');
    this.router.navigate(['/login/iniciar']);
    return false;
  }
  
}
