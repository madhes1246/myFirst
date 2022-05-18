import React, { Component } from 'react';


class Child extends Component {


    render() {
        return (
            <div>
                child
                <h1> {this.props.valu}</h1>
                <button onClick={() => { this.props.change(this.props.valu) }} >
                    add number
                </button>
            </div>
        );
    }
}

export default Child;