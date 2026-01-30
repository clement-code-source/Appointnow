

const mongoose=require('mongoose');


const appointmentScheme= new mongoose.Schema({
    docid:{type:Number,require:true},
    name:{type:String,require:true},
    speciality:{type:String,require:true},
    date:{type:String,require:true},
    time:{type:Number,require:true}


})

const Appointmentsmodel=mongoose.model("appointment",appointmentScheme)


module.exports=Appointmentsmodel