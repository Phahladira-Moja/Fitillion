import express from 'express'
import bodyParser from 'body-parser'

import {getCommitController, addCommitController, deleteCommitController, readLaterCommitController }  from './controllers'
import makeExpressCallback from './express-callback'

const app = express()
app.use(bodyParser.json())

app.get(`/`, makeExpressCallback(getCommitController))

app.post(`/commits`, makeExpressCallback(addCommitController))

app.get(`/commits`, makeExpressCallback(readLaterCommitController))

app.delete(`/commits`, makeExpressCallback(deleteCommitController))


// listen for requests
app.listen(3000, () => {
    console.log('Server is listening on port 3000')
})

export default app