import dotenv from 'dotenv'
import { prototype } from 'events';
dotenv.config();
export default{
    MONGO_DATABASE: process.env.MONGO_DATABASE || 'influencerdb',
    MONGO_USER: process.env.MONGO_USER || 'admin',
    MONGO_PASSWORD: process.env.MONGO_PASSWORD || 'admin1234',
    MONGO_HOST: process.env.MONGO_HOST || 'prueba-tecnica.q3kph.mongodb.net/influencerdb?retryWrites=true&w=majority',
    PORT: process.env.PORT || 3000
}
