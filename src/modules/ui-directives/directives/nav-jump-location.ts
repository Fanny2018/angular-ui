import { Directive, OnInit, Input, ElementRef } from '@angular/core';
import { getAbsoluteHeight } from '../../../utils/get-element-absolute-top';

@Directive({
    selector: '[navJumpLocation]'
})

export class NavJumpLocationDirective implements OnInit {
    @Input()
    navJumpLocation: string;

    navFixedElement: HTMLElement;

    constructor(private el: ElementRef) {
    }

    ngOnInit() {
        const id = this.navJumpLocation;
        const element = this.el.nativeElement;
        const targetElement = document.getElementById(id);
        if (!targetElement) {
            return;
        }
        element.addEventListener('click', function () {
            const targetAbsHeight = getAbsoluteHeight(targetElement);
            const body = document.documentElement.scrollTop
                ? document.documentElement : document.body;
            const currentScrollTop = body.scrollTop;
            let distance = currentScrollTop - targetAbsHeight + 104;
            body.scrollTop = currentScrollTop - distance;
            document.documentElement.scrollTop = currentScrollTop - distance;
        });
    }
}
