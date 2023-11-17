const mongoose = require('mongoose');

function MongoCient(){

}

MongoCient.prototype.initialize = function() {
    mongoose.connect(process.env.DB_LOCAL)
    .then(() => console.log("DB connected"))
    .catch( (error) =>  {
        console.log("Error occurred")
    })
}

module.exports = new MongoCient()