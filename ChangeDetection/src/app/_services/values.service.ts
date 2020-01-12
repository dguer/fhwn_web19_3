import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {ChangeService} from './change.service';


@Injectable({
  providedIn: 'root'
})
export class ValuesService implements CanActivate {
  canActivate(route: import('@angular/router').ActivatedRouteSnapshot, state: import('@angular/router').RouterStateSnapshot): boolean | import('@angular/router').UrlTree | import('rxjs').Observable<boolean | import('@angular/router').UrlTree> | Promise<boolean | import('@angular/router').UrlTree> {
    this.service.elementSelect = localStorage.getItem('element');
    this.service.website =  localStorage.getItem('website');

    if (this.service.website !== null) {
      return true;
    }

    return this.router.parseUrl('/');
  }

  constructor(private service: ChangeService, private router: Router) { }
}
