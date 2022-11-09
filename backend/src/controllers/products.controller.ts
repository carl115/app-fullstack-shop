import { Request, Response } from 'express';

import { pool } from '../db';

export const products = async (req:Request, res:Response) => {
    const [result] = await pool.query('SELECT * FROM products');

    res.json(result);
}

export const product = async (req:Request, res:Response) => {
    const product_name = req.params.product_name;

    const [result] = await pool.query(
        'SELECT * FROM products WHERE product_name = ?', 
        [product_name]
    );

    res.json(result);
}

export const editProduct = async (req:Request, res:Response) => {
    const id = req.params.id;
    const units = req.query.units;

    await pool.query(
        'UPDATE products SET units = ? WHERE id = ?', 
        [units, id]
    );
    
    res.sendStatus(204);
}