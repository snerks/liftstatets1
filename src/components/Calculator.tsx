import * as React from 'react';

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
}

class Calculator extends React.Component<CalculatorProps, CalculatorState> {
    constructor(props: CalculatorProps) {
        super(props);
        this.state = { value: '' };
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ value: e.target.value });
    }

    render() {
        const { value } = this.state;

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