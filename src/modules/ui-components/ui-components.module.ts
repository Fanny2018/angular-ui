import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UiDirectivesModule } from '../ui-directives/ui-directives.module';
import { UiPipesModule } from '../ui-pipes/ui-pipes.module';

import { AppComponent } from './components/app/app.component';
import { DropDownComponent } from './components/drop-down/drop-down.component';
import { DropDownFixedComponent } from './components/drop-down/drop-down-fixed/drop-down-fixed.component';
import { DropDownMenuComponent } from './components/drop-down/drop-down-menu/drop-down-menu.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { NotifyComponent } from './components/notify/notify.component';
import { StarrySkyComponent } from './components/starry-sky/starry-sky.component';
import { ViewLoadingBarComponent } from './components/view-loading-bar/view-loading-bar.component';
import { ToolbarComponent } from './components/toolbar/ui-toolbar.component';
import { SlideComponent } from './components/slide/slide.component';
import { SlideItemComponent } from './components/slide/slide-item/slide-item.component';
import { ModalComponent } from './components/ui-modal/modal';
import { ScrollModalComponent } from './components/scroll-modal/scroll-modal.component';
import { FileUploadComponent } from './components/file-upload/file-upload';

import { ExceptionNoteComponent } from './components/exception-note/exception-note';
import { TagTipComponent } from './components/tag-tip/tag-tip';
import { SelectToolTipComponent } from './components/select-tool-tip/select-tool-tip';
import { DragTagComponent } from './components/drag-tag/drag-tag';
import { ToolTipComponent } from './components/tool-tip/tool-tip';

import { ConfirmController } from './services/confirm-controller.service';
import { NotifyController } from './services/notify-controller.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        UiDirectivesModule,
        UiPipesModule
    ],
    declarations: [
        AppComponent,
        TagTipComponent,
        SelectToolTipComponent,
        DragTagComponent,
        TagTipComponent,
        DropDownComponent,
        DropDownFixedComponent,
        DropDownMenuComponent,
        PaginationComponent,
        ConfirmComponent,
        NotifyComponent,
        StarrySkyComponent,
        ViewLoadingBarComponent,
        ToolbarComponent,
        SlideComponent,
        SlideItemComponent,
        ModalComponent,
        ScrollModalComponent,
        FileUploadComponent,
        ExceptionNoteComponent,
        ToolTipComponent
    ],
    exports: [
        AppComponent,
        TagTipComponent,
        DragTagComponent,
        SelectToolTipComponent,
        TagTipComponent,
        DropDownComponent,
        DropDownFixedComponent,
        DropDownMenuComponent,
        PaginationComponent,
        ConfirmComponent,
        NotifyComponent,
        StarrySkyComponent,
        ViewLoadingBarComponent,
        ToolbarComponent,
        SlideComponent,
        SlideItemComponent,
        ModalComponent,
        ScrollModalComponent,
        FileUploadComponent,
        ExceptionNoteComponent,
        ToolTipComponent
    ],
    providers: [
        NotifyController,
        ConfirmController
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UiComponentsModule {
}
