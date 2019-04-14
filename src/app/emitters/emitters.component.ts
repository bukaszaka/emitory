import { Scheme } from './../scheme';
import { EmitterSpot } from './../emitter_spot';
import { Component, OnInit } from '@angular/core';
import { Emitter, IconType } from '../emitter';
import { EmitterService } from '../emitter.service';
import { SchemeService } from '../scheme.service';
import { MyEnumAware } from '../icon_type.decorator';

@Component({
  selector: 'app-emitters',
  templateUrl: './emitters.component.html',
  styleUrls: ['./emitters.component.css']
})

@MyEnumAware
export class EmittersComponent implements OnInit {
  
  emitters: Emitter [];
  emittersInSchemes: Set<Emitter>;
  
  getEmitters(): void {
    this.emitterService.getEmitters().subscribe(e=>this.emitters=e)
  }
  constructor(private emitterService:EmitterService, private schemeService: SchemeService) { }

  ngOnInit() {
    this.getEmitters();
    this.emittersInSchemes = new Set();
    let schemes : Scheme[];
    this.schemeService.getSchemes().subscribe(s=>schemes=s)
    schemes.forEach(s => { s.emitterSpots.forEach(eS=>this.emittersInSchemes.add(eS.emitter))      
    });
    console.log(this.emitters)

    this.emitters.forEach(e=>this.emittersInSchemes.has(e)? console.log(e.name) : console.log("not"));
 
  }
  
  delete(emitter: Emitter):void {
    this.emitterService.deleteEmitter(emitter).subscribe();
    this.getEmitters();
  }
  add(emitterName: string, emitterHeight: number, emitterPower:number, emitterIcon: IconType): void {
    let emitter = new Emitter(this.emitters.length+1, emitterName, + emitterHeight, + emitterPower, emitterIcon);
    this.emitterService.addEmitter(emitter).subscribe();
    console.log(emitter);

  }

  get diagnostic() { return JSON.stringify(this.emitters); }


}
