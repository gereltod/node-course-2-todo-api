//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

///count
    // db.collection('Todos').find().count().then((count) =>{
    //     console.log(`Todos count: ${count}`);
    // }, (err) =>{
    //     console.log('Unable to fetch todos', err);
    // });

///find
//  db.collection('Todos').find({
//         _id: new ObjectID('58a1daffc290d02e74bc7fa9')
//     }).toArray().then((docs) =>{
//         console.log('Todos');
//         console.log(JSON.stringify(docs, undefined, 2));
//     }, (err) =>{
//         console.log('Unable to fetch todos', err);
//     });

    db.collection('Users').find({name: 'Ojuu'}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs, undefined, 2));

    });
    //db.close();
});