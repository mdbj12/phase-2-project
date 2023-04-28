import React from 'react';
import MenuItems from './MenuItems';

const Menu = ({items, updateCart}) => {

    const renderItems = items.map((item)=> {
        return (
            <div>
                <MenuItems item={item} key={item.id} updateCart={updateCart} />
            </div>
        )
    })
    return (
        <div>
            {renderItems}
        </div>
    )
}

export default Menu;