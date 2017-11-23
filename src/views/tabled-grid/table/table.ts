import { Component } from '@angular/core';

@Component({
    templateUrl: './table.html',
    styleUrls: ['./table.scss']
})
export class TableComponent {
    value: string = '1';
    checkbox1: boolean = false;
}