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

const createMovie= (productObj) => {
    const iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, options,(err, client) =>{
            assert.equal(err, null);

            const db = client.db(db_name);
            const collection = db.collection(col_name);
            collection.insertOne(productObj, (err, doc) =>{
                assert.equal(err, null)
                resolve(doc.ops[0]);
                client.close();
            });
        });
    });
    return iou
};


// Delete a Product, using the 'delete' Mongo Function
const deleteMovie= (id) => {
    const iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, options,(err, client) =>{
            assert.equal(err, null);

            const db = client.db(db_name);
            const collection = db.collection(col_name);
            collection.findOneAndDelete({_id: new ObjectId(id)}, (err, result) => {
                assert.equal(err, null)
                resolve(result.value);
                client.close();
            });
        });
    });  
    return iou     
};

module.exports = {
    readMovies,
    createMovie,
    deleteMovie
}