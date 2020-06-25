import React from 'react';
import MyButton from '../utils/button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { faCheck} from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ExpansionPanelDetails } from '@material-ui/core';

const ProductInfo = (props) => {

    const showProductTags = (details) => (
        <div className="product_tags">
            {
                details.shipping ?
                    <div className="tag">
                        <div><FontAwesomeIcon icon={faTruck} /></div>
                        <div className="tag_text">
                            <div>Free Shipping</div>
                            <div>And return</div>
                        </div>
                    </div>
                : null
            }
            {
                    <div className="tag">
                        <div><FontAwesomeIcon icon={details.available ? faCheck : faTimes} /></div>
                        <div className="tag_text">
                            <div>{details.available ? 'Available' : 'Not available'}</div>
                            <div>{details.available ? 'in store' : 'preorder only'}</div>
                        </div>
                    </div>
                
            }
        </div>
    );

    const showProductActions = (details) => (
        <div className="product_actions">
            <div className="price">$ {details.price}</div>
            <div className="cart">
                <MyButton 
                    type="add_to_cart_link"
                    runAction={() => {console.log('add to cart')}}
                />
            </div>
        </div>
    );

    const showProductSpecifications = (details) => (
        <div className="product_specifications">
            <h2>Specifications</h2>
            <div className="item">
                <strong>Frets:</strong> {details.frets}
            </div>
            <div className="item">
                <strong>Wood:</strong> {details.wood.name}
            </div>
        </div>
    );
    
    const details = props.details;
    return (
        <div>
            <h1>{details.brand.name} - {details.name}</h1>
            <p>
                { details.description }
            </p>
            { showProductTags(details) }
            { showProductActions(details) }
            { showProductSpecifications(details) }
        </div>
    );
};

export default ProductInfo;