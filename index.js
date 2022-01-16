import express from "express";
import db from "./config/database.js";
import productRoutes from "./routes/index.js";
const app = express();

try{
    await db.authenticate();//cek koneksi db
    console.log("Database success connected...");
}catch(error){
    console.log("Database error connected... ", error);
}

app.use(express.json());

app.use("/products", productRoutes);

app.listen(8000, ()=> console.log("Server running at port 8000") );