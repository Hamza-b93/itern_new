const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  req.session.destroy(function(err) {
    console.log("Session Destroyed!");
    console.log(err)
  });
  res.write("Logout POST Route Working!");
  res.send();
});

module.exports = router;
