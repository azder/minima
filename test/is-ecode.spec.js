import isEcode from '../src/is/ecode';
import ecode from '../src/ecode';

describe('isEcode', () => {

    it(`returns false for not having root '${ecode.ROOT}'`, () => {
        const value = 'a';
        expect([value, isEcode(value)]).toEqual([value, false]);
    });

    it(`returns false for having only the root '${ecode.ROOT}'`, () => {
        const value = ecode.ROOT;
        expect([value, isEcode(value)]).toEqual([value, false]);
    });

    it('returns false for invalid characters', () => {
        const values = [
            'e.UpperCase',
            'e.some_underscore',
            'e.ok.but!ok',
            'e.nds.with.',
            'e.*',
        ];
        for (const value of values) {
            expect([value, isEcode(value)]).toEqual([value, false]);
        }
    });

    it('returns true for proper ecode', () => {
        const values = [
            'e.ok.done.deal',
            'e.well-with-dash',
        ];
        for (const value of values) {
            expect([value, isEcode(value)]).toEqual([value, true]);
        }
    });

});


