const mongoose = require('mongoose');

const AnimalSchema = new mongoose.Schema({

    animalName: {
        type: String,
        unique: true,
        required: [true, 'animalName is required']
    },
    cageNumber: {
        type: Number,
        required: [true, 'cageNumber is required']
    },
    birthOfDate: {
        type: Date,
        required: [true, 'birthOfDate is required']
    },
    gender: {
        type: String,
        required: [true, 'gender is required']
    },
    breed: {
        type: String,
        required: [true, 'breed is required']
    }
},
    { timestamps: true }
)

const Animal = mongoose.model("Animal", AnimalSchema);

module.exports = Animal;