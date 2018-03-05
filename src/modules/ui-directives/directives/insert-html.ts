import { Directive, Input, ElementRef } from '@angular/core';
@Directive({
    selector: '[insertHtml]'
})
export class InsertHtmlDirective {
    @Input()
    set insertHtml(value: string) {
        let element = this.elementRef.nativeElement;
        element.innerHTML = value || '';
    }

    constructor(private elementRef: ElementRef) {
    }
}