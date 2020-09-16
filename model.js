var mongoose = require('mongoose');

var Schema = mongoose.Schema;  

var userSchema = new Schema({  
    rank:{type:Number},
    title: {type:String},
    year: {type:String},
    rating: {type:String},
    url: {type:String} 
});

var movies = mongoose.model('User', userSchema);

module.exports = movies; 
