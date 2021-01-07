INSERT INTO cart(
    cart_id,
    product_id,
    quantity
)

VALUES
($1, $2,$3);

SELECT * FROM cart
-- WHERE cart_id = $1;