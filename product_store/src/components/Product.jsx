import React, { useState } from 'react';
import { Cart } from './Cart';

export const Product = () => {
    const products = [
        {id: 1, name: 'Product-1', price:100, quantity: 0},
        {id: 2, name: 'Product-2', price:200, quantity: 0},
        {id: 3, name: 'Product-3', price:300, quantity: 0},
    ];

    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        const updatedCart = [...cart];
        const index = updatedCart.findIndex(item => item.id === product.id);
        if (index !== -1) {
            updatedCart[index].quantity += 1;
        } else {
            updatedCart.push({...product, quantity: 1});
        }
        setCart(updatedCart);
    };

    const handleRemoveProduct = (product) => {
        const updatedCart = [...cart];
        const index = updatedCart.findIndex(item => item.id === product.id);
        if (index !== -1 && updatedCart[index].quantity > 0) {
            updatedCart[index].quantity -= 1;
        }
        setCart(updatedCart);
    };

    const getQuantity = (productId) => {
        const product = cart.find(item => item.id === productId);
        return product ? product.quantity : 0;
    };

    return (
        <div className='container'>
        <div className='productDetails'>
            <p>Products</p>
            {products.map(product => (
                <div key={product.id} className='my-product'>
                    <span>{product.name}</span>
                    <span>{product.price}</span>
                    <span>
                        <button className="remove-btn" onClick={() => handleRemoveProduct(product)}>-</button>
                        <span className='quantity-btn'>{getQuantity(product.id)}</span>
                        <button className="add-btn" onClick={() => handleAddProduct(product)}>+</button>
                    </span>
                </div>
            ))}
        </div>
         <Cart cartItems={cart}/>
         </div>
    );
};
