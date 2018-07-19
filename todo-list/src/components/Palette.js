import React, { Component } from 'react';
import './Palette.css';

class Color extends Component {
    render() {
        const { color } = this.props;
        return (
            <div className="color" style={{ background: color }}>
            </div >
        )
    }

}
class Palette extends Component {

    render() {
        return (
            <div className="palette">
                <Color color='#343a40' />
                <Color color='#f03e3e' />
                <Color color='#12b886' />
                <Color color='#228ae6' />
            </div>
        )

    }
}
export default Palette