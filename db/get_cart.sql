SELECT * FROM cart
join product on cart.product_id = product.product_id
Where cart_id = '1';