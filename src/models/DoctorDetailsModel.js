const mongoose = require("mongoose")

const dataSchema =  mongoose.Schema({
    userId: {type:mongoose.Schema.Types.ObjectId, required: true},
    brunchId: {type:mongoose.Schema.Types.ObjectId, required: true},
    specialization: {type: String},
    qualifications: {type: String},
    experience: {type: Number},
    chamberLocation: {type: Number},
    availableDays: [String],
    availableDays: [String],
    availableTime: {
        start: String,
        end: String
    },
    fee: {type: Number},
    educationDetails: {type: String},
    exDetails: {type: String},

}, {timestamps:true, versionKey:false});


const DoctorDetailsModel = mongoose.model("doctorDetails", dataSchema );
module.exports = DoctorDetailsModel