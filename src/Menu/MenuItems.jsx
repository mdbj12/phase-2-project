import React from "react";

const Items = ({item}) => {
    return (
        <div>
            <h1>
                {item.name}
                <p>
                    ${item.price}
                </p>
                <button>
                    Add to Cart
                </button>
            </h1>
        </div>
    )
}

export default Items;