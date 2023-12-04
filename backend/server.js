import express from "express";
import dotenv from "dotenv";
import Router from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

// We can't put this here:- only these will run on every route
// app.use(notFound);
// app.use(errorHandler);

app.use("/api/user",Router);

app.get("/",(req,res)=>{
    res.send("Hi this is send Response");
})

app.use(notFound);
app.use(errorHandler);

app.listen(port,()=>console.log(`Server is listening on the ${port}`));