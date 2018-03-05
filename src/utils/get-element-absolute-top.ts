export function getAbsoluteHeight(el: any): number {
    let height = 0;
    while (el) {
        height += el.offsetTop;
        el = el.offsetParent;
    }
    return height;
}