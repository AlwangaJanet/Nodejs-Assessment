USE Assessment;

GO
CREATE OR ALTER PROCEDURE addProduct (
    @id VARCHAR(255),
    @name VARCHAR(255),
    @price INT
)
AS 
BEGIN 
INSERT INTO products(id, name,price)
VALUES (@id, @name,@price)
END