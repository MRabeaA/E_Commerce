import express from "express";
import dbConnect from "./database/dbConnection.js";
import { bootStrap } from "./src/bootstrap.js";

const app = express();
const port =  3000;


app.use(express.json());
app.use(express.static('uploads'))
bootStrap(app)







const startServer = ()=>{app.listen(port,() => {
  try {
    console.log("server is running successfully ......");
  } catch (err) {
    console.log("Connected with Server Failed ...", err);
  }
})}



// Object To Unhandling Error 
process.on('uncaughtException' , (err)=>{

    console.log('error in Code' , err.stack)
})


process.on('unhandledRejection' , (err)=>{

    console.log('error Unhandling ' , err.stack)
})




startServer();