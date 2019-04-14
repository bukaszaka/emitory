import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'powerPoints'})
export class PowerPointsPipe implements PipeTransform {
  transform(value: number): string {
    return (Math.round(value*100)/100).toFixed(2)+" pp"
  }
}