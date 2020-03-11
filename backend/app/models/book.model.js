const sql = require('../db.js')

const Books = books => {
    this.books = books.books
} 

Books.getAll = result => {
    sql.query("SELECT * FROM books", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("books: ", res);
        result(null, res)
    })
}

Books.findAndUpdateOne = (book, result) => {
    sql.query("UPDATE books SET ? WHERE ?"), [book, book._id], (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("book: ", res);
        result(null, res)
    }
}

module.exports = Books