import express, {json} from 'express';
import morgan from 'morgan';

//importing routes
import restaurantsRoutes from './routes/restaurants.js'

//initialization
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(json());

//routes
app.use('/restaurants',restaurantsRoutes);

export default app;

