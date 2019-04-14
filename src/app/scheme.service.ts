import { DEFAULT_SCHEME } from './default_scheme';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Scheme } from './scheme';


@Injectable({
  providedIn: 'root'
})
export class SchemeService {
  schemes: Scheme[] = DEFAULT_SCHEME;

  getSchemes(): Observable<Scheme[]> {
    return of(this.schemes)
  }
  deleteScheme(scheme: Scheme): Observable<Scheme> {
    this.schemes = this.schemes.filter(s=>s!==scheme);
    return of(scheme)
  }
  addScheme (scheme: Scheme): Observable<Scheme> {
    this.schemes.push(scheme);
    return of(scheme)
  }

  constructor() { }
}
