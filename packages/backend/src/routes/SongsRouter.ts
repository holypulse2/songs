import { Router } from 'express';
import { get } from '../controllers/IndexController';

const SongsRouter = Router();

SongsRouter.get('/getsongs/:searchTerm&:pageNumber&:pageLimit', get);

export default SongsRouter;
