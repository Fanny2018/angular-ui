import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'oldName'
})
export class OldNamePipe implements PipeTransform {
    transform(value: string = '', keyWord: string = ''): string {
        if (typeof value === 'string') {
            let arr = value.split(/,|，/g);
            let newArr: Array<any> = [];
            arr.forEach(item => {
                if (item.indexOf(keyWord) !== -1) {
                    newArr.push(item);
                }
            });
            return newArr.join('，');
        }
        return value;
    }
}