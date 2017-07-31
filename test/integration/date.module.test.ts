/**
 * @see https://github.com/pana-cc/mocha-typescript
 */
import { test, suite } from 'mocha-typescript';

/**
 * @see http://unitjs.com/
 */
import * as unit from 'unit.js';
import { Hapiness, HapinessModule, OnStart } from '@hapiness/core';
import { DateModule, DateService } from '../../src/';

@suite('Integration - DateModuleTest')
class DateModuleTest {
    /**
     * Function executed before the suite
     */
    static before() {}

    /**
     * Function executed after the suite
     */
    static after() {}

    /**
     * Class constructor
     * New lifecycle
     */
    constructor() {}

    /**
     * Function executed before each test
     */
    before() {}

    /**
     * Function executed after each test
     */
    after() {}

    @test('- Test date module')
    test1(done) {


        @HapinessModule({
            version: '1.0.0',
            imports: [ DateModule ]
        })
        class MTest implements OnStart {
            constructor(private date: DateService) {}

            onStart(): void {

                const date = new Date();
                unit
                    .string(this.date.helper(date).toISOString())
                    .is(date.toISOString());
                done();
            }
        }

        Hapiness.bootstrap(MTest);
    }

}
