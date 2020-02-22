module.exports = app => {
    const books = require('../controllers/books.controller')
    
    app.get('/books', books.findAll)
}