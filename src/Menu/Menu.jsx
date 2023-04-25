import React from 'react';
import Items from './MenuItems';

const Menu = ({items, updateCart}) => {
    const renderItems = items.map((item)=> {
        return <Items item={item} key={item.id} updateCart={updateCart} />
    })
    return (
        <div>
            {renderItems}
        </div>
    )
}

export default Menu;