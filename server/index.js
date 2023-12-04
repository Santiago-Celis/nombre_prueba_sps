import { config } from "dotenv";
import app from "./app.js";
import { conexion } from "./db.js";

const PORT = 5000
config();
conexion();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
