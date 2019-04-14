import { DEFAULT_SCHEME } from './../default_scheme';
import { SchemeService } from '../scheme.service';
import { EmitterSpot } from './../emitter_spot';
import { Component, OnInit } from '@angular/core';
import { Emitter } from '../emitter';
import { EmitterService } from '../emitter.service';
import { Scheme } from '../scheme';


@Component({
  selector: 'app-schemes',
  templateUrl: './schemes.component.html',
  styleUrls: ['./schemes.component.css']
})
export class SchemesComponent implements OnInit {

  schemes: Scheme[];
  emitters: Emitter [];
  emitterSpots: EmitterSpot[];

  constructor(private emitterService:EmitterService, private schemeService:SchemeService) { }
  
  getEmitters(): void {
    this.emitterService.getEmitters().subscribe(e=>this.emitters=e)
  }
  getSchemes(): void {
    this.schemeService.getSchemes().subscribe(s=>this.schemes=s)
  }
  ngOnInit() {
    this.getEmitters();
    this.emitterSpots = [];
    this.getSchemes();
    
  }

  addSpot(id:number, longitude:number, latitude:number) {
    let emitter = this.emitters.find(e=>e.id==id)
    let emitterSpot = new EmitterSpot(emitter, longitude, latitude)
    this.emitterSpots.push(emitterSpot);
  }
  
  delete(scheme: Scheme):void {
    this.schemeService.deleteScheme(scheme).subscribe();
    this.getSchemes();
  }
  add(): void{
    let schemeNumber = this.schemes.length>0 ? Math.max(...this.schemes.map(s=>s.schemeNumber))+1 : 1;
    let scheme = new Scheme(schemeNumber, this.emitterSpots);
    this.emitterSpots = [];
    this.schemeService.addScheme(scheme).subscribe();

  }

}
