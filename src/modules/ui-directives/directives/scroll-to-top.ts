import { Directive, ElementRef, OnInit } from '@angular/core';
@Directive({
    selector: '[scrollToTop]'
})
export class ScrollToTopDirective implements OnInit {

    constructor(private el: ElementRef) {
    }

    ngOnInit() {
        this.el.nativeElement.addEventListener('click', () => {
            window.scrollTo(0, 0);
        });
    }
}
