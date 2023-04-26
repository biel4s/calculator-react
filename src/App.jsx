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

	//USING RAPID API KEY
	const APIKey = process.env.REACT_APP_API_KEY;

	const options = {
		method: "GET",
		url: `https://numbersapi.p.rapidapi.com/${result}/math?json=true`,
		headers: {
			"X-RapidAPI-Key": APIKey,
			"X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
		},
	};

	axios
		.request(options)
		.then((response) => {
			this.setState({ text: response.data.text });
		})
		.catch((error) => {
			console.error(error);
		});
	    
	// USING LOCALHOST
	// const APIKey= `http: //numbersapi.com/${result}/math?json`;
	
	// //eslint-disable-next-line
	// axios
	// 	.get(APIKey)
	// 	.then((response) => {
	// 		if (response.status === 200) {
	// 			return response;
	// 		}
	// 		throw new Error(response.status);
	// 	})
	// 	.then((response) => response.data)
	// 	.then((data) => {
	// 		this.setState({
	// 			text: data.text,
	// 		});
	// 	})
	// 	.catch((error) => {
	// 		throw error;
	// 	});
    };
	
    render() {
        return (
            <div className="container d-inline w-100 h-100 justify-content-center align-items-center">                  	
		{/* Title */}
		<h1 className="text-center">Calculator React</h1>

		{/* Main content */}
		<div className="d-flex w-100 align-items-center justify-content-around pt-5 mt-5">
			{/* Facts about result */}
			<div className="facts w-25 text-center">
				<h2>Fun fact</h2>
				<p className="lead">{this.state.text}</p>
			</div>
			{/* Calculator */}
			<div className="calculator text-center rounded-4">
				<Result result={this.state.result} />
				<Keypad onClick={this.onClick} />
			</div>
			{/* Theme */}
			<div className="switch-theme w-25 text-center">
				<h2>Dark Mode</h2>
				<label className="mt-3">
					<DarkTheme />
				</label>
			</div>
		</div>
		{/* Footer */}
		<footer className="footer d-flex justify-content-center pt-5 mt-5">
			<h3 className="me-3">Kamil Bielawski</h3>
			<h3 className="ms-3">
				<a
					href="https://github.com/biel4s/calculator-react"
					className="text-decoration-none"
					target="_blank"
					rel="noreferrer"
				>
					Github
				</a>
			 </h3>
	   	</footer>
		    {/* left - position-absolute top-50 start-0 translate-middle-y ps-5 */}
		    {/* right - position-absolute top-50 end-0 translate-middle-y pe-5 */}
		    {/* middle - position-absolute top-50 start-50 translate-middle */}				
	</div>
        );
    }
}
