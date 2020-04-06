import mongoose from 'mongoose'
import session from 'express-session'
import Redis from 'ioredis'
import connectRedis from 'connect-redis'
import { REDIS_OPTIONS, APP_PORT, MONGO_URL, MONGO_OPTIONS } from './config'
import { createApp } from './app';

(async () => {
    try {
        const message = `Server is running on PORT:${APP_PORT}.`
        await mongoose.connect(MONGO_URL, MONGO_OPTIONS)
        const RedisStore = connectRedis(session)
        const client = new Redis(REDIS_OPTIONS)
        const store = new RedisStore({ client })
        const app = createApp(store)
        app.listen(APP_PORT, () => console.log(message, "\nConnection has been established successfully."))
    } catch (error) {
        console.error('Unable to connect with db.')
    }
})()