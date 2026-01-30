const Appointmentsmodel=require('../models/models.Appointements')


const getAppointment=async (req,res)=>{
    try{
        const {docid,name,speciality,date,time}=req.body
        const app=new Appointmentsmodel({docid,name,speciality,date,time})
        
         if (await app.save()){
            res.send("appointment has been booked")
            console.log({docid,name})
         }
        
        }catch(error){
            res.json({success:false,message:error.message})
        }
}


module.exports=getAppointment