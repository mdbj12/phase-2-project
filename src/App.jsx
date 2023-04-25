import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import Menu from './Menu/Menu';
import NavBar from './NavBar/NavBar';
import Cart from './InCart/Cart'
import Login from './Login/Login';

function App(){

    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('http://localhost:3005/items')
        .then(res => res.json())
        .then(data => setItems(data))
    }, [])

    const [cartItems, setCartItems] = useState([])
    useEffect(() => {
        fetch('http://localhost:3005/cart')
        .then(res => res.json())
        .then(data => setCartItems(data))
    }, [])

    return (
        <div>
            <BrowserRouter>
            <NavBar />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='Menu' element={<Menu items={items} />} />
                    <Route path='Cart' element={<Cart cartItems={cartItems} />} />
                    <Route path='Login' element={<Login />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;