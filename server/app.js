import express from "express";
import morgan from "morgan";
import userRoutes from "./src/routes/user.routes.js"
import noteRoutes from "./src/routes/note.routes.js"

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use("/api", userRoutes)
app.use("/api", noteRoutes)

export default app
