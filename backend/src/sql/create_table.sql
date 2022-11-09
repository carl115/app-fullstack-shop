CREATE TABLE products(
    id INT NOT NULL AUTO INCREMENT PRIMARY KEY,
    product_name VARCHAR(200) NOT NULL,
    product_price INT NOT NULL,
    product_image TEXT NOT NULL,
    units INT NOT NULL
);