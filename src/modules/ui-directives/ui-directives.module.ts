import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StopPropagationDirective } from './directives/stop-propagation.directive';
import { JumpLocationDirective } from './directives/jump-location';
import { NavFixedDirective } from './directives/nav-fixed';
import { HistoryBackDirective } from './directives/history-back';
import { ScrollToTopDirective } from './directives/scroll-to-top';
import { InsertHtmlDirective } from './directives/insert-html';
import { PlaceholderDirective } from './directives/placeholder';
import { NavJumpLocationDirective } from './directives/nav-jump-location';
import { NavHoverDirective } from './directives/nav-hover';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        StopPropagationDirective,
        JumpLocationDirective,
        NavFixedDirective,
        HistoryBackDirective,
        ScrollToTopDirective,
        InsertHtmlDirective,
        PlaceholderDirective,
        NavJumpLocationDirective,
        NavHoverDirective
    ],
    exports: [
        StopPropagationDirective,
        JumpLocationDirective,
        NavFixedDirective,
        HistoryBackDirective,
        ScrollToTopDirective,
        InsertHtmlDirective,
        PlaceholderDirective,
        NavJumpLocationDirective,
        NavHoverDirective
    ]
})
export class UiDirectivesModule {
}