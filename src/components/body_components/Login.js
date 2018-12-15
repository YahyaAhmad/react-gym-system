import React, { Component } from 'react';
import $ from 'jquery';
import Loader from './Loader';

class Login extends Component {

    constructor(){
        super();
        this.state = {
            message: "Login Form!",
            isLoading :false,
            showMessage: false,
        }
        this.loginTimeout = this.loginTimeout.bind(this);
    }
    timeout = null;

    login(){
        let data = {
            username:this.refs.user.value,
            password:this.refs.pass.value
        }
        $.post('http://localhost/gym/user.php',data).then((res) => {

            let data = JSON.parse(res);
            this.setState({isLoading:true});
            clearTimeout(this.timeout);
            this.timeout = setTimeout(this.loginTimeout,650,data);


        });
    }

    loginTimeout(data){
        
        if(data.message == "success"){
            this.setState({message:"Login Successful!",success:true});
            this.props.onLogin();
        }
        else {
            this.setState({message:"Username of password is incorrect!",success:false});
        }
        this.setState({isLoading:false,showMessage:true});
    }

    render() {
        return (
            <div className="login-component">
            
                <div className="gym-login-form react-form border">
                    <div className="login-input login-username"><input ref="user" type="text" placeholder="Username"/></div>
                    <div className="login-input login-password"><input ref="pass" type="password" placeholder="Password"/></div>
                    <div className="gym-submit-form" >
                    <Loader isLoading={this.state.isLoading} />
                        <div className="remember-check"><input type="checkbox" /> Remember Me</div>
                        <div className={"submit-button"}><button onClick={this.login.bind(this)} className={"btn btn-primary " + (this.state.isLoading||this.state.success?"disabled":"")}>Login</button></div>
                    </div>
                </div>
                <div className="form-message-container">
                    <div className={"form-message " + (this.state.showMessage?"visible ":"") + (this.state.success?"success":"error")}>{this.state.message}</div>
                </div>
            </div>
        );
    }
}

export default Login;