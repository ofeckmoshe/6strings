import React, { Component } from 'react';

import { connect } from 'react-redux';

import { getProductDetails, clearProductDetails } from '../../actions/products_actions';
import PageTop from '../utils/page_top';
import ProductInfo from './product_info';

import Carousel from 'react-bootstrap/Carousel';


class ProductPage extends Component {

    componentDidMount() {
        const id = this.props.match.params.id;

        this.props.dispatch(getProductDetails(id));
    }

    componentWillUnmount() {
        this.props.dispatch(clearProductDetails());
    }



    render() {
        return (
            <div>
                <PageTop 
                    title="Product Details"
                />
                <div className="container">
                    {
                        this.props.products.productDetails ?
                            <div className="product_detail_wrapper">
                                <div className="left">
                                    <div style={{width:'32em', margin: '25px'}}>
                                        {this.props.products.productDetails && 
                                        <Carousel indicators={false}>
                                            {this.props.products.productDetails.images.map((img,i) => {
                                                console.log(img)
                                                return (
                                                    <Carousel.Item key={i}>
                                                        <img
                                                            style={{height:'300px',maxHeight:'400px', maxWidth:'100%'}}
                                                            className="d-block w-100"
                                                            src={`${img.url}`}
                                                            alt="First slide"
                                                        />
                                                    </Carousel.Item>
                                                            )
                                                        })
                                                        }
                                        </Carousel>}
                                    </div>
                                </div>
                                <div className="right">
                                    <ProductInfo 
                                        addToCart={(id) => this.addToCart(id)}
                                        details={this.props.products.productDetails}
                                    />
                                </div>
                            </div>
                        : 'Loading'
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(ProductPage);