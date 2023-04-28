import React, { useState } from 'react';
import './InCart.css';

const InCart = ({cartEle, handleDelete}) => {

    const [amount, setAmount] = useState(cartEle.amount)
    const handleAmount = () => {
        setAmount(amount + 1)
        fetch(`http://localhost:3005/Cart/${cartEle.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify({amount})
        })
        .then(res => res.json())
        .then(data => (data))
    }

    const del = () => {
        fetch(`http://localhost:3005/Cart/${cartEle.id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(() => handleDelete(cartEle.id))
    }

    return (
        <div className='inCart'>
            <h1>
                {cartEle.name}
                <br/>
                 Total Price: ${cartEle.price * amount}
                <br/>
                <button onClick={handleAmount} className='button'>
                    In Cart: {amount}
                </button>
            </h1>
            <button onClick={del} className='button'>
                Remove Item
            </button>
        </div>
    )
}

export default InCart;