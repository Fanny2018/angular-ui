import { Component } from '@angular/core';

@Component({
    templateUrl: 'nav.html',
    styleUrls: ['../data-count.scss']
})
export class NavComponent {
    type = 1;
    openState = [true, false, false, false, false, false];

    changeOpenState(index: number) {
        for (let i = 0; i < this.openState.length; i++) {
            if (i === index) {
                this.openState[index] = !this.openState[index];
            } else {
                this.openState[i] = false;
            }
        }
    }
}