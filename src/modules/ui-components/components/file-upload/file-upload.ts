import { Component, ElementRef, EventEmitter, Output, Input } from '@angular/core';

import { isIE9 } from '../../../utils/test-browser';

@Component({
    selector: 'ui-upload',
    templateUrl: 'file-upload.html'
})
export class FileUploadComponent {
    @Input()
    isAutoUpload: boolean = true;
    @Input()
    accept: string = '';
    @Input()
    uploadType: string = 'file';
    @Input()
    ext: string = '';
    @Input()
    params: { [key: string]: any };
    @Input()
    filePath: string = '';
    @Output()
    onUpload = new EventEmitter<string>();
    @Output()
    onError = new EventEmitter<any>();
    @Output()
    onUploaded = new EventEmitter<any>();
    @Output()
    onValidate = new EventEmitter<any>();
    isFileLoading: boolean = false;

    private form: FormData;
    private fileElement: any;

    constructor(private el: ElementRef) {
    }

    onSelected() {
        this.fileElement = this.el.nativeElement.querySelector('input[type=file]');
        let fileName = '';
        if (isIE9) {
            fileName = this.fileElement.value;
        } else {
            fileName = this.fileElement.files[0].name;
        }
        const extInfo: Array<any> | null = fileName.match(/\w+$/);
        if (!extInfo) {
            return;
        }
        const ext: string = extInfo[0];
        if (this.ext) {
            let reg = new RegExp(`(${this.ext})$`, 'i');
            if (!reg.test(ext)) {
                this.onError.emit({
                    success: false,
                    message: '文件类型错误！只能是*.xls、*.xlsx',
                    data: ext
                });
                return;
            }
        }
        this.onUpload.emit(fileName);
        if (isIE9) {
            if (this.isAutoUpload) {
                // this.doUpload();
            }
        } else {
            this.form = new FormData();
            this.form.append('file', this.fileElement.files[0], fileName);
            if (this.isAutoUpload) {
                this.doUpload();
            }
        }
    }

    doUpload() {
        if (this.uploadType === 'image') {
            this.onUploaded.emit({
                success: true,
                message: '成功',
                data: this.fileElement.files[0].name
            });
            // this.fileUploadImgService.upload({
            //     params: this.params,
            //     data: isIE9 ? this.fileElement : this.form
            // }).then(response => {
            //     this.onUploaded.emit(response);
            // });
        } else {
            if (!this.form) {
                this.onValidate.emit(this.form);
                return;
            }
            if (this.filePath === 'userImport') {
                this.isFileLoading = true;
                // this.fileUploadUserService.upload({
                //     params: this.params,
                //     data: isIE9 ? this.fileElement : this.form
                // }).then(response => {
                //     this.onUploaded.emit(response);
                //     this.isFileLoading = false;
                // });
            } else {
                this.isFileLoading = true;
                // this.fileUploadService.upload({
                //     params: this.params,
                //     data: isIE9 ? this.fileElement : this.form
                // }).then(response => {
                //     this.onUploaded.emit(response);
                //     this.isFileLoading = false;
                // });
            }
        }
    }
}