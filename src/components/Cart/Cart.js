import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    console.log(props.cart);
    let total = 0;
    for (const course of cart) {
        total = total + course.price;
    }
    return (
        <div>
            <h2>Cart</h2>
            <h4>Courese Added: : {cart.length}</h4>
            <h5>Total: ${total}</h5>
        </div>
    );
};

export default Cart;
