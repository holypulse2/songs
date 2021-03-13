import { Router } from 'express';
import SongsRouter from './SongsRouter';

const router: Router = Router()

router.use(SongsRouter);
export default router
