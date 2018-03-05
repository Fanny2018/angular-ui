import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

    transform(value: any, formatString: string): string {
        return dateFormat(value, formatString);
    }
}

export function dateFormat(value: any, formatString: string = 'yyyy-MM-dd'): string {
    if (value === null || value === undefined || value === '') {
        return '';
    }
    if (typeof value !== 'number') {
        return value;
    }
    function toDouble(n: number): string {
        return n < 10 ? '0' + n : '' + n;
    }

    const date = new Date();
    date.setTime(value);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return formatString.replace(/[yMdhms]+/g, (str: string): string => {
        switch (str) {
            case 'yy':
                return toDouble(year % 100);
            case 'yyyy':
                return year + '';
            case 'M':
                return month + '';
            case 'MM':
                return toDouble(month);
            case 'd':
                return day + '';
            case 'dd':
                return toDouble(day);
            case 'h':
                return hours + '';
            case 'hh':
                return toDouble(hours);
            case 'm':
                return minutes + '';
            case 'mm':
                return toDouble(minutes);
            case 's':
                return seconds + '';
            case 'ss':
                return toDouble(seconds);
            default:
                return str;
        }
    });
}