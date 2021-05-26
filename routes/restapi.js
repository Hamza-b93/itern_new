const express = require("express");
const router = express.Router();

router.get('/', function (req, res) {
  res.status(200).json(
    {
      Success: "The route is working!"
    }
  );
});

module.exports = router;
