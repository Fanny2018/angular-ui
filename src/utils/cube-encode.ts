export function cubeEncodeUrl(value: string): string {
    if (typeof value !== 'string' || value === '') {
        return value;
    }
    let tempValue = '';
    for (let i = 0; i < value.length; i++) {
        if (value === '') {
            tempValue = value.charCodeAt(i).toString(16);
        } else {
            tempValue += '%' + value.charCodeAt(i).toString(16);
        }
    }
    return tempValue;
}