import express, {json} from 'express'
import productsRouter from './Routes/productsRoutes'



const app = express()   // initialize the application

app.use(json())          //add a body to the requests

// add all the middlewares and urls
app.use("/products",productsRouter)



// start the application
app.listen(4000,()=>{
    console.log('Server Running..')
})