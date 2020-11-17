import { Injectable } from '@angular/core';
import {LoginService} from './login.service';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginActivatedService implements CanActivate {

  constructor(private serviceLogin: LoginService,
              private route: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.serviceLogin.isLogin()){
      return false;
    }
    this.route.navigateByUrl('/students');
    return true;
  }
}
