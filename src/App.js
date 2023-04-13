import React, { Component } from 'react';
import axios from 'axios';
import './sass/App.scss';
import Keypad from './components/keypad';
import Result from './components/result';
import DarkTheme from './components/darkTheme';

export default class App extends Component {

    constructor(){
        super();
        this.state = { result: '', text: ''};
    }

    onClick = button => {
        if (button === 'clear') {								    	//User clicks Clear
            this.clear();
        }
        else if (button === 'cancel') {							       		//User clicks Cancel
            this.cancel();
            //console.log([this.state.result]);
        }
        else if (button === 'calculate') {							    	//User clicks Equals sign
            this.calculate();
            this.fact();
            if (this.state.result === 'Error' || this.state.result === 'function Error()') {
                this.clear();
            }
		}
        else {
			this.setState({ result: this.state.result + button });	    			//User clicks anything else
			//console.log([this.state.result]);
        }
    }

    clear = () => {
        this.setState({ result: '' });
        this.setState({ text: '' });
	}
	
	cancel = () => {
        let lastNumber = this.state.result;
        if (lastNumber.length === 0) {
			this.setState({ result: '' });
        }
        else {
			this.setState({ result: lastNumber.slice(0, lastNumber.length - 1) });
        }
    }
		
    calculate = () => {		
        try {
            // eslint-disable-next-line
            this.setState({ result: (eval(this.state.result) || '' ) + '' });
        }
        catch (error) {
            this.setState({ result: 'Error' });
        }
    }
    
    fact = () => {
	// eslint-disable-next-line
      	const result = eval(this.state.result);

        const options = {
            method: 'GET',
            url: `http://localhost:8000/math`,
            params: {
                number: result
            }
        };

        axios.request(options)
        .then((response) => {
            console.log(response.data);
            this.setState({ text: response.data.text });

        }).catch((error) => {
            console.error(error);
        });
	    
	// const APIKey =
        // //eslint-disable-next-line
        // `http://numbersapi.com/${eval(this.state.result)}/math?json`;
        // fetch(APIKey)
        // .then(response => {
        //     if (response.ok) {
        //         return response;
        //     }
        //     throw Error(response.status);
        // })
        // .then(response => response.json())
        // .then(data => {
        //     this.setState({ text: data.text });
        // })
        // .catch(error => {
        //     throw (error);
        // })
    }
	
    render() {
        return (
            <div className="container d-inline w-100 h-100 justify-content-center align-items-center">                  	
                    <h1 className="text-center pt-3">Calculator React</h1>		                           			{/* Title */}

                    <div className="d-flex w-100 align-items-center justify-content-around pt-5 mt-5">					{/* Main content */}
                        <div className="facts w-25 text-center">
                            <h2>Fun fact</h2>					                                                        {/* Facts about result */}
                            <p className="lead">{this.state.text}</p>
                        </div>
                        <div className="calculator text-center rounded-4">							        {/* Calculator */}
                            <Result result={this.state.result} />
                            <Keypad onClick={this.onClick} />
                        </div>

                        <div className="switch-theme w-25 text-center">									{/* Theme */}
                            <h2>Dark Mode</h2>
                            <label className="mt-3">
                                <DarkTheme />
                            </label>
                        </div>
                    </div>
                    
                    {/* left - position-absolute top-50 start-0 translate-middle-y ps-5 */}
                    {/* right - position-absolute top-50 end-0 translate-middle-y pe-5 */}
                    {/* middle - position-absolute top-50 start-50 translate-middle */}				
                </div>
        );
    }
}
