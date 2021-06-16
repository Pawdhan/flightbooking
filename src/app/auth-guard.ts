import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { Globals } from './Globals';

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private router: Router, private global: Globals) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  boolean | Observable<boolean> | Promise<boolean> {
    if((this.global.role =='' || this.global.role ==null) && (!this.global.validated || this.global.validated==null)) {
        this.router.navigate(['/']);
        return false;
    } else {
        return true;
    }
}

}
