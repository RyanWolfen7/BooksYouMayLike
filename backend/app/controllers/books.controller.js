const Books = require('../models/book.model')

exports.findAll = (req, res) => {
    // === DB modal ===
    Books.getAll( (err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || 'Some error Occured'
            })
        } else {
            res.send(data)
        }
    })
}

exports.updateBook = (req, res) => {
    const book = req.body

    Books.findAndUpdateOne( book, (err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || 'Some error Occured'
            })
        } else {
            res.send(data)
        }
    })
}