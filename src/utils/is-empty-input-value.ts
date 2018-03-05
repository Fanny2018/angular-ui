export function isEmptyInputValue(value: any): boolean {
    return value === null || value === undefined || typeof value === 'string' && value.length === 0;
}