import React from 'react'

export const Cart = ({cartItems}) => {

  const calculateTotal = () => {
    const total = cartItems.map(item => item.price * item.quantity).reduce((acc, curr) => acc + curr ,0);
    return total.toFixed(2);
  }
  return (
    <div className='cartDetails'>
        <div className="cart">
        <p>Your Shopping cart</p>
        {cartItems.length > 0 ? cartItems.map(item => (
        item.quantity ? <div key={item.id} className="cartItem" >
            <span>{item.name}</span>
            <span>{`${item.quantity} x ${item.price}`}</span>
        </div> : null
    )): null}
         <div>
           <p>Total : {calculateTotal() > 0 ? calculateTotal(): 0}</p> 
        </div>
    </div>
    </div>
  )
}
