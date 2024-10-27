import { Router } from 'express';
import { listCategories } from './app/useCases/categories/listCategories';

export const router = Router();

//List Categories
router.get('/categories', listCategories);

//Create Category
router.post('/categories', (req, res) => {
});

//List Products
router.get('/products', (req, res) => {
});

//Create Product
router.post('/products', (req, res) => {
});

//Get Products by category
router.get('/categories/:categoryId/products', (req, res) => {
});

//List Orders
router.get('/orders', (req, res) => {
});

//Create Order
router.post('/orders', (req, res) => {
});

//Change order status
router.patch('/orders/:orderId', (req, res) => {
});

//Delete/cancel Order
router.delete('/orders/:orderId', (req, res) => {
});
