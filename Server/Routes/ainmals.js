const express = require('express');
const router = express.Router();
const {getAnimals,getAnimalById,addAnimals,updateAnimals,deleteAnimals} = require('../Controllers/animalsController');


router.get('/animals',getAnimals)

router.get('/animals/:id',getAnimalById)

router.post('/animals',addAnimals)

router.put('/animals/:id',updateAnimals)

router.delete('/animals/:id',deleteAnimals)


module.exports = router;
