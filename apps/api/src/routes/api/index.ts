import { Router } from 'express';
import v1Router from './v1';
import 'express-async-errors';

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.use('/v1', v1Router);

export default router;
