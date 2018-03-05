import { Component } from '@angular/core';

@Component({
    templateUrl: 'tab.html',
    styleUrls: ['../data-count.scss']
})
export class TabComponent {
    type: number = 1;
    openClose: boolean = true;
    isShowOpen: boolean = true;
    isOpen: boolean = false;

    changeType(type: number) {
        this.type = type;
        this.openClose = true;
    }

    open() {
        this.openClose = !this.openClose;
    }
}