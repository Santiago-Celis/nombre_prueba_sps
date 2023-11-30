import express from "express";
import morgan from "morgan";
import userRoutes from "./src/routes/user.routes.js"


app.use(express.json());
app.use(morgan('dev'));

app.use("/api", userRoutes)

export default app
