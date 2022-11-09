import { Router } from 'express';

import { 
    products, 
    product, 
    editProduct 
} from '../controllers/products.controller';

const router = Router();

router.route('/')
    .get(products)

router.route('/:product_name')
    .get(product)

router.route('/:id')
    .patch(editProduct)

export default router;