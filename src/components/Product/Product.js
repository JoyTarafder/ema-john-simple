import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const { img, name, seller, price, stock } = props.product
    return (
        <div class="product">
            <div>
                <img src={img} alt="" />

            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br />
                <p><small>by : {seller}</small></p>
                <p>Price: ${price}</p>
                <p>Only {stock} left in stock - order soon</p>
                <button
                    className="main-btn"
                    onClick={() => props.handleAddProduct(props.product)}
                ><FontAwesomeIcon icon={faShoppingCart} /> add to card</button>
            </div>
        </div>
    );
};

export default Product;