import { Emitter } from './emitter';

export class EmitterSpot {
    constructor(public emitter: Emitter,
        public longitude: number,
        public latitude: number) {}
}