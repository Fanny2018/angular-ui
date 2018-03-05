import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ui-modal',
    templateUrl: './modal.html'
})
export class ModalComponent {
    @Input()
    set isShow(value: boolean) {
        if (value) {
            setTimeout(() => {
                document.body.style.overflowY = 'hidden';
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
    title: string = '系统提示';
    @Input()
    size?: string = 'lg';
    @Input()
    position: string = '';
    @Input()
    isShowTitle?: boolean = true;
    @Input()
    isShowToolbar?: boolean = true;
    @Input()
    isShowScroll?: boolean = false;
    @Output()
    onClose = new EventEmitter();
    inout: boolean = false;

    private _isShow: boolean;
}