const express = require('express')
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')
const hdb = require('express-handlebars')
const db = require('./config/db');
// Import routes
const routes = require('./routes')

const app = express()
const port = process.env.PORT || 3000

// setup logger
const logPath = path.join(__dirname, 'access.log')
const logOptions = {
   flags: 'a',
}
let accessLogStream = fs.createWriteStream(logPath, logOptions)
app.use(morgan('tiny', { stream: accessLogStream }))

// setup static file
app.use(express.static(path.join(__dirname, 'public')))

// connect mongodb
db.connect();

// setup template engine
app.engine(
   'hbs',
   hdb.engine({
      extname: '.hbs',
      defaultLayout: 'main',
      partialsDir: path.join(app.get('views'), 'partials'),
      layoutDir: path.join(app.get('views'), 'layouts'),
   }),
)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '/resources/views'))

// Setup routes
routes(app)

app.listen(port, () => {
   console.log(`Server is running at http://localhost:${port}`)
})
