import express from "express";
import cors from "cors";
import { config } from "dotenv";
import userRoute from "./routes/userRoute.js";

export const app = express();

config({
  path: "./DB/config.env",
});

app.use(express.json());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Server is runnig successully");
});

app.use("/api/user", userRoute);
