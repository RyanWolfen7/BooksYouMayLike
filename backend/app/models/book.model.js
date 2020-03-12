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
    const query = "UPDATE books set name =? , writer =? , date_published =? , cover =? , summary =? WHERE _id = ?"

    sql.query(query, [book.name, book.writer, book.date_published, book.cover, book.summary, book._id], (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
            return
        }
        console.log("book: ", res);
        result(null, res)
    })
}

module.exports = Books