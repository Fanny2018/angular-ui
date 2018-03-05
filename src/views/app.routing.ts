import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// ui-element
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

const appRoutes: Routes = [{
    path: '',
    redirectTo: 'angular-ui/dist/icons',
    pathMatch: 'full'
}, {
    path: 'buttons',
    component: ButtonsComponent
}, {
    path: 'circulation',
    component: CirculationComponent
}, {
    path: 'forms',
    component: FormsComponent
}, {
    path: 'angular-ui/dist/icons',
    component: IconsComponent
}, {
    path: 'font',
    component: FontStyleComponent
}, {
    path: 'table',
    component: TableComponent
}, {
    path: 'grid',
    component: GridComponent
}, {
    path: 'tab',
    component: TabComponent
}, {
    path: 'nav',
    component: NavComponent
}, {
    path: 'progress',
    component: ProgressComponent
}, {
    path: 'date',
    component: DateComponent
}, {
    path: 'model',
    component: ModelComponent
}, {
    path: 'notify',
    component: NotifyComponent
}, {
    path: 'range',
    component: RangeComponent
}, {
    path: 'slide',
    component: SlideComponent
}, {
    path: 'upload',
    component: UploadComponent
}, {
    path: 'other',
    component: OtherComponent
}];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
