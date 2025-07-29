const mongoose = require("mongoose")

const dataSchema =  mongoose.Schema({
    userId: {type:mongoose.Schema.Types.ObjectId, required: true},
    age: {type: Number},
    phone: {type: String},
    address: {type: String},
    bloodGroup: {type: String},
    gender: {type: String, enum: ["male", "female", "other"]},
    emergencyContact: {
        name: String,
        phone: String,
    },


}, {timestamps:true, versionKey:false});

const PatientDetailsModel = mongoose.model("patientDetails", dataSchema );
module.exports = PatientDetailsModel