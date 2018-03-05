import { Directive, OnInit, ElementRef, Input, ViewChild } from '@angular/core';
import { getAbsoluteHeight } from '../../../utils/get-element-absolute-top';
import { addClass, removeClass } from '../../../utils/class-name';

@Directive({
    selector: '[navHover]'
})
export class NavHoverDirective implements OnInit {
    @Input()
    navHover: string;

    constructor(private el: ElementRef) {
    }

    ngOnInit() {
        const element = this.el.nativeElement;
        const id = this.navHover;
        const navElement = document.getElementById(id);
        if (!navElement) {
            return;
        }
        document.addEventListener('scroll', scrollFunc, false);
        function scrollFunc() {
            const navArray = document.getElementsByName('nav');
            let n = 0;
            let navTop = getAbsoluteHeight(element) - 110;
            const currentScrollTop = (document.documentElement.scrollTop
                ? document.documentElement :
                document.body).scrollTop;
            let top = currentScrollTop - navTop;
            if (top > 0) {
                for (let i = 0; i < navArray.length; i++) {
                    removeClass(navArray[i], 'active');
                }
                addClass(navElement, 'active');
            }
        }
    }
}