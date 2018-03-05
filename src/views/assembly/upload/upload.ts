import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    templateUrl: 'upload.html'
})
export class UploadComponent {
    uploadFileName = '';
    fileErrorInfo = '';
    uploadImgPath = '';
    imgUrl = '';
    imgErrorInfo = '';
    @ViewChild('imgRef') img: ElementRef;

    onUpload(fileName: string) {
        this.uploadFileName = fileName;
    }

    onValidate(value: any) {
        if (!value) {
            this.fileErrorInfo = '请选择导入的文件';
        }
    }

    onUploaded(item: any) {
        console.log(item);
    }

    onError(item: any) {
        this.fileErrorInfo = item.message;
    }

// 图片上传
    imageUpload(imgPath: string) {
        this.uploadImgPath = imgPath;
    }

    imageUploaded(response: any = {}) {
        if (response.success) {
            let name = response.data;
            this.imgUrl = '../../../assets/images/' + name;
            // this.img.nativeElement.src = '../../../assets/images/' + name;
        }
    }

    imageError(item: any) {
        if (!item.success) {
            this.imgErrorInfo = '图片类型为 .jpeg, .jpg, .png';
        }
    }
}