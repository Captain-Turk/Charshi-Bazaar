UPDATE cart    
SET product_id = $2, quantity=$3, total=$4
WHERE cart_id =$1
returning *;

-- SELECT * FROM cart
-- WHERE cart_id = $1;