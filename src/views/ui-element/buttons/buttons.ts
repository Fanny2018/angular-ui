import { Component } from '@angular/core';

@Component({
    templateUrl: './buttons.html',
    styleUrls: ['../data-count.scss', './buttons.scss']
})
export class ButtonsComponent {
    isLoading: boolean = false;
    selectValue: string = '1';
    pages: number = 10;
    currentPage4: number = 4;
    currentPage6: number = 4;
    currentPage8: number = 4;
    currentPage: number = 4;

    loadData() {
        this.isLoading = true;
        setTimeout(() => {
            this.isLoading = false;
        }, 1000);
    }

    toPage(number: any) {
        console.log(number);
    }
}