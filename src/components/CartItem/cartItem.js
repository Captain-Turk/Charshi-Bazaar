import React from "react";

const CartItem = (props) => {
  const { product_id, quantity } = props.item;
  return (
    <div className="cart-item">
      <img src={props.item.imgUrl} alt="product-pic"/>
      <div>
        <p>{props.item.name}</p>
        <p>{props.item.quantity}</p>
        <p>${props.item.price}</p> 
        <div className="button-hold">
          <input onChange={() => props.changeQuantity(product_id, { quantity })}></input>
          <button onClick={() => props.removeFromCart(product_id)}>Remove</button>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
