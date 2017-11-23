import { Component } from '@angular/core';

@Component({
    templateUrl: './buttons.html',
    styleUrls: ['../data-count.scss', './buttons.scss']
})
export class ButtonsComponent {
    isLoading: boolean = false;
    selectValue: string = '1';
    pages = 10;
    currentPage4 = 4;

    loadData() {
        this.isLoading = true;
        setTimeout(() => {
            this.isLoading = false;
        }, 1000);
    }
}