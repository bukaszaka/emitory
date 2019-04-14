import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Emitter } from './emitter';
import { STARTER_PACK } from './starter_emitters';

@Injectable({
  providedIn: 'root'
})
export class EmitterService {
  emitters: Emitter[]=STARTER_PACK;

  getEmitters(): Observable<Emitter[]> {
    return of(this.emitters)
  }
  deleteEmitter(emitter: Emitter): Observable<Emitter> {
    this.emitters = this.emitters.filter(e=>e!==emitter);
    return of(emitter)
  }
  addEmitter (emitter: Emitter): Observable<Emitter> {
    this.emitters.push(emitter);
    return of(emitter)
  }

  constructor() { }
}
