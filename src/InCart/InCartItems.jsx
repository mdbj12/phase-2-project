import React, { useState } from 'react';

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
        <div>
            <h1>In Cart</h1>
            <h2>
                {cartEle.name}
                <br/>
                 Total Price: ${cartEle.price * amount}
                <br/>
                <button onClick={handleAmount} >
                    In Cart: {amount}
                </button>
            </h2>
            <button onClick={del} >
                Remove Item
            </button>
        </div>
    )
}

export default InCart;