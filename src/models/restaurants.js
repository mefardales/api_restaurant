import Sequelize from 'sequelize';
import {sequelize} from '../database/database.js'

const restaurants = sequelize.define('restaurants',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    rating: {
        type: Sequelize.INTEGER,
        min: 0,
        max: 5
    },
    name: {
        type: Sequelize.TEXT
    },
    site: {
        type: Sequelize.TEXT
    },
    email: {
        type: Sequelize.TEXT
    },
    phone: {
        type: Sequelize.TEXT
    },
    street: {
        type: Sequelize.TEXT
    },
    city: {
        type: Sequelize.TEXT
    },
    state: {
        type: Sequelize.TEXT
    },
    lat: {
        type: Sequelize.FLOAT
    },
    lng: {
        type: Sequelize.FLOAT
    }
}, {
    timestamps: false
});

export default restaurants;