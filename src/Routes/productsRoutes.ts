import {Router } from 'express'
import {addProduct, searchProducts,} from '../Controllers/productsControllers'

const productsRouter = Router()

productsRouter.post("", addProduct)
productsRouter.get("", searchProducts)


export default productsRouter