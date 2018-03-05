import { Pipe, PipeTransform } from '@angular/core';
import { cubeDecodeUrl } from '../../../utils/cube-decode';
@Pipe({
    name: 'cubeDecodeUrl'
})
export class CubeDecodeUrlPipe implements PipeTransform {
    transform(value: string = ''): string {
        return cubeDecodeUrl(value);
    }
}