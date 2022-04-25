import React, { Component } from 'react';
export default class ButtonPad extends Component{
    ButtonPressed = e =>{ 
        this.props.ButtonPressed(e.target.name);
};
    render(){
    return(
        <div className='buttons'>
             <button name='(' onClick={this.ButtonPressed}>
                (
            </button>
            <button name='C' onClick={this.ButtonPressed}>
                C
            </button>
            <button name='CE' onClick={this.ButtonPressed}>
                CE
            </button>
            <button name=')' onClick={this.ButtonPressed}>
                )
            </button>
            <button name='1' onClick={this.ButtonPressed}>
                1
            </button>
            <button name='2' onClick={this.ButtonPressed}>
                2
            </button>
            <button name='3' onClick={this.ButtonPressed}>
                3
            </button>
            <button name='+' onClick={this.ButtonPressed}>
                +
            </button>
            <button name='4' onClick={this.ButtonPressed}>
                4
            </button>
            <button name='5' onClick={this.ButtonPressed}>
                5
            </button>
            <button name='6' onClick={this.ButtonPressed}>
                6
            </button>
            <button name='-' onClick={this.ButtonPressed}>
                -
            </button>
            <button name='7' onClick={this.ButtonPressed}>
                7
            </button>
            <button name='8' onClick={this.ButtonPressed}>
                8
            </button>
            <button name='9' onClick={this.ButtonPressed}>
                9
            </button>
            <button name='*' onClick={this.ButtonPressed}>
                *
            </button>
            <button name='0' onClick={this.ButtonPressed}>
                0
            </button>
            <button name='.' onClick={this.ButtonPressed}>
                .
            </button>
            <button name='=' onClick={this.ButtonPressed}>
                =
            </button>
            <button name='/ ' onClick={this.ButtonPressed}>
               /
            </button>
        </div>
    );
}
}