import { Router} from 'express';
import {insertRestaurant, getRestaurants, deleteRestaurant} from '../controllers/restaurants.controller.js'

const restaurantsRoutes = Router();

// api restaurants
restaurantsRoutes.post('/', insertRestaurant);
restaurantsRoutes.get('/', getRestaurants);
restaurantsRoutes.delete('/:id', deleteRestaurant);
export default restaurantsRoutes;