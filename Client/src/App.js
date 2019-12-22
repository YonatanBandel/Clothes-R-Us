import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Admin from './components/Admin';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Store from './components/Store';
import Login from './components/Login';
import Logout from './components/Logout';
import { Navbar } from './components/Navbar';
import Registration from './components/Registration';
import Delivery from './components/Delivery';
import Products from './components/Products';
import ReadmeYonatan from './components/ReadmeYonatan';
import ReadmeInbal from './components/ReadmeInbal';

class App extends Component {
  render() {
    return (
            <Router>            
                    <Navbar/>
                    <Route exact path="/" component={Store}/>
                    <Route path="/admin" component={Admin}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/delivery" component={Delivery}/>
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/login" component={Login}/>
                    <Route path="/products" component={Products}/>
                    <Route path="/logout" component={Logout}/>
                    <Route path="/readmeyonatan" component={ReadmeYonatan}/>
                    <Route path="/readmeinbal" component={ReadmeInbal}/>
                    <Route path="/registration" component={Registration}/>
            </Router>
    );
  }
}

export default App;