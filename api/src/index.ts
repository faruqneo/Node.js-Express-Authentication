import express from 'express'
import mongoose from 'mongoose'
import session from 'express-session'
import Redis from 'ioredis'
import connectRedis from 'connect-redis'
import { REDIS_OPTIONS, SESSION_OPTIONS, APP_PORT, MONGO_URL, MONGO_OPTIONS } from './config'

    ; (async () => {
        await mongoose.connect(MONGO_URL, MONGO_OPTIONS)
        const RedisStore = connectRedis(session)
        const client = new Redis(REDIS_OPTIONS)

        const app = express()

        app.use(
            session({
                ...SESSION_OPTIONS,
                store: new RedisStore({ client })
            })
        )


        app.get('/', (req, res) => res.json({ message: 'OK' }))

        app.listen(APP_PORT, () => console.log(`http://localhost:${APP_PORT}`))
    })()