import React, { Component } from 'react';
import  { API_URL } from '../config';
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { setUsername } from '../actions';
import { Footer } from './Footer';

class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    onLoginSubmit(event) {
        event.preventDefault();
        
        const username = this.refs.username.value;
        const password = this.refs.password.value;
        const rememberMe = this.refs.rememberMe.checked;

        fetch(API_URL + 'login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({username,password,rememberMe})
        })
        .then(response => {
            if (response.status === 401) {
                this.setState({matched: false});
            } else if (response.status === 204) {
                this.setState({matched: true});
                this.props.setUsername(username);
            }
        })
        .catch(error => {
            alert("Something went wrong. Please make sure you have internet connection.")
        });
    }

    render() {
        if (this.state.matched) {
            return(<Redirect to="/" />)
        } else if (this.state.matched === false) {
            alert('Invalid username or password');
        }
        
        return (
            <div>
                <div>
                    <h5 style={{textAlign:'center'}}>Please log in</h5><br/>
                </div>         
                <div style ={{display: 'flex', alignItems: 'center', justifyContent: 'center',}}>                
                    <form onSubmit={this.onLoginSubmit.bind(this)}>
                        <input ref="username" type="text" placeholder="username" required autoFocus/><br/>
                        <input ref="password" type="password" placeholder="password" required/><br/>
                        <label>
                            Remember me? 
                            <input style={{opacity: 'unset', pointerEvents: "initial"}}
                                ref="rememberMe"
                                type="checkbox" />
                            </label>
                        <input type="submit" value="send" className="btn btn-lg btn-block"
                            style={{background: '#3667c2', color: 'white', margin:'auto'}}/><br />
  
                    </form>
                </div>
                <br/><br/>
                <div className="center">
                    <span>
                        New to our website?
                        <Link to = "/registration"> click here </Link>
                        to create a new account.
                    </span>
                </div>
                <br/><br/><br/><br/><br/>
                <Footer />
            </div>
        )
              
    }
}

const mapStateToProps = (state)=>{
    return {

    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        setUsername: (username) => dispatch(setUsername(username))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)