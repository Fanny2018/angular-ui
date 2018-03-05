export function cubeDecodeUrl(value: string): string {
    if (typeof value !== 'string' || value === '') {
        return value;
    }
    let tempValue = '';
    let arr = value.split('%');
    for (let i = 1; i < arr.length; i++) {
        tempValue += String.fromCharCode(parseInt(arr[i], 16));
    }
    return tempValue;
}