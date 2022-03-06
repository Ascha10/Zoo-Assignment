const mongoose = require('mongoose')
const { isEmail } = require('validator');


const EmployeeSchema = new mongoose.Schema({
    employeeName:{
        type: String,
        unique: true,
        required:  [true,'employeeName is required'] 
    },
    job:{
        type: String,
        required : [true,'job is required'] 
    },
    email: {
        type: String,
        required: [true,'email is required'] ,
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    phoneNumber:{
        type: String,
        required : [true,'phoneNumber is required']
    }    
},{ timestamps: true }
)

const Employee = mongoose.model('Employee',EmployeeSchema);

module.exports = Employee;