import React from "react";

function Product(props) {
  let { product_id, imgUrl, name, price, description } = props.product;
  const details = description.map((info) => <li key={info.index}>{info}</li>);

  return (
    <div className="product-list">
      <div className="product-box" key={product_id}>
        <img className="product-image" alt={name} src={imgUrl} />
        <h2 id="product-name">{name}</h2>
        <h2 id="product-price">{price}</h2>
        <ul>{details}</ul>
        <div className="product-buttons">
          <button onClick={() => props.addToCart(product_id)}>
            Add to Basket
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
