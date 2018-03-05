import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app';
import { FormsModule } from '@angular/forms';

// 公共组件
import { UiComponentsModule, UiDirectivesModule, UiFormsModule } from '../modules/index';

// ui-elements
import { ButtonsComponent } from './ui-element/buttons/buttons';
import { CirculationComponent } from './ui-element/circulation/circulation';
import { FormsComponent } from './ui-element/forms/forms';
import { TabComponent } from './ui-element/tab/tab';
import { NavComponent } from './ui-element/nav/nav';
import { ProgressComponent } from './ui-element/progress/progress';

// design-code
import { IconsComponent } from './design-code/icons/icon';
import { FontStyleComponent } from './design-code/font-style/font-style';

// table-grid
import { TableComponent } from './tabled-grid/table/table';
import { GridComponent } from './tabled-grid/grid/grid';

// assembly
import { DateComponent } from './assembly/date/date';
import { ModelComponent } from './assembly/modal/modal';
import { NotifyComponent } from './assembly/notify/notify';
import { RangeComponent } from './assembly/range/range';
import { SlideComponent } from './assembly/slide/slide';
import { UploadComponent } from './assembly/upload/upload';

import { OtherComponent } from './other/other';

import { routing } from './app.routing';

@NgModule({
    imports: [
        // 公共组件
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        UiComponentsModule,
        UiDirectivesModule,
        FormsModule,
        UiFormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        // 页面组件
        ButtonsComponent,
        CirculationComponent,
        FormsComponent,
        TabComponent,
        NavComponent,
        ProgressComponent,

        // design-code
        IconsComponent,
        FontStyleComponent,
        TableComponent,
        GridComponent,

        // assembly
        DateComponent,
        ModelComponent,
        NotifyComponent,
        RangeComponent,
        SlideComponent,
        UploadComponent,
        OtherComponent
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
