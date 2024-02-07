const express = require('express')
require('dotenv').config()

const app = express()




app.listen(process.env.PORT, () => {
    console.log(`Server corriendo en  https://localhost:${process.env.PORT}`)
})