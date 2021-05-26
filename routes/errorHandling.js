const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  console.log("error handling post route working!");
  try {
    const value = await req.body.value;
    if (value === '1') {
      console.log("Value id: 1");
    }
    else {
      console.log("value id != 1");
    }
  }
  catch(error) {
    res.write(error);
  }
  res.send();
});

module.exports = router;
