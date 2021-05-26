const express = require('express');
const router = express.Router();
const joi = require("joi");

const validationSchema = joi.object({
  username: joi.string().required().min(8).max(20),
  password: joi.string().required().min(12).max(20)
});


router.get('/', function (req, res) {
  console.log("register route working!");
  res.send();
});

router.post('/', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try{
    const validationResult = await validationSchema.validateAsync({ username: username, password:password });
  }

  catch(error){
    console.log(error);
    res.write(error.details[0].message);
  }


  //console.log(error.details[0].message);
  console.log(req.body.username);
  console.log(req.body.password);

  res.send();
});

module.exports = router;
