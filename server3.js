// const express = require("express")
// const app = express()
// const mongoose = require("mongoose")
// const orderPhone = new Promise((resolve,reject)=>{
//   let paymentsuccessful = false;
//   if(paymentsuccessful){
//     resolve("phone delivered")
//   }
//   else{
//     reject("phone is not Delivered or it has been stolen")
//   }
// })
// // orderPhone.then((result)=>{
// //   console.log(result)
// // }).catch((err)=>{
// //   console.log(err)
// // })

// const connectDB = async()=>{
//   try{
//     await mongoose.connect("mongodb://localhost:27017/glaLearnings")
//     console.log("mongooseDb is connect")


//   }catch(error){
//     console.log(err.message)
//   }
// }
// connectDB()
// app.listen(3000,()=>{
// console.log("server on")
// })

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const orderPhone = new Promise((resolve, reject) => {
    let paymentSuccessful = false;

    if (paymentSuccessful) {
        resolve("Phone Delivered");
    } else {
        reject("Phone is not delivered or it has been stolen");
    }
});

// Promise
orderPhone
    .then((result) => {
        //console.log(result);
    })
    .catch((err) => {
       // console.log(err);
    });

// MongoDB Connection
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/glaLearnings");
        //console.log("MongoDB Connected");
    } catch (error) {
        //console.log(error.message);   // ✅ Correct
    }
};

connectDB();

app.listen(3000, () => {
  console.log("Server on ");
});