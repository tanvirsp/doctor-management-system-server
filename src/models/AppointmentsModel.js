const mongoose = require("mongoose")

const dataSchema =  mongoose.Schema({
    patientId: {type:mongoose.Schema.Types.ObjectId, required: true},
    doctorId: {type:mongoose.Schema.Types.ObjectId, required: true},
    appointmentDate: {type: Date},
    serial: {type: Number},
    time: {type: String},
    note: {type: String},

}, {timestamps:true, versionKey:false});


const AppointmentsModel = mongoose.model("appointments", dataSchema );
module.exports = AppointmentsModel