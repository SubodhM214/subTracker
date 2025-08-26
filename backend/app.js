import express from "express";
import cookieParser from "cookie-parser";
import { PORT, CLIENT_URL } from "./config/env.js";
import cors from "cors";

import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import workflowRouter from "./routes/workflow.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import arcjetMiddleware from "./middlewares/acrjet.middleware.js";
const app = express(); //express object

app.use(
  cors({
    origin: process.env.CLIENT_URL, // only allow frontend origin
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // allow cookies if needed
  })
);

//default middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//parse cookie in incoming requests
app.use(cookieParser());

app.use(arcjetMiddleware);

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);
app.use("/api/v1/workflows", workflowRouter);

app.use(errorMiddleware);
app.get("/", (req, res) => {
  res.send("Welcome to subscription-tracker ");
});

app.listen(PORT, async () => {
  console.log(`running on port ${PORT}`);
  await connectToDatabase();
});

export default app;
