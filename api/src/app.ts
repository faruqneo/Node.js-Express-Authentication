import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan'; // log requests to the console (express4)
import helmet from 'helmet'; // Security
import session, { Store } from 'express-session'
import { SESSION_OPTIONS } from './config'
import { register } from './routes'
import { internalServerError, notFound } from './middleware';

export const createApp = (store: Store) => {
    const app = express();
    app.use(helmet())
    app.use(morgan('dev'))
    app.use(express.json()) // parse application/json
    app.use(
        session({
            ...SESSION_OPTIONS,
            store
        })
    )
    app.use(register)
    app.use(internalServerError)
    app.all('*', notFound)
    return app;
}
