INSERT INTO orders(
    order_id,
    cart_id,
    customer_name,
    customer_address,
    order_date_time,     
    total 
)

VALUES
($1, $2, $3, $4, $5, $6);

SELECT * FROM order
WHERE order_id = $1;