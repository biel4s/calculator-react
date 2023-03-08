import React, { Component } from 'react';

class Result extends Component {

    render() {
        let {result} = this.props;
        return (
            <input type="text" defaultValue={ result } className="border-0 text-end" />      // Input of a calculator
        )
    }
}

export default Result;
