import React from "react";
import './MenuItems.css';

const MenuItems = ({item, updateCart}) => {

    const handleClick = () => {
        const inCart = {
            name: item.name,
            price: item.price,
            amount: item.amount
        }
        fetch('http://localhost:3005/Cart', {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(inCart)
        })
        .then((res) => res.json())
        .then((data) => updateCart(data))
    }
    
    return (
        <div className="items">
            <h2>
                <p>
                    {item.name}
                    <br/>
                    ${item.price}
                    <br/>
                </p>
                <button onClick={handleClick} className="button">
                    Add to Cart
                </button>
            </h2>
        </div>
    )
}

export default MenuItems;