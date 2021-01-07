DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS cart;
DROP TABLE IF EXISTS product;
DROP TABLE IF EXISTS categories;

CREATE TABLE categories(
    category_id SERIAL PRIMARY KEY,
    category_name VARCHAR(20) NOT NULL
);

INSERT INTO categories
(category_name)
VALUES
('Apparel'), ('Accesories'), ('Headwear'), ('Prize Items'), ('Packages');


CREATE TABLE product(
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    imgUrl TEXT NOT NULL,
    description TEXT [],
    price NUMERIC NOT NULL,
    size VARCHAR(3), 
    category_id INTEGER REFERENCES categories (category_id),   
    gender VARCHAR(10),
    available_quantity INTEGER NOT NULL


);

CREATE TABLE cart(
    cart_id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES product(product_id),
    quantity INTEGER,
    total NUMERIC (6, 2)

);

CREATE TABLE orders(   
    order_id SERIAL PRIMARY KEY,
    cart_id INTEGER REFERENCES cart(cart_id),
    customer_name VARCHAR(50) NOT NULL,
    customer_address VARCHAR(100) NOT NULL,
    order_date_time TIMESTAMPTZ NOT NULL DEFAULT NOW(),     
    total NUMERIC (6, 2)
);




INSERT INTO product(
    name ,
    imgUrl,
    description,
    price,
    size,
    category_id,
    gender,
    available_quantity
)
VALUES
('Men''s Gray Tee',
'https://static.wixstatic.com/media/1f6a5f_abe61bdda6f84ea89b2c0d37179834b8~mv2_d_3744_5616_s_4_2.jpg/v1/fill/w_459,h_689,al_c,q_85,usm_0.66_1.00_0.01/1f6a5f_abe61bdda6f84ea89b2c0d37179834b8~mv2_d_3744_5616_s_4_2.webp',
 ARRAY ['Next Level - Premium Fitted CVC Crew - 6210', 'Fabric laundered, 4.3 oz., 60/40 combed ringspun cotton/polyester, 32 singles', 'Set-in CVC 1x1 baby rib collar','Tearaway label'],
11,
'M',
1,
'MALE',
50
),
('DevMountain Wooden Key Chain - Phoenix',
'https://static.wixstatic.com/media/1f6a5f_f67890d1e0314c5283531048ec61d3da~mv2.png/v1/fill/w_689,h_689,al_c,q_90,usm_0.66_1.00_0.01/1f6a5f_f67890d1e0314c5283531048ec61d3da~mv2.webp',
ARRAY ['2" - Engraved Hardwood Keychains - USA-Made'],
5,
'N/A',
2,
'UNISEX',
35
),
(
'DevMountain Women''s Tank',
'https://static.wixstatic.com/media/1f6a5f_26d006e459d74aa4b29901cb95bd4dc9~mv2.png/v1/fill/w_388,h_689,al_c,q_90,usm_0.66_1.00_0.01/1f6a5f_26d006e459d74aa4b29901cb95bd4dc9~mv2.webp',
ARRAY ['Women’s Ideal Colorblocked Racerback Tank', '4.0 oz., 60/40 combed ring-spun cotton/polyester', 'Front and back colorblocking ', 'Self-fabric binding matches color of back panel', 'Curved hem ', 'Side seams', 'Tearaway label'],
18,
'S',
1,
'FEMALE',
40
),
(
'DevMountain Beanie',
'https://static.wixstatic.com/media/1f6a5f_9bf30d57bbdf485d8d32def0ded7e027~mv2_d_3744_5616_s_4_2.jpg/v1/fill/w_459,h_689,al_c,q_85,usm_0.66_1.00_0.01/1f6a5f_9bf30d57bbdf485d8d32def0ded7e027~mv2_d_3744_5616_s_4_2.webp',
ARRAY [''],
10,
'N/A',
3,
'UNISEX',
25
)


