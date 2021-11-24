UPDATE northwind.order_details
SET discount = 45
WHERE id BETWEEN 30 AND 40 AND unit_price > 10.0000;
