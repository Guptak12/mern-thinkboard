import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import rateLimiter from "../middleware/rateLimiter.js";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;


app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.json()); // Middleware to parse JSON request bodies
app.use(rateLimiter);


app.use("/api/notes",notesRoutes);

connectDB().then(()=> {
app.listen(5001, ()=>{
    console.log("Server started on PORT:", PORT);
});
});