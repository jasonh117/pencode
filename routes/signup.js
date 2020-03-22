const express = require('express');
const router = express.Router();

router.get('/signup', (req, res, next) => {
  res.render('signup', { title: 'Sign Up' });
});

module.exports = router;
