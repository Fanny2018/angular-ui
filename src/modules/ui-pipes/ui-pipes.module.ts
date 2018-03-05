import { NgModule } from '@angular/core';
import { DateFormatPipe } from './pipes/date-format';
import { HotWordsFormatPipe } from './pipes/hot-words-format';
import { OldNamePipe } from './pipes/old-name';
import { CubeDecodeUrlPipe } from './pipes/cube-decode-url';
import { CubeEncodeUrlPipe } from './pipes/cube-encode-url';

@NgModule({
    declarations: [
        DateFormatPipe,
        HotWordsFormatPipe,
        OldNamePipe,
        CubeDecodeUrlPipe,
        CubeEncodeUrlPipe
    ],
    exports: [
        DateFormatPipe,
        HotWordsFormatPipe,
        OldNamePipe,
        CubeDecodeUrlPipe,
        CubeEncodeUrlPipe
    ]
})

export class UiPipesModule {
}