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
    console.log("customers: ", res);
    result(null, res)
    })
}

module.exports = Books