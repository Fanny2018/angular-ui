import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'hotWordsFormat'
})
export class HotWordsFormatPipe implements PipeTransform {
    transform(value: string, keyWord: string): string {
        let keyArray;
        keyArray = keyWord.split('+');
        if (keyArray.length) {
            keyWord = keyArray[0].replace(/^\s*|\s*$/g, '');
        }
        if (value === undefined || value === null || value === '') {
            return;
        } else if (typeof keyWord !== 'string') {
            return value;
        }
        keyWord = keyWord.replace(/^\s+|\s+$/g, '').replace(/([()])/g, '\\$1');
        const reg = new RegExp('(' + keyWord + ')', 'g');
        return value.replace(reg, result => {
            return `<strong class="color-danger">${result}</strong>`;
        });
    }
}