const express = require('express')

const dataRouter = require('./routes/data.routes')
const filterRouter = require('./routes/filter.routes')

const PORT = process.env.PORT || 8081

const app = express()

app.use(express.json())

app.use('/api/data', dataRouter)
app.use('/api/filter', filterRouter)

app.listen(PORT, () => console.log(`server start on port ${PORT}`))