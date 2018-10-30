import isEcode from '../src/is-ecode';
import ecode from '../src/ecode';

describe('isEcode', () => {

    it('returns false for `a`', () => {
        expect(isEcode('a')).toEqual(false);
    });

    it(`returns false for only the root '${ecode.ROOT}'`, () => {
        expect(isEcode(ecode.ROOT)).toEqual(false);
    })

});


