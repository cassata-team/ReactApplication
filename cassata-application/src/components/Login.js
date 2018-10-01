import React,  {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './Login.css';

class Login extends Component{
    
    login =() =>{
        console.log('login');
        this.props.history.push("/");
    }
    render(){
        return(
            <div className="divLogin">
                <div className="divWelcome">
                    <span>
                        Welcome
                    </span>
                </div>
				<form className="form-horizontal">
                    <div className="form-group divEmail">
                        <label className="col-sm-2 control-label"></label>
                        <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
                        </div>
                    </div>
                    <div className="form-group divPwd">
                        <label className="col-sm-2 control-label"></label>
                        <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
                        </div>
                    </div>
                    <div className="form-group divRem">
                        <div className="col-sm-offset-2 col-sm-10">
                            <div className="checkbox">
                                <label>
                                <input type="checkbox" /> Remember me
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group divLog">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-default" onClick={this.login}>Log in</button>
                        </div>
                    </div>
                </form>
			</div>        
        )
    }
}

export default Login;