const express = require('express')
const expressHandlebars = require('express-handlebars')
const app = express()

// configura o view engine Handlebars
app.engine('handlebars', expressHandlebars({
defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => res.render('home'))

app.get('/about', (req, res) => res.render('about'))
// página 404 personalizada
app.use((req, res) => {
res.status(404)
res.render('404')
})
// página 500 personalizada
app.use((err, req, res, next) => {
console.error(err.message)
res.status(500)
res.render('500')
})
