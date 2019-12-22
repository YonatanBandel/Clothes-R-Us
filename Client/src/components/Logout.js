import React, { Component } from 'react';

import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { clearUsername } from '../actions'
import { API_URL } from '../config';

class Logout extends Component {
  
  constructor(props) {
    super(props);
    this.state = {toLogin: false};
  }

  componentDidMount() {
    fetch(API_URL + 'logout', {credentials: 'include', method: 'POST'}).
    then((response) => {
      this.props.clearUsername();
      this.setState({toLogin: true});
    });
  }
  
  render() {
    if (this.state.toLogin === true) {
      return <Redirect to='/login' />
    }
    return <div>Logging Out...</div>
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    clearUsername : () => {
          dispatch(clearUsername())
      }
  }
}

const mapStateToProps = (state)=>{
  return { }
}

export default connect(mapStateToProps,mapDispatchToProps)(Logout)