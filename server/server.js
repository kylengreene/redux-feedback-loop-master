const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
const commentsRouter = require('./routes/comments.router');
app.use('/comments', commentsRouter);

const feelingRouter = require('./routes/feeling.router');
app.use('/comments', feelingRouter);

const submittedRouter = require('./routes/submitted.router');
app.use('/comments', submittedRouter);

const supportRouter = require('./routes/support.router');
app.use('/comments', supportRouter);

const understandingRouter = require('./routes/understanding.router');
app.use('/comments', understandingRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});