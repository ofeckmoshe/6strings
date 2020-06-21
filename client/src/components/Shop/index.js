import React, { Component } from 'react';
import { connect } from 'react-redux';

import { frets, price } from '../utils/Form/fixed_categories';

import PageTop from '../utils/page_top';
import { getProductsToShop, getBrands, getWoods } from '../../actions/products_actions';

import CollapseCheckbox from '../utils/collaps_checkbox';
import CollapseRadio from '../utils/collapse_radio';

class Shop extends Component {

    state = {
        grid: '',
        limit: 6,
        skip: 0,
        filters: { 
            brands: [],
            frets: [],
            wood: [],
            price: []
        }
    }

    componentDidMount() {
        this.props.dispatch(getBrands());
        this.props.dispatch(getWoods());
        this.props.dispatch(getProductsToShop(
            this.state.skip,
            this.state.limit,
            this.state.filters
        ));
    }

    handlePrice = (value) => {
        const data = price;
        let array = [];

        for(let key in data){
            if(data[key]._id === parseInt(value,10)){
                array = data[key].array;
            }
        }
        return array;
    };

    handleFilters = (filters, category) => {
        const newFilters = { ...this.state.filters }
        newFilters[category] = filters;

        if(category === 'price'){
            let priceValues = this.handlePrice(filters);
            newFilters[category] = priceValues;
        }

        this.showFilteredResults(newFilters);
        this.setState({ 
            filters: newFilters 
        });
    };

    showFilteredResults = (filters) => {
        this.props.dispatch(getProductsToShop(
            0,
            this.state.limit,
            filters
        )).then(() => {
            this.setState({ skip: 0 })
        })
    };
    

    render() {
        
        const products = this.props.products;

        return (
            <div>
                <PageTop 
                    title="Browsw Products"
                />
                <div className="container">
                    <div className="shop_wrapper">
                        <div className="left">
                            <CollapseCheckbox 
                                initStase={true}
                                title="Brands"
                                list={products.brands}
                                handleFilters={(filters) => this.handleFilters(filters,'brand')}

                            />
                            <CollapseCheckbox 
                                initStase={false}
                                title="Frets"
                                list={frets}
                                handleFilters={(filters) => this.handleFilters(filters,'Frets')}

                            />
                            <CollapseCheckbox 
                                initStase={false}
                                title="Wood"
                                list={products.woods}
                                handleFilters={(filters) => this.handleFilters(filters,'wood')}

                            />
                            <CollapseRadio 
                                initStase={true}
                                title="Price"
                                list={price}
                                handleFilters={(filters) => this.handleFilters(filters,'price')}

                            />


                        </div>
                        <div className="right">
                        right
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
};

export default connect(mapStateToProps)(Shop);