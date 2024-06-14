import { Request, Response } from 'express'
import mssql from 'mssql';
import { v4 as uid } from 'uuid'
import { sqlConfig } from '../Config'
import { productsRequest } from '../Models/productsModels'

export async function addProduct(request: productsRequest, response: Response): Promise<void> {
    try {
        const id = uid()
        const { name, price } = request.body

        console.log('Request body:', request.body)
        console.log(`Adding product with id: ${id}, name: ${name}, price: ${price}`)

        const pool = await mssql.connect(sqlConfig)
        await pool.request()
            .input('id',  id)
            .input('name', name)
            .input('price',  price)
            .execute('addProduct')

        response.status(200).send({ message: "Product added successfully" })
    } catch (error) {
        console.error('Error adding product:', error)
        response.status(500).send({ message: "Internal Server Error", error: (error as Error).message })
    }
}

export async function searchProducts(request: Request, response: Response) {
    try {
        const { name } = request.query
        const pool = await mssql.connect(sqlConfig)
        const result = await pool.request()
         .input('name', name)
         .execute('searchProducts')
        response.json(result.recordset)
    } catch (error) {
        response.status(500).send(error)
    }
}
