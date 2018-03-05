import {
    Component,
    HostListener,
    EventEmitter,
    Output,
    HostBinding,
    Input,
    ElementRef,
    OnInit
} from '@angular/core';

@Component({
    selector: 'drag-tag',
    templateUrl: './drag-tag.html',
    styleUrls: ['./drag-tag.scss']
})

export class DragTagComponent implements OnInit {
    @Input()
    type: string = '';
    @Input()
    disabled: boolean = false;
    @Input()
    editable: boolean = false;
    @Input()
    text: string = '';
    @Input()
    checked: boolean = false;
    @Output()
    dragStart = new EventEmitter<any>();
    @Output()
    dragMove = new EventEmitter<any>();
    @Output()
    dragEnd = new EventEmitter<any>();
    @Output()
    change = new EventEmitter<boolean>();

    isShow: boolean = false;
    element: HTMLElement;
    @HostBinding('class.transition')
    transition: boolean = true;

    @HostBinding('class.lg')
    get isLg() {
        return this.text.length > 8;
    }

    constructor(private elementRef: ElementRef) {
    }

    ngOnInit() {
        this.element = this.elementRef.nativeElement;
    }

    @HostListener('click') click() {
        if (this.editable || this.disabled) return;
        this.change.emit(!this.checked);
    }

    move(ev: any) {
        if (!this.editable) return;

        this.transition = false;
        let self = this;

        let oldX = ev.clientX;
        let oldY = ev.clientY;
        this.dragStart.emit({
            component: this
        });
        function move(ev: any) {
            let distanceX = ev.clientX - oldX;
            let distanceY = ev.clientY - oldY;
            self.dragMove.emit({
                distanceX,
                distanceY,
                component: self
            });
        }

        function up(ev: any) {
            document.removeEventListener('mousemove', move);
            document.removeEventListener('mouseup', up);
            self.transition = true;
            self.dragEnd.emit({
                distanceX: ev.clientX,
                distanceY: ev.clientY,
                component: self
            });
        }

        document.addEventListener('mousemove', move);
        document.addEventListener('mouseup', up);
    }
}