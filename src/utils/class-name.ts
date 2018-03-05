function deleteEmpty(str: string) {
    return str.replace(/(^\s+)|(\s+$)/g, '').replace(/\s+/, ' ');
}

function createReg(className: string, modifier?: string) {
    return new RegExp('(^|\\s)' + className + '(\\s|$)', modifier);
}

export function addClass(element: HTMLElement, className: string) {
    let name = element.className;
    if (!createReg(className).test(name)) {
        element.className = deleteEmpty(name + ' ' + className);
    }
}

export function removeClass(element: HTMLElement, className: string) {
    let name = element.className;
    element.className = deleteEmpty(name.replace(createReg(className, 'g'), ' '));
}