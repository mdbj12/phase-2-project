import React from 'react';
import InCart from './InCartItems';

const Cart = ({cartItems, handleDelete}) => {
    const renderCart = cartItems.map((cartEle) => {
        return <InCart cartEle={cartEle} key={cartEle.id} handleDelete={handleDelete} />
    })
    return (
        <div>
            <h1>{renderCart}</h1>
        </div>
    )
}

export default Cart;