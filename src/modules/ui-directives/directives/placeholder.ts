import { Directive, Input, ElementRef, OnInit, OnChanges } from '@angular/core';
import { isIE9 } from '../../../utils/test-browser';
@Directive({
    selector: '[placeholder]'
})
export class PlaceholderDirective implements OnInit, OnChanges {
    @Input()
    placeholder: string = '';

    private textContainer: HTMLElement;

    ngOnChanges() {
        if (!isIE9) {
            this.elementRef.nativeElement['placeholder'] = this.placeholder;
        } else {
            this.textContainer.innerText = this.placeholder;
        }
    }

    constructor(private elementRef: ElementRef) {
    }

    ngOnInit() {
        if (!isIE9) {
            this.elementRef.nativeElement['placeholder'] = this.placeholder;
            return;
        }
        let element = this.elementRef.nativeElement;

        let promise = new Promise(resolve => {
            let i = 0;

            function getStyles() {
                if (i > 40) {
                    return;
                }
                let width = element.offsetWidth;
                let height = element.offsetHeight;
                let left = element.offsetLeft;
                let top = element.offsetTop;

                if (!width || !height) {
                    i++;
                    setTimeout(getStyles, 30);
                    return;
                }
                resolve({
                    width,
                    height,
                    left,
                    top
                });
            }

            getStyles();
        });

        promise.then((elementStyles: any) => {
            let span = document.createElement('span');
            this.textContainer = span;
            span.innerText = this.placeholder;

            let width = 'width:' + elementStyles.width + 'px';
            let height = 'height:' + elementStyles.height + 'px';
            let top = 'top:' + elementStyles.top + 'px';
            let left = 'left:' + elementStyles.left + 'px';

            let styles = getComputedStyle(element);
            span.style.cssText = [width,
                height,
                top,
                left,
                'color: #ccc; position: absolute; z-index: 1',
                // 'padding-top:' + styles['padding-top'],
                // 'padding-right:' + styles['padding-right'],
                // 'padding-bottom:' + styles['padding-bottom'],
                'padding-left:' + styles['padding-left'],
                'line-height:' + element.offsetHeight + 'px',
                'box-sizing: border-box',
                'background-color:#fff'
            ].join(';');
            element.parentNode.insertBefore(span, element);

            let styleElement = document.createElement('style');
            styleElement.innerHTML = `  input[placeholder][readonly] { background: none!important; }
            input[placeholder][ng-reflect-model] { background-color: #fff!important;}
            input[placeholder][ng-reflect-model=""] { background-color: none!important;}
            input[placeholder][readonly][ng-reflect-model] { background-color: #fff!important;}`;
            document.head.appendChild(styleElement);

            if (styles.position === 'static') {
                element.style.position = 'relative';
                element.style.zIndex = 2;
            }
            let self = this;

            function setStyle() {
                span.innerHTML = element.value ? '' : self.placeholder;
                element.style.background = element.value ? '#fff' : 'none';
            }

            setStyle();

            element.addEventListener('input', setStyle, false);
            element.addEventListener('change', setStyle, false);
            // element.addEventListener('blur', setStyle, false);
            element.addEventListener('keyup', setStyle, false);
        });
    }
}