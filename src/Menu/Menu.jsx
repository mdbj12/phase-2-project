import React from 'react';
import Items from './MenuItems';

const Menu = ({items}) => {
    const renderItems = items.map((item)=> {
        return <Items item={item} key={item.id} />
    })
    return (
        <div>
            {renderItems}
        </div>
    )
}

export default Menu;