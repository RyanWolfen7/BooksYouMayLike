module.exports = app => {
    const books = require('../controllers/books.controller.js')
    
    app.get('/books', books.findAll)

    app.put('/books/update', books.updateBook)
}