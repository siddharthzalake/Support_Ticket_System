import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import ticketRoutes from "../Backend/routes/TicketRoute.js";

dotenv.config();

const app = express();

// Connect database
connectDB();

// Middleware
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Routes
app.use("/api/tickets", ticketRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
