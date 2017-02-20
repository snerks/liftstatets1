import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Calculator from './Calculator';

describe('Calculator Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Calculator />, div);
    });

    describe('toCelsius', () => {
        it('with 32 returns 0', () => {
            const sut = new Calculator({});

            const result = sut.toCelsius(32);

            expect(result).toEqual(0);
        });

        it('with 212 returns 100', () => {
            const sut = new Calculator({});

            const result = sut.toCelsius(212);

            expect(result).toEqual(100);
        });
    });

    describe('toFarenheit', () => {
        it('with 0 returns 32', () => {
            const sut = new Calculator({});

            const result = sut.toFahrenheit(0);

            expect(result).toEqual(32);
        });

        it('with 100 returns 212', () => {
            const sut = new Calculator({});

            const result = sut.toFahrenheit(100);

            expect(result).toEqual(212);
        });
    });
});
