import { config } from 'dotenv';
config();

import express from 'express';
import { Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import ProductsRoute from './routes/products.routes';

export async function app() {

    const app = express();

    //SETTINGS
    app.set('port', process.env.PORT || 3000);

    //MIDDLEWARES
    app.use(cors());
    app.use(morgan('dev'));

    //ROUTES
    app.use('/api/products', ProductsRoute);

    app.use((req:Request, res:Response) => {
        res.status(404).json({ message: 'Page not found' });
    })

    //START_SERVER
    await app.listen(app.get('port'));
    console.log(`Server listening on port ${app.get('port')}`);

}