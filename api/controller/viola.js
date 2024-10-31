
const Pariswisata = require("../model/pariswisata");

const createPariswisata = (req, res) => {
    const pariswisata = new Pariswisata({
        nama : req.body.nama,
        tempat : req.body.tempat,
        kendaraan : req.body.kendaraan
    });

    console.log(pariswisata);
    pariswisata.save()
    .then((createdPariswisata)=>{
        res.status(201).json({
            message : "Data berhasil disimpan",
            pariswisataId : createdPariswisata._id
        });
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).json({
            message : "internal server error",
           // error : err
        });

    });
    
};
module.exports = {createPariswisata};