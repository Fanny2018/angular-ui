import { Component, Input } from '@angular/core';

@Component({
    selector: 'exception-note',
    templateUrl: 'exception-note.html',
    styleUrls: ['exception-note.scss']
})

export class ExceptionNoteComponent {
    @Input()
    exceptionType: string = '';

    @Input()
    isShow: boolean = false;

    @Input()
    placement: string = 'center';

    @Input()
    message: string;
}