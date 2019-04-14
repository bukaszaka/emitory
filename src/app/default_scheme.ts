import { STARTER_PACK } from './starter_emitters';
import { Scheme } from './scheme';

export const DEFAULT_SCHEME: Scheme [] = [
    {
        schemeNumber: 0,
        emitterSpots: [ {emitter: STARTER_PACK[0], longitude: 0, latitude: -50},
                        {emitter: STARTER_PACK[1], longitude: -50, latitude: 50},
                        {emitter: STARTER_PACK[2], longitude: 50, latitude: 50}]
    }
     
]