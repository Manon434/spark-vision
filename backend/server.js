import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();


// CORS (allow frontend + local development)
app.use(cors({
origin: [
"https://spark-vision-gamma.vercel.app",
"http://localhost:5173"
]
}));


// middleware
app.use(express.json());


// test route
app.get("/", (req,res)=>{
res.send("Spark Vision API running");
});


// API routes
app.use("/api", contactRoutes);


// MongoDB connection
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


// start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
