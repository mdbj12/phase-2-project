import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import Menu from './Menu/Menu';
import NavBar from './NavBar/NavBar';
import Cart from './InCart/Cart'

function App(){

    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('http://localhost:3005/Items')
        .then(res => res.json())
        .then(data => setItems(data))
    }, [])

    const [cartItems, setCartItems] = useState([])
    useEffect(() => {
        fetch('http://localhost:3005/Cart')
        .then(res => res.json())
        .then(data => setCartItems(data))
    }, [])

    const updateCart = (arg1) => {
        setCartItems([...cartItems, arg1])
    }

    const handleDelete = (removeItem) => {
        const deleteButton = cartItems.filter(del => {
            return del.id !== removeItem
        })
        setCartItems(deleteButton)
    }

    return (
        <div>
            <BrowserRouter>
            <NavBar />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='Menu' element={<Menu items={items} updateCart={updateCart} />} />
                    <Route path='Cart' element={<Cart cartItems={cartItems} handleDelete={handleDelete} />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;