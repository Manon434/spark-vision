import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", contactRoutes);

const connectDB = async () => {

  try {

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Atlas Connected");

  } catch (error) {

    console.error("MongoDB connection error:", error);

    process.exit(1);

  }

};

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`);

});