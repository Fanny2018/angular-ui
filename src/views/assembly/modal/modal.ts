import { Component } from '@angular/core';
import { ConfirmController, ConfirmConfig } from '../../../modules/ui-components/services/confirm-controller.service';

@Component({
    templateUrl: './modal.html'
})
export class ModelComponent {
    isShowDialog: boolean = false;

    constructor(private confirmController: ConfirmController) {
    }

    modelTop() {
        this.isShowDialog = true;
    }

    showTop() {
        let config: ConfirmConfig = {
            title: '系统提示',
            content: '来通知啦！',
            size: 'sm',
            position: 'top'
        };
        this.confirmController.show(config).then(() => {
            console.log('确定');
        }, () => {
            console.log('取消');
        });
    }

    showRight() {
        let config: ConfirmConfig = {
            title: '系统提示',
            content: '来通知啦！',
            size: 'sm',
            position: 'right'
        };
        this.confirmController.show(config).then(() => {
            console.log('确定');
        }, () => {
            console.log('取消');
        });
    }

    showLeft() {
        let config: ConfirmConfig = {
            title: '系统提示',
            content: '来通知啦！',
            size: 'sm',
            position: 'left'
        };
        this.confirmController.show(config).then(() => {
            console.log('确定');
        }, () => {
            console.log('取消');
        });
    }

    showBottom() {
        let config: ConfirmConfig = {
            title: '系统提示',
            content: '来通知啦！',
            size: 'sm',
            position: 'bottom'
        };
        this.confirmController.show(config).then(() => {
            console.log('确定');
        }, () => {
            console.log('取消');
        });
    }

    showMiddle() {
        let config: ConfirmConfig = {
            title: '系统提示',
            content: '来通知啦！',
            size: 'sm',
            position: 'top'
        };
        this.confirmController.show(config).then(() => {
            console.log('确定');
        }, () => {
            console.log('取消');
        });
    }

    showLg() {
        let config: ConfirmConfig = {
            title: '系统提示',
            content: '来通知啦！',
            size: 'lg',
            position: 'top'
        };
        this.confirmController.show(config).then(() => {
            console.log('确定');
        }, () => {
            console.log('取消');
        });
    }

    showSm() {
        let config: ConfirmConfig = {
            title: '系统提示',
            content: '来通知啦！',
            size: 'sm',
            position: 'top'
        };
        this.confirmController.show(config).then(() => {
            console.log('确定');
        }, () => {
            console.log('取消');
        });
    }

    showMd() {
        let config: ConfirmConfig = {
            title: '系统提示',
            content: '来通知啦！',
            size: 'md',
            position: 'top'
        };
        this.confirmController.show(config).then(() => {
            console.log('确定');
        }, () => {
            console.log('取消');
        });
    }
}