'use strict';

const { duration_to_seconds } = require('../src/time');

describe('duration_to_seconds()', () => {
    const dataset = [
        {
            time: '1',
            number_of_seconds: 1
        },
        {
            time: '01',
            number_of_seconds: 1
        },
        {
            time: '61',
            number_of_seconds: 61
        },
        {
            time: '1:0',
            number_of_seconds: 60
        },
        {
            time: '1:1',
            number_of_seconds: 61
        },
        {
            time: '1:01',
            number_of_seconds: 61
        },
        {
            time: '1:0:0',
            number_of_seconds: 3600
        },
        {
            time: '1:00:00',
            number_of_seconds: 3600
        },
        {
            time: '66:00:00',
            number_of_seconds: 237600
        },
        {
            time: '66:61:61',
            number_of_seconds: 241321
        },
        {
            time: '1:1:0:0',
            number_of_seconds: 3600
        },
        {
            time: 'a',
            number_of_seconds: NaN
        }
    ];

    describe.each(dataset)('should convert time notation to seconds', ({time, number_of_seconds}) => {
        it(`convert "${time}"`, () => {
            expect(duration_to_seconds(time)).toBe(number_of_seconds);    
        });
    });
});
