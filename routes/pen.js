const express = require('express');
const router = express.Router();

router.get('/pen', (req, res, next) => {
  res.render('pen', { title: 'Pen' });
});

module.exports = router;
