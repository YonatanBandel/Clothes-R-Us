import  { API_URL } from '../config';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Transaction from './Transaction';
import { SearchBar } from './SearchBar';

class Admin extends Component{
    constructor(props) {
        super(props);
    
        this.filterByUser = this.filterByUser.bind(this);

        this.state = {
            toLogin: false,
            transactions: []
        };
    }
    
    componentDidMount() {
        fetch(API_URL + 'transactions', {credentials: 'include'}).
        then((response) => {
            if(!response.ok) throw response;
            else return response.json();
          })
          .then((res) => {
            this.setState({transactions: res});
          })
          .catch(err => {
            if (err.status == 403) {
                this.setState({toLogin: true});              
             }
          })
    }

    render() {   
        if (this.state.toLogin) {
            alert('Please login with admin user in order to view this page');
            return <Redirect to='/login' />
        }
        return (
            <div>
                <span>
                    Search By User: <SearchBar onFiterQueryChange={e=> this.filterByUser(e)} />
                </span>
                {
                    this.state.transactions.map(transaction => 
                        (transaction.show || transaction.show === undefined) ? <Transaction key={transaction.id} {...transaction} /> : null
                    )   
                }
            </div>
        )
    }

    filterByUser(query) {
        const transactions = this.state.transactions.map(transaction => {
            let newTransaction = Object.assign({}, transaction);
            if (transaction.username.toLowerCase().includes(query)) {
                newTransaction.show = true;
            } else {
                newTransaction.show = false;
            }
            return newTransaction;
        });
        this.setState({
            transactions
        });
    }
}

const mapStateToProps = (state)=>{
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(Admin)