CREATE DATABASE IF NOT EXISTS diamonds_db;
USE diamonds_db;

CREATE TABLE IF NOT EXISTS products (
    id VARCHAR(36) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    image VARCHAR(255),
    image2 VARCHAR(255),
    price DECIMAL(10,2) NOT NULL,
    clarity VARCHAR(50),
    color VARCHAR(50),
    cut VARCHAR(50),
    dimensions VARCHAR(50)
);

INSERT INTO products (id, name, image, image2, price, clarity, color, cut, dimensions) VALUES
('1', 'Round 1.01ct H VS1 EX EX EX Faint', '/placeholder.svg', '/placeholder.svg', 1916.43, 'VS1', 'H', 'Excellent', '6.51 × 3.97'),
('2', 'Oval 1.50ct D IF EX EX None', '/placeholder.svg', '/placeholder.svg', 4250.00, 'IF', 'D', 'Excellent', '7.21 × 4.15'),
('3', 'Princess 2.01ct G VS2 VG VG Faint', '/placeholder.svg', '/placeholder.svg', 3150.75, 'VS2', 'G', 'Very Good', '6.89 × 4.22'),
('4', 'Pear 1.25ct E VVS1 EX EX None', '/placeholder.svg', '/placeholder.svg', 2890.60, 'VVS1', 'E', 'Excellent', '7.02 × 4.11'),
('5', 'Emerald 1.75ct F VS1 EX EX Faint', '/placeholder.svg', '/placeholder.svg', 3475.90, 'VS1', 'F', 'Excellent', '7.15 × 4.08'),
('6', 'Cushion 1.30ct I VVS2 VG EX None', '/placeholder.svg', '/placeholder.svg', 2250.30, 'VVS2', 'I', 'Very Good', '6.75 × 4.01');