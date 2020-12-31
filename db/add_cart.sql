INSERT INTO cart(
    cart_id, 
    product_id,
    quantity,
    total 
)

VALUES
($1, $2, $3, $4);

SELECT * FROM cart
WHERE cart_id = $1;