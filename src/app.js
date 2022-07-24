import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/user.routes.js";

const app = express();

dotenv.config();

app.use(express.json());

app.use(userRoute);

export default app;
