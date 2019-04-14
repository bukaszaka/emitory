import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'schemeName'})
export class SchemeNamePipe implements PipeTransform {
  transform(schemeNumber: number): string {
    return schemeNumber==0? "Schemat domyślny" : "Schemat nr "+ schemeNumber;
  }
}