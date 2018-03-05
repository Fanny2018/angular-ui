import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'scroll-modal',
    templateUrl: './scroll-modal.component.html'
})
export class ScrollModalComponent {
    @Input()
    set isShow(value: boolean) {
        if (value) {
            setTimeout(() => {
                this._isShow = value;
            }, 500);
            setTimeout(() => {
                this.inout = this._isShow;
            });
        } else {
            document.body.style.overflowY = 'scroll';
            this.inout = value;
            setTimeout(() => {
                this._isShow = this.inout;
            }, 300);
        }
    }

    get isShow() {
        return this._isShow;
    }

    @Input()
    size?: string = 'lg';
    @Input()
    position: string = '';
    @Input()
    isShowToolbar?: boolean = true;
    @Output()
    onClose = new EventEmitter();
    inout: boolean = false;

    private _isShow: boolean;
}