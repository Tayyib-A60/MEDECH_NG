import React from 'react';
import { connect } from 'react-redux';

import './checkout.styles.scss';
import { removeItemFromCart, addItem, reduceRemoveItem } from '../../redux/cart/cart.action';

const CheckoutItem = ({cartItem, removeItem, addItem, reduceRemoveItem}) => {
    const { name, imageUrl, price, quantity} = cartItem;
    return (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item"/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow" onClick={() => reduceRemoveItem(cartItem)}>&#10094;</div>
            <span className="value">{quantity}</span>
            <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
        </span>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={() => removeItem(cartItem)}>&#10005;</div>
    </div>
)};

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    reduceRemoveItem: item => dispatch(reduceRemoveItem(item))
});
export default connect(
    null,
    mapDispatchToProps)(CheckoutItem);