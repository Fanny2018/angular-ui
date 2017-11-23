import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app.html',
    styleUrls: ['app.scss']
})
export class AppComponent {
    openState = [true, false, false, false, false, false];
    menuState: boolean = true;

    changeOpenState(index: number) {
        for (let i = 0; i < this.openState.length; i++) {
            if (i === index) {
                this.openState[index] = !this.openState[index];
            } else {
                this.openState[i] = false;
            }
        }
    }

    openMenu() {
        this.menuState = !this.menuState;
    }
}
