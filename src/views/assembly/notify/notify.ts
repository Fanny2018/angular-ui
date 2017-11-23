import { Component } from '@angular/core';
import {
    NotifyController,
    NotifyConfig,
    NotifyType,
    Position
} from '../../../modules/ui-components/services/notify-controller.service';

@Component({
    templateUrl: 'notify.html'
})
export class NotifyComponent {
    constructor(private notifyController: NotifyController) {
    }

    showWDefault() {
        let config: NotifyConfig = {
            content: '你提供的消息',
            autoHide: true, // 可选，是否自动隐藏
            type: NotifyType.Default, // 可选，显示风格
            position: Position.right,
            time: 1000 // 可选，停留时间，如果autoHide为false，则此项不生效
        };
        this.notifyController.push(config);
    }

    showInfo() {
        let config: NotifyConfig = {
            content: '你提供的你提供的消息你提供的消息你提供的消息你提供的消息你提供的消息消息',
            autoHide: false, // 可选，是否自动隐藏
            type: NotifyType.Info, // 可选，显示风格
            position: Position.top,
            time: 1000 // 可选，停留时间，如果autoHide为false，则此项不生效
        };
        this.notifyController.push(config);
    }

    showPrimary() {
        let config: NotifyConfig = {
            content: '你提供的消息',
            autoHide: true, // 可选，是否自动隐藏
            position: Position.left,
            type: NotifyType.Primary, // 可选，显示风格
            time: 1000 // 可选，停留时间，如果autoHide为false，则此项不生效
        };
        this.notifyController.push(config);
    }

    showSuccess() {
        let config: NotifyConfig = {
            content: '你提供的消息',
            autoHide: false, // 可选，是否自动隐藏
            position: Position.bottom,
            type: NotifyType.Success, // 可选，显示风格
            time: 1000 // 可选，停留时间，如果autoHide为false，则此项不生效
        };
        this.notifyController.push(config);
    }
}