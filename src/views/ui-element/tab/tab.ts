import { Component } from '@angular/core';

@Component({
    templateUrl: 'tab.html',
    styleUrls: ['../data-count.scss']
})
export class TabComponent {
    type = 1;
    openClose: boolean = true;

    changeType(type: number) {
        this.type = type;
        this.openClose = true;
    }

    open() {
        this.openClose = !this.openClose;
    }
}