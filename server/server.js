const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const appointmentRoutes = require("./routes/routes.Appointments");

app.use("/patient", appointmentRoutes);

app.get("/", (req, res) => {
  res.send("Hello broo");
});

mongoose
  .connect(process.env.MONGOURL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.listen(process.env.PORT, () =>
  console.log("The API is working")
);
