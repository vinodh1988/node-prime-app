var mongoose=require('mongoose');

var people=mongoose.model('people',mongoose.Schema(
    {
        sno: Number,
        name: String,
        city: String
    }
),'people');

module.exports=people;