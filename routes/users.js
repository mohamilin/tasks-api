const express = require("express");

const Auth = require("../middlewares/authentication");
 
const router = express.Router();

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.json({message:"respond with a resource"});
});


module.exports = router;
