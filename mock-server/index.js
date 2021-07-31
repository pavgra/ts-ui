const express = require('express')

const app = express()
app.use(express.json());

const port = 5000

const completedInterviews = {};
const interviewData = require('./interviewData.json');

app.get('/api/v1/interviews/:qId', (req, res) => {
    console.log('Requesting: ' + req.params.qId)
    let responseJson = {...interviewData};
    if (completedInterviews[req.params.qId]) {
        responseJson.status = 'FINISHED';
    }
    res.json(responseJson)
})

app.post('/api/v1/submissions', (req, res) => {
    console.log('Submitting: ' + req.body.submissionId)
    completedInterviews[req.body.submissionId] = true;
    res.json({})
})

app.listen(port, () => {
    console.log(`Mock server is listening at http://localhost:${port}`)
});