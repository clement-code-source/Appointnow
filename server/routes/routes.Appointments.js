const express = require("express");

const  findAppointments  = require("../controller/controller.Myappointments");
const getAppointment = require("../controller/controller.Appointments");

const router = express.Router();

router.post("/appointment", getAppointment);
router.get('/myappointments',findAppointments)

module.exports=router
