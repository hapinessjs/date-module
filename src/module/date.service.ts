import { Injectable } from '@hapiness/core';
import * as momentTz from 'moment-timezone';
import { Moment } from 'moment';
import * as moment from 'moment';
import { TIMEZONES } from './timezones';
import * as Debug from 'debug';
const debug = Debug('hapiness:date');

export interface TimezoneItem {
    timezone: string;
    value: Moment
}

@Injectable()
export class DateService {

    /**
     * Get date helper
     */
    helper = moment;

    /**
     * Get timezone infos
     */
    getTimezoneInfos(): TimezoneItem[] {
        return TIMEZONES
            .map(_ => ({
                timezone: _,
                value: momentTz.tz(_)
            }));
    }

}
