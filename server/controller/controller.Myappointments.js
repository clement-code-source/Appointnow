const appointmentmodel = require('../models/models.Appointements')

const findAppointments = async (req, res) => {
  try {
    const results = await appointmentmodel.find() 
    res.json({ results })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to fetch appointments' })
  }
}

module.exports =  findAppointments 

