import * as React from 'react';

export interface BoilingVerdictProps {
    celsius: number;
}

function BoilingVerdict(props: BoilingVerdictProps) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

export interface CalculatorProps {

}

export interface CalculatorState {
    value: string;
}

class Calculator extends React.Component<CalculatorProps, CalculatorState> {
    constructor(props: CalculatorProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { value: '' };
    }

    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ value: e.target.value });
    }

    render() {
        const value = this.state.value;
        return (
            <fieldset>
                <legend>Enter temperature in Celsius:</legend>
                <input
                    value={value}
                    onChange={this.handleChange}
                />
                <BoilingVerdict
                    celsius={parseFloat(value)}
                />
            </fieldset>
        );
    }
}

export default Calculator;