import { Component, Input, HostListener, Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'tool-tip',
    templateUrl: 'tool-tip.html',
    styleUrls: ['tool-tip.scss']
})

export class ToolTipComponent {
    @Input()
    placement: string = 'bottom';

    @Input()
    isShow: boolean = false;

    @Output()
    trigger = new EventEmitter<any>();

    mouseOver() {
        this.isShow = true;
    }

    mouseOut() {
        this.isShow = false;
    }

    @HostListener('click') click() {
        this.isShow = !this.isShow;
        this.trigger.emit();
    }
}