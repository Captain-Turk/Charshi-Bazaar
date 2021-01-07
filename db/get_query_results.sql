SELECT * FROM product
WHERE name like '%' || $1 || '%'