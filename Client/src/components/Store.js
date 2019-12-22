import React, { Component } from 'react';
import {connect} from 'react-redux';
import { SearchBar } from './SearchBar';
import {ProductCard} from './ProductCard';
import { API_URL } from '../config';
import {addProductToCart ,setStoreProducts, filterBySearchBarQuery} from '../actions';
import { Redirect } from 'react-router-dom';

class Store extends Component{
    
    constructor(props) {
        super(props);
        this.state = {isLoaded: false,toLogin: false,products: []};
    }

    handleAddProductToCart(product) {
        this.props.addProductToCart(product);
    }

    componentDidMount() {
        fetch(API_URL + 'products', {credentials: 'include'}).
        then((response) => {
            if(!response.ok) throw response;
            else return response.json();
          })
          .then((data) => {
            this.props.setStoreProducts(data);
            this.setState({ isLoaded: true});
          })
          .catch((error) => {
              if (error.status == 403) {
                 this.setState({toLogin: true});              
              } else {
                this.setState({ isLoaded: true, error: error.message });
              }
          });
    }

    render() {
        const {isLoaded, error} = this.state;
        if (this.state.toLogin === true) {
            return <Redirect to='/login' />
        }
        if (error) {
            return <div>Error: {error}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            const products = this.props.products.map((product) =>
            {
                if (product.show) {
                    return (<ProductCard item={product} key={product.id} 
                    onAddItem={(item) => this.props.addProductToCart(product)}></ProductCard>);
                }
                return;
            });

        return(
            <div>
                <h6>Hello {this.props.username} !</h6>
                <SearchBar onFiterQueryChange={(query) => this.props.filterProducts(query)} />
                <div className="box">
                    {products}
                </div>
            </div>
        )   
        }
    }
}

function mapStateToProps(state) {
    return {
        products: state.products,
        username: state.username
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProductToCart: (product) => dispatch(addProductToCart(product)),
        setStoreProducts: (products) => dispatch(setStoreProducts(products)),
        filterProducts: (products) => dispatch(filterBySearchBarQuery(products))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Store);