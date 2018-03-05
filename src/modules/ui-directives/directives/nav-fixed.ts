import { Directive, OnInit, ElementRef, Input } from '@angular/core';
import { addClass, removeClass } from '../../../utils/class-name';

@Directive({
    selector: '[navFixed]'
})
export class NavFixedDirective implements OnInit {
    @Input()
    navFixed: string;

    constructor(private el: ElementRef) {
    }

    ngOnInit() {
        const element = this.el.nativeElement;
        const id = this.navFixed;
        const navElement = document.getElementById(id);
        // const targetAbsHeight = element.offsetTop;
        // const navHeight = navElement.offsetHeight;
        document.addEventListener('scroll', scrollFunc, false);
        function scrollFunc() {
            const body = document.documentElement.scrollTop ? document.documentElement : document.body;
            const currentScrollTop = body.scrollTop;
            const endScrollTop = 256 - currentScrollTop;
            if (endScrollTop < 0) {
                addClass(element, 'risk-filter-fixed');
                addClass(navElement, 'fixed-top');
                removeClass(navElement, 'hide');
                removeClass(element, 'hide');
            } else {
                removeClass(element, 'risk-filter-fixed');
                removeClass(navElement, 'fixed-top');
                addClass(navElement, 'hide');
                addClass(element, 'hide');
            }
        }
    }
}