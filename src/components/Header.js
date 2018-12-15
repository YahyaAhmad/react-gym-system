import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="gym-header">
                <div className="gym-brand">GYM System</div>
                <div className="gym-logo"><i className="fas fa-dumbbell"></i></div>
            </div>
        );
    }
}

export default Header;