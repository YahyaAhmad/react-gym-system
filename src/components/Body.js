import React, { Component } from 'react'
import Login from './body_components/Login'
import MainForm from './body_components/MainForm'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


class Body extends Component {
    constructor(){
        super();
        this.state = {loginShow:false}
    }

    handleLogin(){
        setTimeout(() => this.setState({loginShow:false}),1000);
    }
    render() {
        return (
            <div className="gym-body">
                <ReactCSSTransitionGroup
                    transitionName="login"

                    transitionEnterTimeout={1000}
                    transitionLeaveTimeout={500}
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                >
                    {this.state.loginShow?<Login onLogin={this.handleLogin.bind(this)} />:null}
                    {this.state.loginShow?null:<MainForm />}

                </ReactCSSTransitionGroup>

            </div>
        );
    }
}

export default Body;