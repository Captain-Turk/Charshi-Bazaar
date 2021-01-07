import React from "react";

const CartItem = (props) => {
  const { product_id, quantity, imgurl, price, name } = props.cartInfo;
  return (
    <div className="cart-item">
      {console.log("cartItem", props.cartInfo)}
      <img src={imgurl} alt="product-pic" />
      <div>
        <p>{name}</p>
        <p>{quantity}</p>
        <p>${price}</p>
        <div className="button-hold">
          {/* <input
            onChange={() => props.changeQuantity(product_id, { quantity })}
          ></input> */}
          <button onClick={() => props.removeFromCart(product_id)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
