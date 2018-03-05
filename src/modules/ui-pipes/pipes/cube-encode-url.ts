import { Pipe, PipeTransform } from '@angular/core';
import { cubeEncodeUrl } from '../../../utils/cube-encode';

@Pipe({
    name: 'cubeEncodeUrl'
})
export class CubeEncodeUrlPipe implements PipeTransform {
    transform(value: string = ''): string {
        return cubeEncodeUrl(value);
    }
}
