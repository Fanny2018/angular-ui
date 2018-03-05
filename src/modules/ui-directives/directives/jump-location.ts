import { Directive, OnInit, Input, ElementRef } from '@angular/core';
import { getAbsoluteHeight } from '../../../utils/get-element-absolute-top';

@Directive({
    selector: '[jumpLocation]'
})

export class JumpLocationDirective implements OnInit {
    @Input()
    jumpLocation: string;

    navFixedElement: HTMLElement;

    constructor(private el: ElementRef) {
    }

    ngOnInit() {
        const id = this.jumpLocation;
        const element = this.el.nativeElement;
        // let timer = null;
        const targetElement = document.getElementById(id);

        if (!targetElement) {
            return;
        }

        element.addEventListener('click', function () {
            this.navFixedElement = document.querySelector('.nav-fixed');
            this.navMenuFixedElement = document.querySelector('.nav-menu-fixed');
            // clearInterval(timer);

            const navFixedHeight = this.navFixedElement.offsetHeight || 0;
            const navMenuFixedHeight = this.navMenuFixedElement.offsetHeight || 0;
            const targetAbsHeight = getAbsoluteHeight(targetElement) - navFixedHeight - navMenuFixedHeight;

            const body = document.documentElement.scrollTop
                ? document.documentElement : document.body;
            const currentScrollTop = body.scrollTop;
            let distance = currentScrollTop - targetAbsHeight;
            body.scrollTop = currentScrollTop - distance;
            document.documentElement.scrollTop = currentScrollTop - distance;
            // let timer;
            // const count = 50;
            // let n = 0;
            // let a: number;
            // timer = setInterval(function () {
            //     n++;
            //     a = 1 - n / count;
            //     body.scrollTop = currentScrollTop - distance * (1 - a * a * a);
            //     if (n === count) {
            //         clearInterval(timer);
            //     }
            // }, 20);
        });
    }
}
