import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'indentify'
})
export class IndentifyPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    return null;
  }

}
