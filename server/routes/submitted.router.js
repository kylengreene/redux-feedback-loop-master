const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', async (req, res) => {
    const client = await pool.connect();
    console.table(req.body);

    try {
        const {
            feeling,
            understanding,
            support,
            comments
        } = req.body;
        await client.query('BEGIN')
        const orderInsertResults = await client.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4)
        RETURNING id;`, [feeling, understanding, support, comments]);
        const orderId = orderInsertResults.rows[0].id;

      

        await client.query('COMMIT')
        res.sendStatus(201);
    } catch (error) {
        await client.query('ROLLBACK')
        console.log('Error POST /comments', error);
        res.sendStatus(500);
    } finally {
        client.release()
    }
});


module.exports = router;