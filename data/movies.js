const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const { ObjectId } = require('mongodb');
// Setup Database Objects
const url = process.env.DB_URL;
const db_name = process.env.DB_NAME;
const col_name = process.env.COL_NAME;
const options = {
    useUnifiedTopology: true
}

// Read all Products, using the 'find' Mongo Function
const readMovies= () => {
    const iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, options, (err, client) => {
            assert.equal(err, null);

            const db = client.db(db_name);
            const collection = db.collection(col_name);
            collection.find({}).toArray((err, docs) => {
                assert.equal(err, null);
                resolve(docs);
                client.close();
            });
        });
    });
    return iou
};


module.exports = {
    readMovies,
}