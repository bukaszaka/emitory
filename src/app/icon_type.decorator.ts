import { Emitter, IconType } from './emitter';

export function MyEnumAware(constructor: Function) {
    constructor.prototype.IconType = IconType;
}