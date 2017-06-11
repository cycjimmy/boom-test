import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'transformABCD'
})
export class TransformABCDPipe implements PipeTransform {

  transform(i: number | [number]): string {
    let result: string = '';

    let transABCD = (i: number): string => {
      switch (i) {
        case 0:
          return 'A';
        case 1:
          return 'B';
        case 2:
          return 'C';
        case 3:
          return 'D';
        default:
          return '';
      }
    };

    if (Array.isArray(i)) {
      i.forEach(num => {
        result += transABCD(num);
      })
    } else {
      result = transABCD(i);
    }

    return result;
  };

}
