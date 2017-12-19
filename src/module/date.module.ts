import { HapinessModule } from '@hapiness/core';
import { DateService } from './date.service';

@HapinessModule({
    version: '1.0.0',
    exports: [ DateService ]
})
export class DateModule {}
