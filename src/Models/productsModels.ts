import {Request} from 'express'

export interface product{
    id: string,
    name: string,
    price:number,
}

export interface productsRequest extends Request{
    body:{
        name: string,
        price: number,
    }
}