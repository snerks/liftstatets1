import * as React from 'react';

import * as TemperatureTypes from './TemperatureTypes';

interface TemperatureInputProps {
    value: string;
    scale: TemperatureTypes.ScalesKeysType;
    onChange: (value: string) => void;
}

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends React.Component<TemperatureInputProps, {}> {
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.props.onChange(e.target.value);
    }

    render() {
        const { value, scale } = this.props;

        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={value} onChange={this.handleChange} />
            </fieldset>
        );
    }
}

export default TemperatureInput;