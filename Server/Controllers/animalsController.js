const Animal = require('../Models/Animal');

let getAnimals = async (req,res) => {
   await Animal.find({}).then((data) => {
        res.send(data)
})};

let getAnimalById = async (req,res) => {
   await Animal.findOne(req.params.id).then((data) => {
        res.send(data)
})};


let addAnimals = async (req,res) => {
   await Animal.create(req.body).then((data) => { 
    res.send(data)
})};


let updateAnimals = async (req,res) => {
   await Animal.findByIdAndUpdate({_id : req.params.id},req.body).then(() => {
        Animal.findOne({_id : req.params.id}).then((data) => {
            res.send(data)
        })
})};

let deleteAnimals = async (req,res) => {
   await Animal.findByIdAndRemove({_id : req.params.id}).then((data) => {
        res.send(data)
})};



module.exports = {
    getAnimals,
    getAnimalById,
    addAnimals,
    updateAnimals,
    deleteAnimals
};


