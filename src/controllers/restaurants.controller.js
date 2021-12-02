import restaurants from '../models/restaurants.js';

export async function getRestaurants(req, res){
    try {
        const rest = await restaurants.findAll();
        res.json({
            data: rest
        });
    } catch (error) {
        res.status(500).json({
            message: "Algo salió mal",
            data: {}
        })
    }
    
}

export async function insertRestaurant(req, res){
    try {
        const {
            id,
            rating,
            name,
            site,
            email,
            phone,
            street,
            city,
            state,
            lat,
            lng
        } = req.body;
        let newRestaurant = await restaurants.create({
            id,
            rating,
            name,
            site,
            email,
            phone,
            street,
            city,
            state,
            lat,
            lng
        }, {
            fields:['id','rating','name','site','email','phone','street','city','state','lat','lng']
        });
        if (newRestaurant) 
            res.json({
                message: "Restaurante insertado correctamente",
                data: newRestaurant
            });
    } catch (error) {
            res.status(500).json({
                message: "Algo salió mal",
                data: {}
            })
        }
    }


export async function deleteRestaurant(req, res){
   try {
    const {id} = req.params;
    const deletedRestaurant = await restaurants.destroy({
        where: {
           id
        }
    });
   } catch (error) {
    res.status(500).json({
        message: "Algo salió mal",
        data: {}
    })
   } 
   
}
