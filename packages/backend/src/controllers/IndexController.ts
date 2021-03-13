import { Request, Response, NextFunction } from 'express';
import { getSongs } from '../Services/SongsService';

export async function get(req: Request, res: Response, next: NextFunction) {
    try {
        const { pageLimit, searchTerm, pageNumber } = req.params;
        const data = await getSongs(searchTerm, pageNumber, pageLimit);

        return res.status(200).json(data);
    } catch (err) {
        next(err);
    }
}
