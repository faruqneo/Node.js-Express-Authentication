import { ConnectionOptions } from 'mongoose';
const {
    MONGO_DATEBASE = 'neo',
    MONGO_HOST = 'ds121295.mlab.com',
    MONGO_PORT = 21295,
    MONGO_USERNAME = 'admin',
    MONGO_PASSWORD = 'admin1'
} = process.env

export const MONGO_URL = `mongodb://${MONGO_USERNAME}:${encodeURIComponent(MONGO_PASSWORD)}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATEBASE}` 
// `mongodb://${MONGO_HOST}/${MONGO_DATEBASE}` 

export const MONGO_OPTIONS : ConnectionOptions = {  
    useNewUrlParser: true,
    useUnifiedTopology: true
}