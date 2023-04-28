import React from 'react';
import MenuItems from './MenuItems';

const Menu = ({items, updateCart}) => {

    const renderItems = items.map((item)=> {
        return (
            <MenuItems item={item} key={item.id} updateCart={updateCart} />
        )
    })
    return (
        <div>
            {renderItems}
        </div>
    )
}

export default Menu;