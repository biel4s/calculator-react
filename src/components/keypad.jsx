import React, { Component } from 'react';

class Keypad extends Component {

    render() {
        return (
            <div className="keypad d-grid">
               <button name="clear"    onClick={e => this.props.onClick(e.target.name)} className="action" id="clear">Clear</button>
                <button name="cancel"   onClick={e => this.props.onClick(e.target.name)} className="action" id="cancel">&larr;</button>
                <button name="/"        onClick={e => this.props.onClick(e.target.name)} className="sign">&divide;</button>

                <button name="7"        onClick={e => this.props.onClick(e.target.name)} className="number">7</button>
                <button name="8"        onClick={e => this.props.onClick(e.target.name)} className="number">8</button>
                <button name="9"        onClick={e => this.props.onClick(e.target.name)} className="number">9</button>
                <button name="*"        onClick={e => this.props.onClick(e.target.name)} className="sign">&times;</button>

                <button name="4"        onClick={e => this.props.onClick(e.target.name)} className="number">4</button>
                <button name="5"        onClick={e => this.props.onClick(e.target.name)} className="number">5</button>
                <button name="6"        onClick={e => this.props.onClick(e.target.name)} className="number">6</button>
                <button name="-"        onClick={e => this.props.onClick(e.target.name)} className="sign">&ndash;</button>

                <button name="1"        onClick={e => this.props.onClick(e.target.name)} className="number">1</button>
                <button name="2"        onClick={e => this.props.onClick(e.target.name)} className="number">2</button>
                <button name="3"        onClick={e => this.props.onClick(e.target.name)} className="number">3</button>
                <button name="+"        onClick={e => this.props.onClick(e.target.name)} className="sign">+</button>

                <button name="0"        onClick={e => this.props.onClick(e.target.name)} className="number" id="zero">0</button>
                <button name=","        onClick={e => this.props.onClick(e.target.name)} className="number">,</button>
                <button name="calculate"onClick={e => this.props.onClick(e.target.name)} className="sign">=</button>
            </div>
        )
    }
}

export default Keypad;
