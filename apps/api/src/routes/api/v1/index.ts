import { Router } from 'express';
import auth from '@/middleware/auth';

import authRouter from './auth';
import organizationRouter from './organization';
import gameRouter from './game';
import userRouter from './user';
import streamRouter from './stream';
import broadcastRouter from './broadcast';
import subscriptionRouter from './subscription';
import teamRouter from './team';
import donation from './donation';
import event from './event';

const router = Router();

router.use('/auth', authRouter);

router.use('/organization', [auth], organizationRouter);

router.use('/game', [], gameRouter);
router.use('/user', [auth], userRouter);
router.use('/stream', [auth], streamRouter);
router.use('/team', [auth], teamRouter);
router.use('/subscription', [auth], subscriptionRouter);
router.use('/broadcast', [auth], broadcastRouter);
router.use('/donate', [auth], donation);
router.use('/event', event);

export default router;
