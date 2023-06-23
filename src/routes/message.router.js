import { Router } from 'express';
import { createMessage, deleteMessageById } from '../controllers/message.controller.js';

const router = Router();

router.post('/messages', createMessage);
router.delete('/:messageId', deleteMessageById);

export { router };