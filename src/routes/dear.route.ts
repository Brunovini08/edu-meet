import { Router } from 'express';
import DearController from '../controllers/dear.controller';

export default function DearRoutes() {
  const router = Router()
  router.post('/register', DearController.registerDear)
}