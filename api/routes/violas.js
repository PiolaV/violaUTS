var express = require('express');
var router = express.Router();

const violacontroller  = require("../controller/viola");
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond dari pariswisata router');
//  });

// format json
// router.post('path', (req, res)=>{
//     res.status()
// })

// insert 
router.post('/', violacontroller.createPariswisata);

module.exports = router;

