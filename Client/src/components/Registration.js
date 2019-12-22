import React, { Component } from 'react';
import { API_URL } from '../config';
import { connect } from 'react-redux'
import { Footer } from './Footer';
import { register } from '../actions';
import { Redirect } from 'react-router-dom';

class Registration extends Component {

    constructor(props) {
        super(props);
        this.state = {toLogin: false};
    }

    onRegistrationSubmit(event) {
        event.preventDefault();
        const username = this.refs.username.value;
        const password = this.refs.password.value;

        fetch(API_URL + 'register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username,password})
        })
        .then(response => {
            this.setState({toLogin: true});
        })
        .catch(error => alert("No internet connection"));
    }

    render() {
        if (this.state.toLogin === true) {
            return <Redirect to='/login' />
        }

        return(
            <div>                    
                <h5 style={{textAlign:'center'}}>Registration</h5><br/>          
                <div style ={{display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
                    <form onSubmit={this.onRegistrationSubmit.bind(this)}>
                        <input ref="username" type="text" placeholder="choose username" required autoFocus/><br/>
                        <input ref="password" type="password" placeholder="choose password" required/><br/>
                        <input type="submit" value="send" className="btn btn-lg btn-block"
                            style={{background: '#3667c2', color: 'white', margin:'auto'}}/>
                    </form>
                </div>
                <br/><br/><br/><br/><br/><br/><br/><br/>
                <Footer/>
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
        register : (registered) => {
            dispatch(register(registered))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration)