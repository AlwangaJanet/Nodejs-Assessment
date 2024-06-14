USE Assessment;
GO
CREATE OR ALTER PROCEDURE searchProducts
    @name varchar(255)
AS
BEGIN
    SELECT * FROM products
    WHERE Name LIKE '%' + @name + '%'
END
GO