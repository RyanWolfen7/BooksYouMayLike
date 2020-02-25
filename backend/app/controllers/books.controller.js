const Books = require('../models/book.model')

exports.findAll = (req, res) => {
    // === DB modal ===
    // Books.getAll( (err, data) => {
    //     if (err) {
    //         res.status(500).send({
    //             message:
    //                 err.message || 'Some error Occured'
    //         })
    //     } else {
    //         res.send(data)
    //     }
    // })

    // === Mock DB ===
    res.send('test')
}