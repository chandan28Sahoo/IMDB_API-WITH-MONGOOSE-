const mongoose = require("mongoose");

module.exports = mongoose.connect('mongodb://localhost:27017/imdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
    },(err , link)=>{
        if (err) throw err;
    console.log("DB connect success....")
});
