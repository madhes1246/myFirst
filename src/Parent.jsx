import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = { variable: 0 }
    };

    render() {
        return (
            <div>
                <Child
                    valu={this.state.variable}
                    change={this.addValue}
                />

            </div>
        );
    }
    addValue = (e) => {
        let add = e;
        this.setState({ variable: ++add });

    }

}

export default Parent;