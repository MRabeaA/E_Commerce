import mongoose from 'mongoose'
const dbConnect = mongoose.connect('mongodb://127.0.0.1:27017/E_Commerce').then(()=>{
    console.log ("Connected IS Successfully ............")
}).catch((err)=>{
    console.log("Connected Is Faild ....." , err.message)
})


export default dbConnect