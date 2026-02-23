

const mongoose=require('mongoose');


const appointmentScheme= new mongoose.Schema({
    docid:{type:String,require:true},
    name:{type:String,require:true},
    speciality:{type:String,require:true},
    date:{type:String,require:true},
    time:{type:Number,require:true}


})

const Appointmentsmodel=mongoose.model("appointments",appointmentScheme)


module.exports=Appointmentsmodel