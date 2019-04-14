import { EmitterService } from './../emitter.service';
import { Scheme } from './../scheme';
import { Emitter } from './../emitter';
import { Component, OnInit } from '@angular/core';
import { SchemeService } from '../scheme.service';
import { EmitterSpot } from '../emitter_spot';

@Component({
  selector: 'app-influence',
  templateUrl: './influence.component.html',
  styleUrls: ['./influence.component.css']
})
export class InfluenceComponent implements OnInit {

  schemes: Scheme[];
  emitters: Emitter [];
  influenceCalculated: boolean;
  spotsInfluence: [Emitter, number] [];
  schemeInfluence: number;

  constructor(private emitterService:EmitterService, private schemeService:SchemeService) { }

  getEmitters(): void {
    this.emitterService.getEmitters().subscribe(e=>this.emitters=e)
  }
  getSchemes(): void {
    this.schemeService.getSchemes().subscribe(s=>this.schemes=s)
  }
  ngOnInit() {
    this.getEmitters();
    this.getSchemes();
    this.influenceCalculated = false;
    this.spotsInfluence = [];
  }
  calculateSpotInfluence(spot:EmitterSpot, x:number, y:number): number {
    let distance = Math.sqrt(Math.pow((spot.longitude - x), 2) + Math.pow((spot.latitude - y), 2));
  return distance==0? spot.emitter.power : spot.emitter.power/distance;
  }

  calculateIndividualSpotsInfluencesAtPoint (scheme: Scheme, x:number, y:number){
    this.spotsInfluence=[];
    for (let spot of scheme.emitterSpots) {
      this.spotsInfluence.push([spot.emitter, this.calculateSpotInfluence(spot, x, y)]);  
    }
    this.spotsInfluence.sort((a,b) => a[1] < b[1] ? 1 : (a[1] > b[1] ? - 1 : 0))
    this.schemeInfluence=0;
    for (let inf in this.spotsInfluence){
      this.schemeInfluence = + inf[1]
    }
    this.influenceCalculated = true;
  }
  

  

}
