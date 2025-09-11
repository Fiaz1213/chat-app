import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectToMongoDB from "./db/connectDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

//Middleware - Parse incoming requests from JSON Payload
app.use(express.json());
app.use(cookieParser());

//Setup Auth Routes
app.use("/api/auth", authRoutes);

//Setup Message Routes
app.use("/api/messages", messageRoutes);

// app.get("/", (req, res) => {
//   // root route http://localhost:5000/
//   res.send("Hello World!");
// });

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
  connectToMongoDB();
});
