const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const listingSchema=new Schema({
    
    title:{
        type:String,
        required:true,
    } ,
    description:String,


    image:{
        type:String,
       
        default:"https://unsplash.com/photos/a-bird-that-is-sitting-in-the-water-TAf212gdprY",
        set: (v) => v==="" ? "https://unsplash.com/photos/a-bird-that-is-sitting-in-the-water-TAf212gdprY" :v,
        },



    price:Number,
    location:String,
    country:String,
});
const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;