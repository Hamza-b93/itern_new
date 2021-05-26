const express = require ('express');
const router = express.Router();

router.get("/", (req, res) => {
  res.write("Welcome To Root Route!");
  res.send();
});

module.exports = router;
