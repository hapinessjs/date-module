import { test, suite } from 'mocha-typescript';
import * as unit from 'unit.js';
import * as moment from 'moment';
import { DateService } from '../../src';

@suite('Unit - DateServiceTest')
class DateServiceTest {

    @test('- timezone')
    test1() {

        const service = new DateService();
        unit.string(
            service
                .getTimezoneInfos()
                .shift()
                .value
                .format('Z')
        )
        .is('+00:00');

    }

    @test('- helper')
    test2() {

        const helper = new DateService().helper;
        unit
            .must(moment.isMoment(helper()))
            .is(true);

    }

}
