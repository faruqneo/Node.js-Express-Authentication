import { Request, Response, NextFunction } from 'express';
import { isLoggedIn } from '../auth'


export const guest = (req: Request, res: Response, next: NextFunction) => {
    if (isLoggedIn(req)) {
        return next(new Error('You are alredy logged in'))
    }

    next()
}