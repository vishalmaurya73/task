//-------Init function ke liye hai ek bar use krte hai --------------------------------------

const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listing.js");

//---------- main function ---------------------------------------------------------------


const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";



main().then(()=>{
    console.log("connection to DB");
})
.catch(err =>{
    console.error(`Error connecting to db ${err}`);
})



async function main(){
    await mongoose.connect(MONGO_URL);
}

 
const initDB= async () => {
  
  await Listing.insertMany(initData.data);
  console.log("Data was initialized");
};

initDB();