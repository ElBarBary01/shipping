import express from 'express'
import { getById, getShipments, postShipments, updateShippingStatus } from '../controller/shipping/Shipping.js';

const router = express.Router();

router.get('/', getShipments)
router.get('/:id', getById)
router.post('/', postShipments)
router.patch('/:id', updateShippingStatus)

export default router;