const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  res.send("login Route Working!");
});

router.post('/', function (req, res) {
  res.setHeader('Set-Cookie', 'loggedIn = true; HTTPOnly');
  req.session.isWorking = true;
  res.write("POST Login Route Working!");
  console.log(req.session);
  res.send();
});

module.exports = router;
