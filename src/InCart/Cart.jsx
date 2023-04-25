import React from 'react';
import InCart from './InCartItems';

const Cart = ({cartItems}) => {
    const renderCart = cartItems.map((cartEle) => {
        return <InCart cartEle={cartEle} key={cartEle.id} />
    })
    return (
        <div>
            <h1>{renderCart}</h1>
        </div>
    )
}

export default Cart;