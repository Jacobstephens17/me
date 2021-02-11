const dotenv = require('dotenv').config()
const express = require('express')
const cors = require("cors")
const path = require('path')


const app = express()
const port = process.env.PORT || 9000


app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname,"client/build")))

app.use('/api/*', (req,res) => {//underscore is a placeholder
    res.json({data: 'Connected'})
})

app.use('*', (req,res) => {
    res.sendFile(path.join(__dirname,'client/build','index.html'))
})

app.listen(port, () => {
    console.log(`Server is alive on port: ${port}`)
})
