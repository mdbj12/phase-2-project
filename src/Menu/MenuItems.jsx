import React from "react";

const Items = ({item}) => {

    const handleClick = () => {
        const inCart = {
            name: item.name,
            price: item.price
        }
        fetch('http://localhost:3005/cart', {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(inCart)
        })
        .then((res) => res.json())
        .then((data) => data)
    }

    return (
        <div>
            <h1>Drinks</h1>
            <h2>
                <p>
                    {item.name}
                    ${item.price}
                </p>
                <button onClick={handleClick} >
                    Add to Cart
                </button>
            </h2>
        </div>
    )
}

export default Items;