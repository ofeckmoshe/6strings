import React from 'react';
import Card from '../utils/card'

const CardBlockShop = (props) => {

    const renderCards = () => (
        props.products ?
            props.products.map(card => (
                <Card 
                    key={card._id}
                    { ...card }
                    grid={props.grid}
                />
            ))
        : null
    );

    return (
        <div className="card_block_shop">
            <div>
                <div>
                    {props.list ?
                        props.list.length === 0 ?
                            <div className="no_result">Sorry, there are no results</div>
                        : null
                    :null}
                    {renderCards(props.products)}
                </div>
            </div>
        </div>
    );
};

export default CardBlockShop;