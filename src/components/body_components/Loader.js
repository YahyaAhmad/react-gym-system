import React, { Component } from 'react';

class Loader extends Component {
    render() {
        return (
            <div className={"lds-ring " + (this.props.isLoading?"visible":"") }><div></div><div></div><div></div><div></div></div>
        );
    }
}

export default Loader;