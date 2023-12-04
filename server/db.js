import mongoose from "mongoose"
import { config } from "dotenv";

export const conexion = async () => {
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log("CONEXION CORRECTA")
    } catch (error) {
        console.log(`Error: ${error.messsage}`);        
    }
}

export default conexion