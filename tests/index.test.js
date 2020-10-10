import expect from 'expect';

import tr from 'src/index';

describe('Totally Random', () => {
    it('returns a number', () => {
        const testDefault = new Array(10).map(() => tr());

        testDefault.forEach(v => {
            expect(v).toBeA('number');
        });
    });


    it('returs by default a number between 0 and 100', () => {
        const testDefault = new Array(10).map(() => tr());

        testDefault.forEach(v => {
            expect(v).toBeLessThanOrEqualTo(100);
            expect(v).toBeGreaterThanOrEqualTo(0);
        });
    });

    it('returs by default a number between 0 and 17', () => {
        const testDefault = new Array(10).map(() => tr(17));

        testDefault.forEach(v => {
            expect(v).toBeLessThanOrEqualTo(17);
            expect(v).toBeGreaterThanOrEqualTo(0);
        });
    });

    it('returs by default a number between 23 and 45', () => {
        const testDefault = new Array(10).map(() => tr(23, 45));

        testDefault.forEach(v => {
            expect(v).toBeLessThanOrEqualTo(45);
            expect(v).toBeGreaterThanOrEqualTo(23);
        });
    });
})

