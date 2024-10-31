const mongoose = require("mongoose");

const pariswisataSchema = new mongoose.Schema({
    nama : {type : String, required : true},
    tempat : {type : String, required : true},
    kendaraan : {type : String, required : true}



});


module.exports = mongoose.model("Pariswisata", pariswisataSchema);
