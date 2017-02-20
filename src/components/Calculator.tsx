import * as React from 'react';

import * as TemperatureTypes from './TemperatureTypes';
import TemperatureInput from './TemperatureInput';

interface BoilingVerdictProps {
    celsius: number;
}

const BoilingVerdict: React.SFC<BoilingVerdictProps> = (props) => {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
};

interface CalculatorProps {
}

interface CalculatorState {
    value: string;
    scale: TemperatureTypes.ScalesKeysType;
}

class Calculator extends React.Component<CalculatorProps, CalculatorState> {
    constructor(props: CalculatorProps) {
        super(props);
        this.state = { value: '', scale: TemperatureTypes.CelciusKey };
    }

    handleCelsiusChange = (value: string) => {
        this.setState({ scale: TemperatureTypes.CelciusKey, value });
    }

    handleFahrenheitChange = (value: string) => {
        this.setState({ scale: TemperatureTypes.FarenheitKey, value });
    }

    toCelsius = (fahrenheit: number): number => {
        return (fahrenheit - 32) * 5 / 9;
    }

    toFahrenheit = (celsius: number): number => {
        return (celsius * 9 / 5) + 32;
    }

    tryConvert = (value: string, convert: (value: number) => number): string => {
        const input = parseFloat(value);

        if (Number.isNaN(input)) {
            return '';
        }

        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;

        return rounded.toString();
    }

    render() {
        const { scale, value } = this.state;

        const celsius = scale === TemperatureTypes.FarenheitKey ? this.tryConvert(value, this.toCelsius) : value;
        const fahrenheit = scale === TemperatureTypes.CelciusKey ? this.tryConvert(value, this.toFahrenheit) : value;

        return (
            <div>
                <TemperatureInput
                    scale={TemperatureTypes.CelciusKey}
                    value={celsius}
                    onChange={this.handleCelsiusChange}
                />
                <TemperatureInput
                    scale={TemperatureTypes.FarenheitKey}
                    value={fahrenheit}
                    onChange={this.handleFahrenheitChange}
                />

                <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
        );
    }
}

export default Calculator;