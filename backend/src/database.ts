import mongoose from 'mongoose'
import config from './config';

(async () => {
    try{
        const db = await mongoose.connect(`mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}@${config.MONGO_HOST}`);
        console.log('Database is connected to: ', db.connection.name)
    }catch(error){
        console.error(error);
    }
})()
