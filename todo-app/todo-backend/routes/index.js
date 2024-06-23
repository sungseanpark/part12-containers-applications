const express = require('express');
const router = express.Router();
const redis = require('../redis')

const configs = require('../util/config')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

/* GET usage metadata. */
router.get('/statistics', async (req, res) => {
  const added_todos = await redis.getAsync('added_todos') || 0;
  res.json({ added_todos });
});

module.exports = router;
