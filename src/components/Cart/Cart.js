import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let [cart2, setCart2] = useState([]);
    cart2 = cart;
    const handlePlaceOrder = () => {
        history.push('/inventory');
        setCart2([]);
    };
    let total = 0;
    for (const course of cart) {
        total = total + course.price;
    }
    const history = useHistory();
    return (
        <div className="cart">
            <h2>Cart</h2>
            <h4>Courese Added: {cart.length}</h4>
            <h5>Total: ${total}</h5>
            <button className="btn-regular" onClick={handlePlaceOrder}>
                Place Order
            </button>
        </div>
    );
};

export default Cart;
