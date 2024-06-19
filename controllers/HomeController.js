const db = require('../db.js'); // Ensure you require your database module

exports.index = (req, res) => {
    db.query('SELECT * FROM todo', (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).send('Internal Server Error');
        }
        res.json(results);
    });
};
