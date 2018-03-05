import { Component, Input } from '@angular/core';
@Component({
    selector: 'tag-tip',
    templateUrl: 'tag-tip.html',
    styleUrls: ['tag-tip.scss']
})

export class TagTipComponent {
    @Input()
    placement: string = 'bottom';

    @Input()
    isShow: boolean = false;

    mouseOver() {
        this.isShow = true;
    }

    mouseOut() {
        this.isShow = false;
    }
}