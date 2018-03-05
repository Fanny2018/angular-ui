import { Component } from '@angular/core';
import { ConfirmController, ConfirmConfig } from '../../../modules/ui-components/services/confirm-controller.service';

@Component({
    templateUrl: './forms.html',
    styleUrls: ['../data-count.scss', './forms.scss']
})
export class FormsComponent {
    data: any = {
        account:''
    };
    checked: boolean = true;
    checkbox2: boolean = true;
    model: string = '';
    value: string = '1';

    constructor(private confirmController: ConfirmController) {
    }

    show() {
        let config: ConfirmConfig = {
            title: '系统提示',
            content: '来通知啦！',
            size: 'sm'
        };
        this.confirmController.show(config).then(() => {
            console.log('确定');
        }, () => {
            console.log('取消');
        });
    }

    submit() {
        console.log('账号登录');
    }
}