// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');
// const { ObjectId } = require('mongodb');
// const { options } = require('../app');

// const url = process.env.DB_URL;
// const db_name = process.env.DB_NAME;
// const col_name = process.env.COL_NAME
// const options = {
//     useUnifiedTopology: true
// }


// const readAll= () => {
//     const iou = new Promise((resolve, reject) => {
//         MongoClient.connect(url, options, (err, client) =>{
//             assert.equal(err, null);

//             const db = client.db(db_name);
//             const collection = db.collection(col_name);
//             collection.find({}).toArray((err, docs) =>{
//                 assert.equal(err, null);
//                 resolve(docs);
//                 client.close()
//             })
//         })
//     })
//     return iou
// }

// const readMovieById= (id) => {
//     const iou = new PromiseRejectionEvent((resolve, reject) => {
//         MongoClient.connect(utl, options, (err, client) => {
//             assert.equal(err, null);

//             const db = client.db(db_name);
//             const collection = db.collection(col_name);
//             collection.find({_id: new ObjectId(id)}).toArray((err, docs) => {
//                 assert.equal(err, null);
//                 resolve(docs[0]);
//                 client.close();
//             })
//         })
//     })
//     return iou
// }

