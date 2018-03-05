import { Directive, HostListener } from '@angular/core';
@Directive({
    selector: '[historyBack]'
})
export class HistoryBackDirective {
    @HostListener('click')
    onClick() {
        history.back();
    }
}
