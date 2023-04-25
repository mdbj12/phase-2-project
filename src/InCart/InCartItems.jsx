import React from 'react';

const InCart = ({cartEle}) => {
    return (
        <div>
            <h1>In Cart</h1>
            <h2>
                {cartEle.name}
                ${cartEle.price}
            </h2>
        </div>
    )
}

export default InCart;