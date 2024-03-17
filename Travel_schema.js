const mongoose =require( 'mongoose');

const schema=new mongoose.Schema({
    id:String,   
    TravellerName:String,
    Destination:String,
    ExpenseAmount:String,
    ExpenseDate:String,
});

module.exports=mongoose.model('Travel_schema',schema);